# 📦 MIGRATION PLAN - Stari → Demo Projekat
**Generated:** 2025-11-05
**Timeline:** 12 dana (Nov 5 - Nov 17)

---

## 🎯 MIGRATION STRATEGY

**Pristup:** HIBRIDNI
- ✅ Kopiraj što radi
- 🔨 Popravi što je slomljeno
- 🔴 Prepiši što ne valja
- ❌ Preskoči što nije potrebno

**Princip:** MINIMALISTIČKI
- Samo funkcionalnosti potrebne za demo
- Bez komplikacija (auth, permissions, validation)
- Hardkodovane vrijednosti (WiFi, IP)
- Pre-seeded demo data

---

## 📋 MIGRATION CHECKLIST

### PHASE 1: PROJECT SETUP (Day 1) ✅
```bash
✅ Kreiran folder: C:\Users\debra\OneDrive\Desktop\obedio-demo-medstred\
✅ Kreiran audit report
⏳ Kreirati ostale planove
⏳ Git init (optional)
⏳ Package.json setup
```

### PHASE 2: DATABASE (Day 1-2)
```bash
[ ] Kopiraj prisma/schema.prisma
[ ] Update connection string (demo database)
[ ] prisma generate
[ ] prisma db push
[ ] Kreirati seed script sa demo data:
    - 4 crew members (for 4 watches)
    - 10 guests
    - 8 locations (cabins)
    - 3 service categories
    - 1 admin user
[ ] npm run db:seed
```

**Files to Copy:**
```
backend/prisma/schema.prisma                 → prisma/schema.prisma
backend/prisma/seed.ts (modify)              → prisma/seed-demo.ts
```

### PHASE 3: BACKEND CORE (Day 2-3)
```bash
[ ] Setup backend folder structure:
    backend/
    ├── src/
    │   ├── server.ts          (simplified)
    │   ├── services/
    │   │   ├── db.ts
    │   │   ├── mqtt.service.ts
    │   │   ├── websocket.ts
    │   │   └── database.ts
    │   ├── routes/
    │   │   ├── auth.ts        (auto-login version)
    │   │   ├── service-requests.ts (no permissions)
    │   │   ├── guests.ts
    │   │   ├── crew.ts
    │   │   ├── locations.ts
    │   │   ├── messages.ts    (chat)
    │   │   ├── tasks.ts       (NEW - task management)
    │   │   └── activity-logs.ts
    │   ├── middleware/
    │   │   └── simple-auth.ts (hardcoded user)
    │   └── utils/
    │       ├── api-response.ts
    │       └── logger.ts
    ├── package.json
    └── .env (demo config)
```

**Copy & Simplify:**
```typescript
// server.ts - Remove:
- Rate limiting
- Helmet complex CSP
- Permission middleware
- Swagger (optional)

// Add:
- Hardcoded CORS: allow all
- Simple auth middleware
- Direct database access
```

**Files to Copy:**
```
✅ backend/src/services/db.ts
✅ backend/src/services/mqtt.service.ts
✅ backend/src/services/websocket.ts
✅ backend/src/services/database.ts
✅ backend/src/utils/api-response.ts
🔨 backend/src/server.ts (simplify)
🔨 backend/src/routes/auth.ts (auto-login)
🔨 backend/src/routes/service-requests.ts (remove permissions)
🔨 backend/src/routes/guests.ts (add error handling)
```

### PHASE 4: BACKEND API ROUTES (Day 3-4)

**Service Requests API:**
```typescript
// SIMPLIFY: Remove all permission checks
GET    /api/service-requests
POST   /api/service-requests
PUT    /api/service-requests/:id/accept
PUT    /api/service-requests/:id/complete
DELETE /api/service-requests/:id
DELETE /api/service-requests/clear-all
```

**Guests API:**
```typescript
GET    /api/guests
GET    /api/guests/:id
POST   /api/guests
PUT    /api/guests/:id
DELETE /api/guests/:id
```

