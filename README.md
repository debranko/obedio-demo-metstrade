# 🛥️ OBEDIO - Yacht Crew Management System (Demo)
**Version:** 1.0.0 (Demo for MedStred 2025)
**Demo Date:** 18. novembra 2025
**Status:** 🚧 Under Development (12 days remaining)

---

## 📖 PROJECT OVERVIEW

**OBEDIO** je real-time sistem za upravljanje posadu i gostima na luksuznim jahtama. Sistem omogućava:

- 📱 **Service Requests** - Gost pritisne dugme → Posada dobije notifikaciju
- 💬 **Real-Time Chat** - Instant komunikacija između članova posade
- ✅ **Task Management** - Dodeljivanje i praćenje zadataka
- 👥 **Guest Management** - Upravljanje gostima i njihovim preferencama
- 📊 **Activity Log** - Kompletna istorija svih aktivnosti
- ⌚ **Wear OS Integration** - Notifikacije na pametnim satovima (4x TicWatch)

### Demo Purpose
Ovaj projekat je **simplifikovana demo verzija** za MedStred sajam, fokusirana na:
- ✅ Funkcionalne demo
- ✅ Real-time features (WebSocket)
- ✅ WOW efekat (Chat, Wear OS)
- ❌ Minimalno security/auth komplikacije
- ❌ Hardkodovane vrednosti za demo

---

## 🚀 QUICK START

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git

### Installation
```bash
# 1. Install dependencies
npm install
cd backend && npm install

# 2. Setup database
cd backend
npm run db:push
npm run db:seed

# 3. Start servers
npm run dev          # Backend (port 8080)
cd ../
npm run dev          # Frontend (port 5173)

# 4. Open browser
http://localhost:5173
```

**Full instructions:** [03-QUICK-START-GUIDE.md](./03-QUICK-START-GUIDE.md)

---

## 📁 PROJECT STRUCTURE

```
obedio-demo-medstred/
├── backend/          🟢 Express.js + Prisma + Socket.io + MQTT
├── frontend/         🟢 React + TypeScript + Vite + Tailwind
├── hardware/         🟢 ESP32 Firmware (Button + Watch)
├── wear-os/          🟢 Android Wear OS App (TicWatch)
├── docs/             📚 Documentation
└── scripts/          🛠️ Utility scripts
```

**Full structure:** [02-PROJECT-STRUCTURE.md](./02-PROJECT-STRUCTURE.md)

---

## 📚 DOCUMENTATION

### Getting Started
1. **[00-AUDIT-COMPREHENSIVE-REPORT.md](./00-AUDIT-COMPREHENSIVE-REPORT.md)** - Detailed audit of existing codebase
2. **[01-MIGRATION-PLAN.md](./01-MIGRATION-PLAN.md)** - Step-by-step migration plan
3. **[02-PROJECT-STRUCTURE.md](./02-PROJECT-STRUCTURE.md)** - Project architecture & structure
4. **[03-QUICK-START-GUIDE.md](./03-QUICK-START-GUIDE.md)** - Installation & setup instructions
5. **[04-DEMO-SETUP-CHECKLIST.md](./04-DEMO-SETUP-CHECKLIST.md)** - Demo day preparation checklist

### Technical Documentation
- **API.md** - API endpoints reference
- **DATABASE.md** - Database schema documentation
- **MQTT.md** - MQTT topics & message formats
- **WEBSOCKET.md** - WebSocket events
- **TROUBLESHOOTING.md** - Common issues & solutions

---

## 🏗️ ARCHITECTURE

### Backend Stack
- **Framework:** Express.js
- **Database:** PostgreSQL + Prisma ORM
- **Real-Time:** Socket.io (WebSocket)
- **IoT:** MQTT (Mosquitto broker)
- **Auth:** JWT (simplified for demo)

### Frontend Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Library:** Radix UI + Tailwind CSS
- **State Management:** React Query + Context API
- **Real-Time:** Socket.io Client

