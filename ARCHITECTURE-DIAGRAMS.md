# 🏗️ ARCHITECTURE DIAGRAMS - Mermaid
**Created:** 2025-11-05
**Purpose:** Visual representation of OBEDIO system architecture

---

## 📊 SYSTEM OVERVIEW

```mermaid
graph TB
    subgraph "Client Devices"
        ESP32[ESP32 Smart Buttons]
        Mobile[iOS/Android Apps<br/>React Native]
        Web[Web Dashboard<br/>React]
        WearOS[Wear OS App<br/>Kotlin]
        AppleWatch[Apple Watch App<br/>Swift]
    end

    subgraph "OBEDIO Server"
        API[Express API Server<br/>Port 8080]
        WS[WebSocket Server<br/>Socket.io]
        MQTT[MQTT Service<br/>Mosquitto]
        DB[(PostgreSQL<br/>Database)]
    end

    subgraph "Real-Time Communication"
        MQTT_Broker[MQTT Broker<br/>Port 1883]
    end

    ESP32 -.MQTT.-> MQTT_Broker
    MQTT_Broker --> MQTT

    Mobile -->|HTTP/REST| API
    Mobile -->|WebSocket| WS

    Web -->|HTTP/REST| API
    Web -->|WebSocket| WS

    WearOS -.MQTT.-> MQTT_Broker
    AppleWatch -.MQTT.-> MQTT_Broker

    API --> DB
    MQTT --> DB
    WS --> DB

    MQTT -->|Emit Events| WS
    API -->|Emit Events| WS

    style ESP32 fill:#C8A96B
    style Mobile fill:#3B82F6
    style Web fill:#10B981
    style WearOS fill:#F59E0B
    style AppleWatch fill:#8B5CF6
    style API fill:#EF4444
    style DB fill:#1E293B
```

---

## 🔄 SERVICE REQUEST FLOW

```mermaid
sequenceDiagram
    actor Guest
    participant Button as ESP32 Button
    participant MQTT as MQTT Broker
    participant Server as OBEDIO Server
    participant DB as PostgreSQL
    participant WS as WebSocket
    participant Dashboard as Web Dashboard
    participant Watch as Crew Watch

    Guest->>Button: Presses button
    Button->>MQTT: Publish button_press event
    MQTT->>Server: Receive event

    Server->>DB: Create ServiceRequest
    DB-->>Server: Request created (ID, status)

    Server->>WS: Emit service-request:created

    WS->>Dashboard: Push notification
    Dashboard->>Guest: Show notification popup

    WS->>Watch: Push notification
    Watch->>Crew: Vibrate & display

    Crew->>Watch: Press Accept
    Watch->>MQTT: Publish acknowledge
    MQTT->>Server: Receive acknowledge

    Server->>DB: Update status to "serving"
    DB-->>Server: Updated

    Server->>WS: Emit service-request:updated
    WS->>Dashboard: Update UI (real-time)
    WS->>Watch: Update status

    Crew->>Watch: Complete service
    Watch->>Server: Complete request
    Server->>DB: Update status to "completed"
    Server->>WS: Emit service-request:completed
    WS->>Dashboard: Update UI
```

---

## 📱 FRONTEND ARCHITECTURE

```mermaid
graph TB
    subgraph "Frontend Application"
        App[App.tsx<br/>Main Entry Point]

        subgraph "Pages"
            Dashboard[Dashboard Page]
            ServiceReq[Service Requests Page]
            Guests[Guests Page]
            Chat[Chat Page]
            Tasks[Tasks Page]
            Crew[Crew Page]
            ActivityLog[Activity Log Page]
            Locations[Locations Page]
        end

        subgraph "Components"
            Widgets[Widget Components]
            UI[UI Components<br/>Radix UI]
            Common[Common Components]
        end

        subgraph "Services"
            API[API Service<br/>axios/fetch]
            WebSocket[WebSocket Service<br/>Socket.io Client]
        end

        subgraph "State Management"
            ReactQuery[React Query<br/>Server State]
            Context[Context API<br/>Global State]
        end

        subgraph "Hooks"
            UseAuth[useAuth]
            UseData[useServiceRequests<br/>useGuests<br/>useCrew]
            UseWS[useWebSocket]
        end
    end

    App --> Dashboard
    App --> ServiceReq
    App --> Guests
    App --> Chat
    App --> Tasks

    Dashboard --> Widgets
    ServiceReq --> UI
    Guests --> Common

    Widgets --> UseData
    UI --> UseAuth
    Common --> UseWS

    UseData --> ReactQuery
    UseAuth --> Context
    UseWS --> WebSocket

    ReactQuery --> API
    API -->|HTTP/REST| Backend[Backend Server]
    WebSocket -->|WebSocket| Backend

    style App fill:#3B82F6
    style Dashboard fill:#10B981
    style API fill:#EF4444
    style ReactQuery fill:#F59E0B
```