**Crew API:**
```typescript
GET    /api/crew
GET    /api/crew/:id
```

**Messages API (Chat):**
```typescript
GET    /api/messages
GET    /api/messages/conversation/:userId
POST   /api/messages
PUT    /api/messages/:id/read
```

**Tasks API (NEW):**
```typescript
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
PUT    /api/tasks/:id/complete
```

**Activity Logs API:**
```typescript
GET    /api/activity-logs
```

### PHASE 5: FRONTEND SETUP (Day 4-5)

**Folder Structure:**
```
frontend/
├── src/
│   ├── main.tsx
│   ├── App.tsx (simplified)
│   ├── components/
│   │   ├── ui/            (copy all - Radix UI components)
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx      (redesign)
│   │   │   ├── ServiceRequests.tsx (rewrite)
│   │   │   ├── Guests.tsx         (fix & simplify)
│   │   │   ├── Chat.tsx           (NEW)
│   │   │   ├── Tasks.tsx          (NEW)
│   │   │   ├── ActivityLog.tsx
│   │   │   ├── Crew.tsx
│   │   │   └── Locations.tsx
│   │   └── common/
│   │       ├── AppHeader.tsx
│   │       ├── AppSidebar.tsx
│   │       ├── IncomingRequestDialog.tsx
│   │       └── EmergencyDialog.tsx
│   ├── services/
│   │   ├── api.ts (with credentials: 'include')
│   │   ├── websocket.ts
│   │   └── mqtt.ts (optional)
│   ├── hooks/
│   │   ├── useAuth.ts (simplified)
│   │   ├── useWebSocket.ts
│   │   ├── useServiceRequests.ts
│   │   └── useChat.ts (NEW)
│   └── contexts/
│       ├── AuthContext.tsx (auto-login)
│       └── AppContext.tsx (simplified state)
├── package.json
└── .env (demo config)
```

**Copy UI Components (Radix UI):**
```bash
✅ src/components/ui/button.tsx
✅ src/components/ui/card.tsx
✅ src/components/ui/dialog.tsx
✅ src/components/ui/input.tsx
✅ src/components/ui/label.tsx
✅ src/components/ui/select.tsx
✅ src/components/ui/badge.tsx
✅ src/components/ui/avatar.tsx
✅ src/components/ui/scroll-area.tsx
✅ src/components/ui/separator.tsx
✅ src/components/ui/tabs.tsx
✅ src/components/ui/tooltip.tsx
(copy all ui/*.tsx files)
```

### PHASE 6: FRONTEND PAGES (Day 5-8)

**Day 5: Core Pages**
```
🔴 Dashboard.tsx - Redesign layout, 4 widgets:
   - Active Requests (real-time)
   - On Duty Crew (live status)
   - Recent Activity (log)
   - Quick Actions (buttons)

🔴 ServiceRequests.tsx - Complete rewrite:
   - Simple list view (pending, serving, completed)
   - Accept/Complete buttons
   - Real-time updates (WebSocket)
   - No complex filtering/settings

🔨 Guests.tsx - Fix & simplify:
   - Guest list with search
   - Add/Edit/Delete guest
   - View guest details
   - Location assignment
```

**Day 6: Chat (WOW Effect)**
```
🔴 Chat.tsx - NEW:
   - Real-time messaging (WebSocket)
   - Crew-to-crew chat
   - Message notifications
   - Unread count badge
   - Simple UI (like WhatsApp)

Backend:
   - POST /api/messages
   - GET /api/messages/conversation/:userId
   - WebSocket: message:new event
```

**Day 7: Tasks & Activity**
```
🔴 Tasks.tsx - NEW:
   - Task list (todo, in-progress, done)
   - Assign task to crew
   - Mark complete
   - Priority (low, normal, high)

Backend:
   - Add Task model to Prisma schema
   - CRUD API endpoints
   - WebSocket: task:created, task:updated

✅ ActivityLog.tsx - Copy & test
```