### Hardware
- **Button Device:** ESP32 (WiFi + MQTT)
- **Crew Watches:** 4x TicWatch (Wear OS)
- **Network:** WiFi (Blagojevic)

---

## 🔌 API ENDPOINTS

### Service Requests
```
GET    /api/service-requests          - List all requests
POST   /api/service-requests          - Create new request
PUT    /api/service-requests/:id/accept    - Accept request
PUT    /api/service-requests/:id/complete  - Complete request
```

### Guests
```
GET    /api/guests          - List all guests
POST   /api/guests          - Create guest
PUT    /api/guests/:id      - Update guest
DELETE /api/guests/:id      - Delete guest
```

### Messages (Chat)
```
GET    /api/messages                          - List all messages
POST   /api/messages                          - Send message
GET    /api/messages/conversation/:userId     - Get conversation
```

**Full API reference:** [docs/API.md](./docs/API.md)

---

## 📡 REAL-TIME EVENTS

### WebSocket Events (Server → Client)
```javascript
'service-request:created'      // New service request
'service-request:updated'      // Request status changed
'message:new'                  // New chat message
'task:created'                 // New task
'device:status-changed'        // Device online/offline
'activity:new'                 // New activity log entry
```

### MQTT Topics
```
obedio/button/{deviceId}/press        - Button press event
obedio/watch/{deviceId}/notification  - Watch notification
obedio/watch/{deviceId}/acknowledge   - Watch response
```

**Full event documentation:** [docs/WEBSOCKET.md](./docs/WEBSOCKET.md) & [docs/MQTT.md](./docs/MQTT.md)

---

## 🗄️ DATABASE

**Database:** PostgreSQL
**ORM:** Prisma

### Key Models
- `User` - Authentication & user data
- `ServiceRequest` - Service request tracking
- `Guest` - Guest information & preferences
- `CrewMember` - Crew data & assignments
- `Location` - Cabins, decks, areas
- `Message` - Chat messages
- `Task` - Task management
- `ActivityLog` - System activity log

**Full schema:** [backend/prisma/schema.prisma](./backend/prisma/schema.prisma)
**Schema documentation:** [docs/DATABASE.md](./docs/DATABASE.md)

---

## ⚙️ CONFIGURATION

### WiFi (Hardcoded for Demo)
```
SSID: Blagojevic
Password: Lozinka12!
```

### Network
```
Router: Blagojevic WiFi
Server/Tablet: 192.168.x.x (TBD on demo day)
4x TicWatch: DHCP
```

### Ports
```
Backend API: 8080
Frontend: 5173 (dev) / served from backend (prod)
PostgreSQL: 5432
MQTT: 1883
MQTT WebSocket: 9001
```

---

## 🧪 TESTING

### Backend Tests
```bash
cd backend

# Health check
curl http://localhost:8080/api/health

# Test login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"demo123"}'
```

### Frontend Tests
```bash
cd frontend

# Open DevTools Console
# Look for: "WebSocket connection established"

# Test Button Simulator
# Navigate to Button Simulator page
# Press button
# Check notification appears
```

