# 📁 PROJECT STRUCTURE - Demo Projekat
**Generated:** 2025-11-05

---

## 🏗️ FINAL FOLDER STRUCTURE

```
obedio-demo-medstred/
├── 📄 00-AUDIT-COMPREHENSIVE-REPORT.md       (Ovaj audit)
├── 📄 01-MIGRATION-PLAN.md                   (Plan migracije)
├── 📄 02-PROJECT-STRUCTURE.md                (Ovaj dokument)
├── 📄 03-QUICK-START-GUIDE.md                (Kako pokrenuti)
├── 📄 04-DEMO-SETUP-CHECKLIST.md             (Checklist za demo dan)
├── 📄 README.md                              (Glavni opis projekta)
│
├── 📁 backend/                               🟢 Backend Server
│   ├── 📁 src/
│   │   ├── 📄 server.ts                      [Glavni server file]
│   │   │
│   │   ├── 📁 services/                      [Core services]
│   │   │   ├── db.ts                         [Prisma client]
│   │   │   ├── database.ts                   [Database queries]
│   │   │   ├── mqtt.service.ts               [MQTT broker connection]
│   │   │   └── websocket.ts                  [Socket.io server]
│   │   │
│   │   ├── 📁 routes/                        [API endpoints]
│   │   │   ├── auth.ts                       [Auto-login auth]
│   │   │   ├── service-requests.ts           [Service requests CRUD]
│   │   │   ├── guests.ts                     [Guests CRUD]
│   │   │   ├── crew.ts                       [Crew list]
│   │   │   ├── locations.ts                  [Locations CRUD]
│   │   │   ├── messages.ts                   [Chat API]
│   │   │   ├── tasks.ts                      [Task management]
│   │   │   ├── activity-logs.ts              [Activity log]
│   │   │   └── dashboard.ts                  [Dashboard stats]
│   │   │
│   │   ├── 📁 middleware/                    [Middleware]
│   │   │   └── simple-auth.ts                [Hardcoded auth]
│   │   │
│   │   └── 📁 utils/                         [Utilities]
│   │       ├── api-response.ts               [Response formatter]
│   │       └── logger.ts                     [Console logger]
│   │
│   ├── 📁 prisma/                            [Database]
│   │   ├── schema.prisma                     [Database schema]
│   │   └── seed-demo.ts                      [Demo data seed]
│   │
│   ├── 📄 package.json                       [Dependencies]
│   ├── 📄 tsconfig.json                      [TypeScript config]
│   └── 📄 .env                               [Environment variables]
│
├── 📁 frontend/                              🟢 React Frontend
│   ├── 📁 src/
│   │   ├── 📄 main.tsx                       [Entry point]
│   │   ├── 📄 App.tsx                        [Main app component]
│   │   │
│   │   ├── 📁 components/                    [React components]
│   │   │   │
│   │   │   ├── 📁 pages/                     [Page components]
│   │   │   │   ├── Dashboard.tsx             [Dashboard page]
│   │   │   │   ├── ServiceRequests.tsx       [Service requests]
│   │   │   │   ├── Guests.tsx                [Guest management]
│   │   │   │   ├── Chat.tsx                  [Chat/messaging]
│   │   │   │   ├── Tasks.tsx                 [Task management]
│   │   │   │   ├── ActivityLog.tsx           [Activity log]
│   │   │   │   ├── Crew.tsx                  [Crew list]
│   │   │   │   └── Locations.tsx             [Locations]
│   │   │   │
│   │   │   ├── 📁 common/                    [Shared components]
│   │   │   │   ├── AppHeader.tsx             [Top header]
│   │   │   │   ├── AppSidebar.tsx            [Side navigation]
│   │   │   │   ├── IncomingRequestDialog.tsx [Request popup]
│   │   │   │   └── EmergencyDialog.tsx       [Emergency popup]
│   │   │   │
│   │   │   └── 📁 ui/                        [Radix UI components]
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── input.tsx
│   │   │       ├── badge.tsx
│   │   │       ├── avatar.tsx
│   │   │       └── ... (30+ UI components)
│   │   │
│   │   ├── 📁 services/                      [API & WebSocket]
│   │   │   ├── api.ts                        [Axios/fetch wrapper]
│   │   │   └── websocket.ts                  [Socket.io client]
│   │   │
│   │   ├── 📁 hooks/                         [React hooks]
│   │   │   ├── useAuth.ts                    [Auth hook]
│   │   │   ├── useWebSocket.ts               [WebSocket hook]
│   │   │   ├── useServiceRequests.ts         [Service requests]
│   │   │   └── useChat.ts                    [Chat hook]
│   │   │
│   │   ├── 📁 contexts/                      [React contexts]
│   │   │   ├── AuthContext.tsx               [Auth state]
│   │   │   └── AppContext.tsx                [Global app state]
│   │   │
│   │   └── 📁 types/                         [TypeScript types]
│   │       └── index.ts                      [Type definitions]
│   │
│   ├── 📄 package.json                       [Dependencies]
│   ├── 📄 tsconfig.json                      [TypeScript config]
│   ├── 📄 vite.config.ts                     [Vite config]
│   ├── 📄 tailwind.config.js                 [Tailwind CSS]
│   └── 📄 .env                               [Environment variables]
│
├── 📁 hardware/                              🟢 ESP32 Firmware
│   ├── 📁 esp32-button/                      [Button device]
│   │   ├── esp32-button.ino                  [Arduino sketch]
│   │   └── README.md                         [Setup instructions]
│   │
│   └── 📁 esp32-watch/                       [TWatch device]
│       ├── esp32-watch.ino                   [Arduino sketch]
│       └── README.md                         [Setup instructions]
│
├── 📁 wear-os/                               🟢 Android Wear OS App
│   ├── 📁 app/
│   │   ├── 📁 src/
│   │   │   └── 📁 main/
│   │   │       ├── 📁 java/com/obedio/wear/
│   │   │       │   ├── MainActivity.kt       [Main activity]
│   │   │       │   ├── NotificationService.kt[MQTT notifications]
│   │   │       │   └── MqttManager.kt        [MQTT connection]
│   │   │       └── AndroidManifest.xml       [App manifest]
│   │   │
│   │   └── build.gradle                      [App build config]
│   │
│   ├── build.gradle                          [Project build config]
│   └── README.md                             [Build instructions]
│
├── 📁 scripts/                               🟢 Utility Scripts
│   ├── start-backend.bat                     [Start backend server]
│   ├── start-frontend.bat                    [Start frontend dev]
│   ├── build-all.bat                         [Build everything]
│   ├── seed-database.bat                     [Seed demo data]
│   └── install-dependencies.bat              [npm install all]
│
├── 📁 docs/                                  🟢 Documentation
│   ├── API.md                                [API reference]
│   ├── DATABASE.md                           [Database schema docs]
│   ├── MQTT.md                               [MQTT topics & messages]
│   ├── WEBSOCKET.md                          [WebSocket events]
│   └── TROUBLESHOOTING.md                    [Common issues]
│
└── 📁 demo-data/                             🟢 Demo Files
    ├── guests.json                           [Demo guests]
    ├── crew.json                             [Demo crew]
    ├── locations.json                        [Demo locations]
    └── service-categories.json               [Demo categories]
```