---

## 🗄️ DATABASE SCHEMA (Simplified)

```mermaid
erDiagram
    User ||--o{ ServiceRequest : creates
    User ||--o| CrewMember : "is a"
    User ||--o| UserPreferences : has

    Guest ||--o{ ServiceRequest : makes
    Guest }o--|| Location : "stays in"

    CrewMember ||--o{ ServiceRequest : accepts
    CrewMember ||--o{ Device : "assigned to"
    CrewMember ||--o{ Assignment : has

    Location ||--o{ Guest : hosts
    Location ||--o{ ServiceRequest : "receives"
    Location ||--o{ Device : "has"

    ServiceRequest }o--|| ServiceCategory : "belongs to"

    Shift ||--o{ Assignment : schedules

    Device ||--o{ DeviceLog : generates

    User {
        string id PK
        string username
        string email
        string password
        string role
        datetime createdAt
    }

    Guest {
        string id PK
        string firstName
        string lastName
        string photo
        string type
        string status
        string locationId FK
        datetime createdAt
    }

    ServiceRequest {
        string id PK
        string requestType
        string guestId FK
        string locationId FK
        string priority
        string status
        string assignedToId FK
        datetime createdAt
    }

    CrewMember {
        string id PK
        string name
        string position
        string department
        string status
        string userId FK
    }

    Location {
        string id PK
        string name
        string type
        string floor
        boolean doNotDisturb
    }

    Device {
        string id PK
        string deviceId
        string name
        string type
        string status
        string locationId FK
        string crewMemberId FK
    }
```

---

## 🔐 AUTHENTICATION FLOW

```mermaid
sequenceDiagram
    actor User
    participant Login as Login Page
    participant API as Auth API
    participant DB as Database
    participant App as Application

    User->>Login: Enter credentials
    Login->>API: POST /api/auth/login
    API->>DB: Find user by username
    DB-->>API: User data
    API->>API: Compare passwords (bcrypt)

    alt Valid credentials
        API->>API: Generate JWT token
        API->>API: Set HTTP-only cookie
        API-->>Login: {success: true, user, token}
        Login->>App: Navigate to Dashboard
        App->>API: Verify token on each request
    else Invalid credentials
        API-->>Login: {success: false, error}
        Login->>User: Show error message
    end
```

---

## 🌐 API ARCHITECTURE

```mermaid
graph LR
    subgraph "Client Requests"
        Client[Client<br/>Web/Mobile]
    end

    subgraph "Express Middleware Chain"
        CORS[CORS Handler]
        RateLimit[Rate Limiter]
        Auth[Auth Middleware]
        Validate[Request Validation]
        ErrorHandler[Error Handler]
    end

    subgraph "API Routes"
        AuthRoute[/api/auth]
        GuestsRoute[/api/guests]
        ServiceRoute[/api/service-requests]
        CrewRoute[/api/crew]
        LocationsRoute[/api/locations]
        MessagesRoute[/api/messages]
        TasksRoute[/api/tasks]
    end

    subgraph "Business Logic"
        DBService[Database Service]
        WSService[WebSocket Service]
        MQTTService[MQTT Service]
    end

    subgraph "Data Layer"
        Prisma[Prisma ORM]
        DB[(PostgreSQL)]
    end

    Client -->|HTTP Request| CORS
    CORS --> RateLimit
    RateLimit --> Auth
    Auth --> Validate

    Validate --> AuthRoute
    Validate --> GuestsRoute
    Validate --> ServiceRoute
    Validate --> CrewRoute
    Validate --> LocationsRoute
    Validate --> MessagesRoute
    Validate --> TasksRoute

    AuthRoute --> DBService
    GuestsRoute --> DBService
    ServiceRoute --> DBService
    ServiceRoute --> WSService
    ServiceRoute --> MQTTService

    DBService --> Prisma
    Prisma --> DB

    DBService -->|Response| ErrorHandler
    ErrorHandler -->|JSON| Client

    WSService -.Real-time Updates.-> Client

    style Client fill:#3B82F6
    style Auth fill:#EF4444
    style DBService fill:#10B981
    style DB fill:#1E293B
```