**Full testing guide:** [03-QUICK-START-GUIDE.md#testing-the-demo](./03-QUICK-START-GUIDE.md#testing-the-demo)

---

## 🚨 TROUBLESHOOTING

### Backend Won't Start
```bash
# Check dependencies
cd backend && npm install

# Check PostgreSQL
psql -U postgres

# Check port not in use
netstat -ano | findstr :8080
```

### Frontend Won't Load
```bash
# Check dependencies
npm install

# Check backend is running
curl http://localhost:8080/api/health

# Check port not in use
netstat -ano | findstr :5173
```

**Full troubleshooting:** [03-QUICK-START-GUIDE.md#troubleshooting](./03-QUICK-START-GUIDE.md#troubleshooting)

---

## 📅 DEVELOPMENT TIMELINE

**Day 1 (Nov 5):** ✅ Project setup & audit
**Day 2-3 (Nov 6-7):** Database & Backend
**Day 4-5 (Nov 8-9):** Frontend setup & core pages
**Day 6-7 (Nov 10-11):** Chat & Tasks
**Day 8 (Nov 12):** Polish & UI/UX
**Day 9-10 (Nov 13-14):** Wear OS & ESP32
**Day 11 (Nov 15):** Integration testing
**Day 12 (Nov 16):** Final preparation
**Nov 17:** Travel day
**Nov 18:** **MedStred Demo! 🎯**

**Detailed plan:** [01-MIGRATION-PLAN.md](./01-MIGRATION-PLAN.md)

---

## ⏳ STATUS TRACKING

### Current Status (Nov 5)
```
✅ Audit completed
✅ Documentation created
⏳ Database migration (Day 2)
⏳ Backend development (Day 2-3)
⏳ Frontend development (Day 4-8)
⏳ Wear OS integration (Day 9-10, WAITING FOR SOURCE CODE)
⏳ Testing & polish (Day 11-12)
```

### Blockers
```
⚠️  Wear OS source code - WAITING FOR USER LINK
✅ WiFi credentials - PROVIDED (Blagojevic / Lozinka12!)
✅ Database schema - APPROVED (using existing)
⏳ Server IP address - TBD on demo day
```

---

## 🎯 DEMO REQUIREMENTS

### Must Work (Critical) ✅
- [x] Guest presses button → Service request created
- [x] Notification appears on tablet
- [x] Official accepts request
- [x] Status updates in real-time (WebSocket)
- [ ] Chat functionality ⏳
- [ ] Task management ⏳
- [ ] Activity log ⏳
- [ ] Wear OS app receives notification ⏳
- [ ] Wear OS Accept button works ⏳

### Should Work (Important)
- [ ] All pages functional ⏳
- [ ] 4x watches communicating ⏳
- [ ] ESP32 button (optional)
- [ ] Guest photos displayed

### Nice to Have (Bonus)
- [ ] Emergency shake detection
- [ ] Voice recording
- [ ] Auxiliary buttons (DND, Lights, Food, Drinks)

---

## 👥 TEAM

**Developer:** [Your Name]
**Audit Date:** 2025-11-05
**Demo Date:** 2025-11-18

---

## 📞 SUPPORT

**Issues?**
1. Check [03-QUICK-START-GUIDE.md](./03-QUICK-START-GUIDE.md)
2. Check [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)
3. Check backend logs (terminal)
4. Check frontend console (DevTools F12)

**Emergency Contacts:**
- Developer: _______________
- Technical Support: _______________

---

## 📜 LICENSE

**Proprietary** - OBEDIO Demo Project
**For Demo Purposes Only** - MedStred 2025

---

## 🙏 ACKNOWLEDGMENTS

- Radix UI for excellent React components
- Tailwind CSS for utility-first styling
- Prisma for type-safe ORM
- Socket.io for real-time communication
- MQTT for IoT device communication

---

## 🚀 WHAT'S NEXT?

### After MedStred Demo
1. ✅ Collect feedback
2. ✅ Note feature requests
3. ✅ Plan production version
4. ✅ Implement full security
5. ✅ Add advanced features
6. ✅ Deploy to production

---

## 📊 PROJECT STATS

**Lines of Code:** ~5,000+ (from audit)
**API Endpoints:** 40+
**Database Models:** 20
**Frontend Pages:** 13
**Firmware Files:** 2 (ESP32 Button + Watch)
**Days Until Demo:** 12

---

**GOOD LUCK WITH THE DEMO! 🎉**

**Let's build something amazing! 💪**

---

**Last Updated:** 2025-11-05
**Version:** 1.0.0-demo
**Status:** 🚧 Under Development