---

## 📦 PACKAGE DEPENDENCIES

### Backend (package.json)
```json
{
  "name": "obedio-demo-backend",
  "version": "1.0.0",
  "description": "OBEDIO Demo Backend - MedStred 2025",
  "main": "dist/server.js",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "db:push": "prisma db push",
    "db:seed": "tsx prisma/seed-demo.ts"
  },
  "dependencies": {
    "@prisma/client": "^5.20.0",
    "express": "^4.21.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "socket.io": "^4.8.0",
    "mqtt": "^5.14.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cookie-parser": "^1.4.7"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/express": "^4.17.21",
    "typescript": "^5.6.3",
    "tsx": "^4.19.1",
    "prisma": "^5.20.0"
  }
}
```

### Frontend (package.json)
```json
{
  "name": "obedio-demo-frontend",
  "version": "1.0.0",
  "description": "OBEDIO Demo Frontend - MedStred 2025",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@tanstack/react-query": "^5.0.0",
    "socket.io-client": "^4.8.1",
    "axios": "^1.6.0",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-badge": "^1.0.0",
    "lucide-react": "^0.487.0",
    "tailwindcss": "^3.4.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.0",
    "sonner": "^2.0.3"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "typescript": "^5.6.3",
    "vite": "^6.3.5",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

---

## 🗄️ DATABASE SCHEMA (SIMPLIFIED)

### Key Models for Demo

**User** (Auto-login hardcoded user)
```prisma
model User {
  id        String   @id @default(cuid())
  username  String   @unique
  email     String   @unique
  password  String
  firstName String?
  lastName  String?
  role      String   @default("crew")
  createdAt DateTime @default(now())
}
```

**ServiceRequest** (Core functionality)
```prisma
model ServiceRequest {
  id              String   @id @default(cuid())
  requestType     String   @default("call")
  guestId         String?
  locationId      String?
  priority        String   @default("normal")
  status          String   @default("pending")
  notes           String?
  assignedTo      String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  guest           Guest?   @relation(fields: [guestId], references: [id])
  location        Location? @relation(fields: [locationId], references: [id])
}
```

**Guest** (Guest management)
```prisma
model Guest {
  id            String   @id @default(cuid())
  firstName     String
  lastName      String
  photo         String?
  type          String   @default("guest")
  status        String   @default("onboard")
  locationId    String?
  preferences   String?
  createdAt     DateTime @default(now())
  location      Location? @relation(fields: [locationId], references: [id])
  serviceRequests ServiceRequest[]
}
```

**CrewMember** (Crew data)
```prisma
model CrewMember {
  id         String   @id @default(cuid())
  name       String
  position   String
  department String
  status     String
  avatar     String?
  createdAt  DateTime @default(now())
}
```

**Location** (Cabins/Areas)
```prisma
model Location {
  id              String   @id @default(cuid())
  name            String   @unique
  type            String
  floor           String?
  description     String?
  createdAt       DateTime @default(now())
  guests          Guest[]
  serviceRequests ServiceRequest[]
}
```

**Message** (Chat - NEW)
```prisma
model Message {
  id         String   @id @default(cuid())
  senderId   String
  receiverId String?
  content    String
  type       String   @default("text")
  isRead     Boolean  @default(false)
  createdAt  DateTime @default(now())
}
```

**Task** (Task Management - NEW)
```prisma
model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  assignedTo  String?
  priority    String   @default("normal")
  status      String   @default("todo")
  dueDate     DateTime?
  createdAt   DateTime @default(now())
  completedAt DateTime?
}
```

**ActivityLog** (System log)
```prisma
model ActivityLog {
  id        String   @id @default(cuid())
  action    String
  details   String?
  userId    String?
  type      String   @default("info")
  createdAt DateTime @default(now())
}
```

---

## ⚙️ CONFIGURATION FILES

### Backend .env
```bash
# Server
PORT=8080
NODE_ENV=production