**Day 8: Other Pages**
```
✅ Crew.tsx - Copy existing
✅ Locations.tsx - Copy existing
```

### PHASE 7: REAL-TIME FEATURES (Day 6-7)
```bash
[ ] WebSocket setup
    - Connection management
    - Event listeners:
      * service-request:created
      * service-request:updated
      * message:new
      * task:created
      * task:updated
      * device:status-changed
    - Auto-reconnect on disconnect

[ ] Notifications
    - Browser notifications (optional)
    - In-app toasts
    - Sound alerts (for service requests)
```

### PHASE 8: WEAR OS APP (Day 9-10)
```bash
⏳ WAITING FOR SOURCE CODE from user

Once received:
[ ] Audit Kotlin code
[ ] Update configuration:
    - WiFi SSID: Blagojevic
    - WiFi Password: Lozinka12!
    - MQTT Broker: mqtt://192.168.x.x:1883
    - Server API: http://192.168.x.x:8080
[ ] Build APK
[ ] Install on 4x TicWatch devices
[ ] Test notifications
[ ] Test Accept/Delegate buttons
```

### PHASE 9: ESP32 FIRMWARE (Day 9-10)
```bash
[ ] Kopiraj hardware/esp32-button/esp32-button.ino
[ ] Update configuration:
    WIFI_SSID = "Blagojevic"
    WIFI_PASSWORD = "Lozinka12!"
    MQTT_BROKER = "192.168.x.x"  // IP tablet/server
    LOCATION_ID = "uuid"          // Location from database

[ ] Kopiraj hardware/esp32-watch/esp32-watch.ino (za TicWatch)
[ ] Update configuration (same as button)

[ ] Flash firmware:
    - Test sa Button Simulator (virtual)
    - Flash na ESP32 hardware (ako ima)
    - Flash na 4x TicWatch
```

### PHASE 10: CONFIGURATION & TESTING (Day 11)
```bash
[ ] Backend .env:
    PORT=8080
    DATABASE_URL="postgresql://..."
    JWT_SECRET="demo-secret-key"
    NODE_ENV=production
    MQTT_BROKER="mqtt://192.168.x.x:1883"
    CORS_ORIGIN="*"

[ ] Frontend .env:
    VITE_API_URL=http://192.168.x.x:8080/api
    VITE_WS_URL=http://192.168.x.x:8080
    VITE_MQTT_BROKER=ws://192.168.x.x:9001

[ ] Test sequence:
    1. ✅ Backend server starts
    2. ✅ Database connects
    3. ✅ MQTT broker connects
    4. ✅ Frontend loads
    5. ✅ Login works (auto-login)
    6. ✅ Service Requests page loads
    7. ✅ Button simulator creates request
    8. ✅ Notification appears on tablet
    9. ✅ Accept request works
    10. ✅ WebSocket real-time update works
    11. ✅ Chat sends message
    12. ✅ Task created
    13. ✅ Activity log updated
    14. ✅ Wear OS app receives notification
    15. ✅ Wear OS Accept button works
```

### PHASE 11: BUG FIXES & POLISH (Day 11-12)
```bash
[ ] Fix any bugs found during testing
[ ] Polish UI/UX
[ ] Add loading states
[ ] Add error messages
[ ] Test all user flows
[ ] Optimize performance
```

### PHASE 12: DEPLOYMENT & BACKUP (Day 12)
```bash
[ ] Build frontend: npm run build
[ ] Build backend: npm run build
[ ] Create startup scripts:
    - start-backend.bat
    - start-frontend.bat (or serve from backend)
[ ] Create database backup
[ ] Create git repo backup
[ ] Write setup instructions for demo day
[ ] Test on tablet device
```

---

## 🔧 CONFIGURATION SUMMARY

### WiFi (Hardcoded)
```
SSID: Blagojevic
Password: Lozinka12!
```