---

## 📡 REAL-TIME UPDATES (WebSocket)

```mermaid
graph TB
    subgraph "Server Events"
        Create[service-request:created]
        Update[service-request:updated]
        Complete[service-request:completed]
        Message[message:new]
        Task[task:created]
        Device[device:status-changed]
    end

    subgraph "WebSocket Server"
        SocketIO[Socket.io Server<br/>Port 8080]
    end

    subgraph "Connected Clients"
        Web1[Web Dashboard 1]
        Web2[Web Dashboard 2]
        Mobile1[Mobile App 1]
        Mobile2[Mobile App 2]
    end

    Create --> SocketIO
    Update --> SocketIO
    Complete --> SocketIO
    Message --> SocketIO
    Task --> SocketIO
    Device --> SocketIO

    SocketIO -.Broadcast.-> Web1
    SocketIO -.Broadcast.-> Web2
    SocketIO -.Broadcast.-> Mobile1
    SocketIO -.Broadcast.-> Mobile2

    Web1 -.Event Listener.-> SocketIO
    Mobile1 -.Event Listener.-> SocketIO

    style Create fill:#10B981
    style Update fill:#3B82F6
    style Complete fill:#8B5CF6
    style Message fill:#F59E0B
    style SocketIO fill:#EF4444
```

---

## 📋 PAGE-BY-PAGE WORKFLOW

```mermaid
graph LR
    Start([Start Development]) --> Dashboard

    Dashboard[Dashboard Page<br/>4 Widgets] --> DashTest{Test &<br/>Approve?}
    DashTest -->|No| DashboardFix[Fix Issues]
    DashboardFix --> Dashboard
    DashTest -->|Yes| ServiceReq

    ServiceReq[Service Requests<br/>Page] --> ServiceTest{Test &<br/>Approve?}
    ServiceTest -->|No| ServiceFix[Fix Issues]
    ServiceFix --> ServiceReq
    ServiceTest -->|Yes| Guests

    Guests[Guests Page<br/>Management] --> GuestsTest{Test &<br/>Approve?}
    GuestsTest -->|No| GuestsFix[Fix Issues]
    GuestsFix --> Guests
    GuestsTest -->|Yes| Chat

    Chat[Chat Page<br/>NEW] --> ChatTest{Test &<br/>Approve?}
    ChatTest -->|No| ChatFix[Fix Issues]
    ChatFix --> Chat
    ChatTest -->|Yes| Tasks

    Tasks[Tasks Page<br/>NEW] --> TasksTest{Test &<br/>Approve?}
    TasksTest -->|No| TasksFix[Fix Issues]
    TasksFix --> Tasks
    TasksTest -->|Yes| ActivityLog

    ActivityLog[Activity Log<br/>Page] --> ActivityTest{Test &<br/>Approve?}
    ActivityTest -->|No| ActivityFix[Fix Issues]
    ActivityFix --> ActivityLog
    ActivityTest -->|Yes| OtherPages

    OtherPages[Crew, Locations<br/>Other Pages] --> Final{All Pages<br/>Complete?}
    Final -->|No| OtherPagesFix[Fix Issues]
    OtherPagesFix --> OtherPages
    Final -->|Yes| MobileApps

    MobileApps[React Native<br/>iOS/Android] --> WearOS
    WearOS[Wear OS<br/>App] --> AppleWatch
    AppleWatch[Apple Watch<br/>App] --> DemoReady

    DemoReady([Demo Ready!<br/>Nov 18])

    style Start fill:#10B981
    style Dashboard fill:#3B82F6
    style Chat fill:#F59E0B
    style Tasks fill:#8B5CF6
    style DemoReady fill:#EF4444
```