# Database
DATABASE_URL="postgresql://postgres:demo@localhost:5432/obedio_demo"

# Auth (simplified)
JWT_SECRET="demo-secret-key-12345"

# MQTT
MQTT_BROKER="mqtt://192.168.1.100:1883"  # Change to tablet IP
MQTT_USERNAME=""
MQTT_PASSWORD=""

# CORS
CORS_ORIGIN="*"  # Allow all for demo
```

### Frontend .env
```bash
# API
VITE_API_URL=http://192.168.1.100:8080/api  # Change to tablet IP
VITE_WS_URL=http://192.168.1.100:8080       # Change to tablet IP

# MQTT (optional for frontend)
VITE_MQTT_BROKER=ws://192.168.1.100:9001    # Change to tablet IP
```

### WiFi Hardcoded (ESP32 & Wear OS)
```cpp
// ESP32 Firmware
const char* WIFI_SSID = "Blagojevic";
const char* WIFI_PASSWORD = "Lozinka12!";
const char* MQTT_BROKER = "192.168.1.100";  // Change to tablet IP
```

```kotlin
// Wear OS App
val WIFI_SSID = "Blagojevic"
val WIFI_PASSWORD = "Lozinka12!"
val MQTT_BROKER = "mqtt://192.168.1.100:1883"  // Change to tablet IP
```

---

## 🔌 API ENDPOINTS

### Authentication
```
POST /api/auth/login       - Auto-login (hardcoded demo/demo123)
GET  /api/auth/me          - Get current user
POST /api/auth/logout      - Logout (optional)
```

### Service Requests
```
GET    /api/service-requests         - List all requests
POST   /api/service-requests         - Create new request
PUT    /api/service-requests/:id/accept    - Accept request
PUT    /api/service-requests/:id/complete  - Complete request
DELETE /api/service-requests/:id     - Delete request
```

### Guests
```
GET    /api/guests          - List all guests
GET    /api/guests/:id      - Get single guest
POST   /api/guests          - Create guest
PUT    /api/guests/:id      - Update guest
DELETE /api/guests/:id      - Delete guest
```

### Crew
```
GET    /api/crew            - List all crew
GET    /api/crew/:id        - Get single crew member
```

### Messages (Chat)
```
GET    /api/messages                          - List all messages
GET    /api/messages/conversation/:userId     - Get conversation
POST   /api/messages                          - Send message
PUT    /api/messages/:id/read                 - Mark as read
```

### Tasks
```
GET    /api/tasks           - List all tasks
POST   /api/tasks           - Create task
PUT    /api/tasks/:id       - Update task
DELETE /api/tasks/:id       - Delete task
PUT    /api/tasks/:id/complete - Mark complete
```

### Locations
```
GET    /api/locations       - List all locations
GET    /api/locations/:id   - Get single location
POST   /api/locations       - Create location
PUT    /api/locations/:id   - Update location
```

### Activity Log
```
GET    /api/activity-logs   - List activity log
```

### Dashboard
```
GET    /api/dashboard/stats - Get dashboard statistics
```

---

## 📡 WEBSOCKET EVENTS

### Server → Client (Frontend)
```javascript
'service-request:created'      // New service request
'service-request:updated'      // Request status changed
'service-request:completed'    // Request completed
'message:new'                  // New chat message
'task:created'                 // New task
'task:updated'                 // Task status changed
'device:status-changed'        // Device online/offline
'activity:new'                 // New activity log entry
```

### Client → Server (Frontend)
```javascript
'join-room'                    // Join specific room
'leave-room'                   // Leave room
```

---

## 📱 MQTT TOPICS

### ESP32 → Server
```
obedio/button/{deviceId}/press        - Button press event
obedio/button/{deviceId}/status       - Device status
obedio/device/register                - Device registration
obedio/device/heartbeat               - Keep-alive
```

### Server → Wear OS
```
obedio/watch/{deviceId}/notification  - Service request notification
```

### Wear OS → Server
```
obedio/watch/{deviceId}/acknowledge   - Accept/Delegate response
```

---

## 🎨 UI PAGES

### Dashboard
```
┌─────────────────────────────────────┐
│ Active Requests (4)                 │
│ ┌─────────┬─────────┬─────────┐    │
│ │ Pending │Serving  │Complete │    │
│ │    3    │   1     │   15    │    │
│ └─────────┴─────────┴─────────┘    │
├─────────────────────────────────────┤
│ On Duty Crew (3)                    │
│ ● John (Steward)                    │
│ ● Maria (Housekeeper)               │
│ ● Alex (Chef)                       │
├─────────────────────────────────────┤
│ Recent Activity                     │
│ • Guest Sofia requested service     │
│ • John accepted request #1234       │
│ • Task "Clean deck" completed       │
└─────────────────────────────────────┘
```

### Service Requests
```
┌─────────────────────────────────────┐
│ Service Requests                    │
│ [New Request]  [Clear All]          │
├─────────────────────────────────────┤
│ PENDING (3)                         │
│ ┌─────────────────────────────────┐│
│ │🔴 Cabin A - Sofia Anderson      ││
│ │   Call · 2 min ago              ││
│ │   [Accept] [Delegate]           ││
│ └─────────────────────────────────┘│
│ ┌─────────────────────────────────┐│
│ │🟡 Cabin B - Michael Brown       ││
│ │   Drinks · 5 min ago            ││
│ │   [Accept] [Delegate]           ││
│ └─────────────────────────────────┘│
├─────────────────────────────────────┤
│ SERVING (1)                         │
│ ┌─────────────────────────────────┐│
│ │🟢 Cabin C - Emily White         ││
│ │   Assigned to John              ││
│ │   [Complete]                    ││
│ └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### Chat
```
┌─────────────────────────────────────┐
│ Messages                            │
├──────────┬──────────────────────────┤
│ John (3) │ John Smith               │
│ Maria    │ ┌────────────────────┐   │
│ Alex     │ │ Where are you?     │   │
│ Sofia    │ │          10:30 AM  │   │
│          │ └────────────────────┘   │
│          │ ┌────────────────────┐   │
│          │ │ At Cabin A         │   │
│          │ │ 10:32 AM           │   │
│          │ └────────────────────┘   │
│          │ [Type message...]        │
└──────────┴──────────────────────────┘
```

---

## 🚀 STARTUP SEQUENCE

**1. Start PostgreSQL Database**
```bash
# Windows
net start postgresql

# Or start manually
pg_ctl start -D "C:\Program Files\PostgreSQL\16\data"
```

**2. Start Backend Server**
```bash
cd backend
npm run dev
# Server starts on http://localhost:8080
```

**3. Start Frontend**
```bash
cd frontend
npm run dev
# Frontend starts on http://localhost:5173
```

**4. Open Browser**
```
http://localhost:5173
```

**5. Auto-Login**
```
Username: demo
Password: demo123
(Or auto-login configured)
```

---

**END OF PROJECT STRUCTURE**