### Network Setup (Za Demo)
```
Router: Blagojevic WiFi
Server/Tablet: 192.168.x.x (TBD on demo day)
4x TicWatch: 192.168.x.x (DHCP)
ESP32 Buttons: 192.168.x.x (DHCP - if used)
```

### Ports
```
Backend API: 8080
Frontend: 5173 (dev) / served from backend (prod)
PostgreSQL: 5432
MQTT: 1883
MQTT WebSocket: 9001
```

### Demo Credentials (Hardcoded)
```
Username: demo
Password: demo123
```

---

## 📦 DEPENDENCIES

### Backend
```json
{
  "@prisma/client": "^5.20.0",
  "express": "^4.21.1",
  "socket.io": "^4.8.0",
  "mqtt": "^5.14.1",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5"
}
```

### Frontend
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@tanstack/react-query": "*",
  "socket.io-client": "^4.8.1",
  "@radix-ui/react-*": "*",
  "lucide-react": "^0.487.0",
  "tailwindcss": "*"
}
```

---

## 🚨 CRITICAL PATH ITEMS

**Cannot proceed without:**
1. ⏳ Wear OS source code link (from user)
2. ✅ Database schema decision (use existing)
3. ✅ WiFi credentials (provided: Blagojevic)
4. ⏳ Server IP address (TBD on demo day)

**Must complete before Day 9:**
1. Backend API fully functional
2. Frontend pages working
3. WebSocket real-time updates working
4. Chat functionality complete
5. Task management complete

**Must complete before Day 11:**
1. Wear OS app flashed on 4x TicWatch
2. ESP32 firmware flashed (if used)
3. All devices connected to WiFi
4. MQTT communication tested

---

## 📝 DAILY PROGRESS TRACKING

**Day 1 (Nov 5):**
- [x] Audit existing code
- [x] Create migration plan
- [ ] Setup project structure
- [ ] Copy database schema

**Day 2 (Nov 6):**
- [ ] Database setup & seed
- [ ] Backend core services
- [ ] Start API routes

**Day 3 (Nov 7):**
- [ ] Complete API routes
- [ ] Test API endpoints
- [ ] Frontend setup

**Day 4 (Nov 8):**
- [ ] Frontend pages (Dashboard, Service Requests)
- [ ] WebSocket integration

**Day 5 (Nov 9):**
- [ ] Guests page
- [ ] Chat functionality (start)

**Day 6 (Nov 10):**
- [ ] Chat functionality (complete)
- [ ] Tasks functionality

**Day 7 (Nov 11):**
- [ ] Activity log
- [ ] Other pages

**Day 8 (Nov 12):**
- [ ] Polish frontend
- [ ] UI/UX improvements

**Day 9 (Nov 13):**
- [ ] Wear OS app (waiting for source code)
- [ ] ESP32 firmware

**Day 10 (Nov 14):**
- [ ] Flash devices
- [ ] Test MQTT communication

**Day 11 (Nov 15):**
- [ ] End-to-end testing
- [ ] Bug fixes

**Day 12 (Nov 16):**
- [ ] Final testing
- [ ] Deployment preparation
- [ ] Backup all files

**Nov 17:** Putovanje
**Nov 18:** MedStred Demo 🎯

---

## 🎯 SUCCESS CRITERIA

**Demo Must Work:**
1. ✅ Guest presses button (simulator or hardware)
2. ✅ Service request appears on tablet instantly
3. ✅ Notification sound/visual alert
4. ✅ Official accepts request
5. ✅ Status updates in real-time
6. ✅ Chat message sent and received
7. ✅ Task created and assigned
8. ✅ Activity log shows all actions
9. ✅ Wear OS watch receives notification
10. ✅ Wear OS Accept button works

**Demo Should Work:**
- Multiple simultaneous requests
- 4x watches all receiving notifications
- Battery status visible
- Guest photos displayed
- Location info correct

**Nice to Have:**
- Emergency shake detection
- Voice recording
- Auxiliary buttons (DND, Lights, Food, Drinks)

---

**END OF MIGRATION PLAN**