---

## 🎯 DEVELOPMENT TIMELINE (Mermaid Gantt)

```mermaid
gantt
    title OBEDIO Demo Development Timeline (12 Days)
    dateFormat  YYYY-MM-DD

    section Setup
    Project Setup & Audit           :done, setup, 2025-11-05, 1d
    Rules & Documentation          :done, docs, 2025-11-05, 1d

    section Backend
    Database Setup                  :db, 2025-11-06, 1d
    Backend API Routes              :api, after db, 2d

    section Frontend
    Dashboard Page                  :dash, 2025-11-08, 1d
    Service Requests Page           :service, after dash, 1d
    Guests Page                     :guests, after service, 1d
    Chat Page (NEW)                 :chat, after guests, 1d
    Tasks Page (NEW)                :tasks, after chat, 1d
    Activity Log & Others           :activity, after tasks, 1d

    section Mobile Apps
    React Native App                :mobile, 2025-11-13, 2d
    Wear OS App                     :wearos, 2025-11-14, 2d
    Apple Watch App                 :applewatch, 2025-11-15, 1d

    section Testing
    Integration Testing             :testing, 2025-11-15, 1d
    Bug Fixes                       :bugs, after testing, 1d

    section Demo
    Final Preparation               :crit, 2025-11-16, 1d
    Travel Day                      :milestone, 2025-11-17, 1d
    MedStred Demo                   :milestone, demo, 2025-11-18, 1d
```

---

## 🔄 DATA FLOW: Button Press → Notification

```mermaid
flowchart TD
    Start([Guest needs service]) --> Press[Guest presses<br/>ESP32 button]

    Press --> MQTT{MQTT Topic:<br/>obedio/button/+/press}

    MQTT --> Server[OBEDIO Server<br/>receives message]

    Server --> Parse[Parse button data:<br/>deviceId, pressType,<br/>battery, location]

    Parse --> DeviceCheck{Device<br/>exists in DB?}

    DeviceCheck -->|No| CreateDevice[Auto-create<br/>virtual device]
    CreateDevice --> FindGuest

    DeviceCheck -->|Yes| FindGuest[Find guest<br/>by location]

    FindGuest --> DerivePriority[Derive priority<br/>from pressType:<br/>single/double/long/shake]

    DerivePriority --> CreateRequest[Create ServiceRequest<br/>in PostgreSQL]

    CreateRequest --> LogActivity[Log to<br/>ActivityLog]

    LogActivity --> EmitWS[Emit WebSocket event:<br/>service-request:created]

    EmitWS --> NotifyDash[Notify Web Dashboard<br/>Real-time popup]

    EmitWS --> NotifyWatch[Notify Crew Watch<br/>via MQTT]

    NotifyDash --> ShowPopup[Show notification<br/>with sound/vibration]

    NotifyWatch --> WatchVibrate[Watch vibrates<br/>Shows guest info]

    ShowPopup --> Accept[Crew presses<br/>Accept button]

    Accept --> UpdateStatus[Update status<br/>to 'serving']

    UpdateStatus --> EmitUpdate[Emit:<br/>service-request:updated]

    EmitUpdate --> UpdateUI[Update all<br/>connected clients]

    UpdateUI --> Complete[Crew completes<br/>service]

    Complete --> MarkComplete[Update status<br/>to 'completed']

    MarkComplete --> End([Service completed!])

    style Start fill:#10B981
    style Press fill:#C8A96B
    style CreateRequest fill:#3B82F6
    style NotifyDash fill:#F59E0B
    style NotifyWatch fill:#8B5CF6
    style End fill:#EF4444
```

---

**END OF ARCHITECTURE DIAGRAMS**

**Created:** 2025-11-05
**Purpose:** Visual guide for understanding OBEDIO system
**Format:** Mermaid (renders on GitHub, GitLab, Notion, VS Code)

**How to view:**
- GitHub: Automatically renders
- VS Code: Install "Markdown Preview Mermaid Support" extension
- Online: https://mermaid.live (paste code)
