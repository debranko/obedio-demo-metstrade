# ✅ DEMO SETUP CHECKLIST - MedStred 18 Nov 2025
**Generated:** 2025-11-05
**Demo Date:** 18. novembra 2025
**Travel Date:** 17. novembra 2025

---

## 📅 TIMELINE OVERVIEW

**Today (Nov 5) - Day 1:** 12 days remaining
**Nov 17 (Travel Day):** Setup & final testing
**Nov 18 (Demo Day):** MedStred presentation

---

## 🎯 CRITICAL PATH ITEMS

### ⚠️ BLOCKERS (Cannot proceed without)
```
[ ] Wear OS source code - WAITING FOR USER LINK
[ ] 4x TicWatch devices - Confirm availability
[ ] WiFi Router for demo - Confirm availability
[ ] Tablet device - Confirm specifications
```

---

## 📋 DEVELOPMENT CHECKLIST (Day by Day)

### Day 1 (Nov 5) - Project Setup ✅
```
[x] Complete audit of existing codebase
[x] Create comprehensive audit report
[x] Create migration plan
[x] Create project structure document
[x] Create quick start guide
[x] Create demo setup checklist
[ ] Initialize git repository (optional)
[ ] Create project folder structure
[ ] Copy database schema
```

### Day 2 (Nov 6) - Database & Backend Core
```
[ ] Setup PostgreSQL database
[ ] Copy prisma/schema.prisma
[ ] Run prisma generate & db push
[ ] Create seed-demo.ts script with:
    [ ] 4 crew members
    [ ] 10 guests
    [ ] 8 locations
    [ ] 3 service categories
    [ ] 1 admin user
[ ] Copy backend/src/services/ folder
[ ] Copy backend/src/utils/ folder
[ ] Test database connection
```

### Day 3 (Nov 7) - Backend API Routes
```
[ ] Setup backend server.ts (simplified)
[ ] Implement auth route (auto-login)
[ ] Implement service-requests route (no permissions)
[ ] Implement guests route
[ ] Implement crew route
[ ] Implement locations route
[ ] Implement activity-logs route
[ ] Test all API endpoints with curl
```

### Day 4 (Nov 8) - Frontend Setup & Core Pages
```
[ ] Setup frontend folder structure
[ ] Copy ui components (Radix UI)
[ ] Implement AppHeader & AppSidebar
[ ] Implement simplified AuthContext
[ ] Implement API service with credentials
[ ] Implement WebSocket hook
[ ] Test frontend-backend connection
```

### Day 5 (Nov 9) - Dashboard & Service Requests
```
[ ] Implement Dashboard page (redesigned)
    [ ] Active Requests widget
    [ ] On Duty Crew widget
    [ ] Recent Activity widget
    [ ] Quick Actions widget
[ ] Implement Service Requests page (complete rewrite)
    [ ] Pending requests list
    [ ] Serving requests list
    [ ] Completed requests list
    [ ] Accept/Delegate/Complete actions
    [ ] Real-time updates via WebSocket
[ ] Test service request flow end-to-end
```

### Day 6 (Nov 10) - Guests & Chat
```
[ ] Implement Guests page (fix & simplify)
    [ ] Guest list with search
    [ ] Add/Edit/Delete guest
    [ ] View guest details
    [ ] Location assignment
[ ] Implement Chat page (NEW)
    [ ] Backend: messages API routes
    [ ] Frontend: Chat UI
    [ ] Real-time messaging via WebSocket
    [ ] Unread count badge
[ ] Test chat functionality
```

### Day 7 (Nov 11) - Tasks & Activity Log
```
[ ] Add Task model to Prisma schema
[ ] Implement tasks API routes
[ ] Implement Tasks page (NEW)
    [ ] Task list (todo, in-progress, done)
    [ ] Add/Edit/Delete task
    [ ] Assign to crew
    [ ] Mark complete
    [ ] Priority levels
[ ] Verify Activity Log page works
[ ] Test task management flow
```

### Day 8 (Nov 12) - Polish & Testing
```
[ ] Polish UI/UX on all pages
[ ] Add loading states
[ ] Add error handling
[ ] Add success/error toasts
[ ] Test all user flows
[ ] Fix any bugs found
[ ] Optimize performance
```

### Day 9 (Nov 13) - Wear OS App ⏳
```
⏳ WAITING FOR SOURCE CODE

Once received:
[ ] Audit Kotlin source code
[ ] Update WiFi credentials
    SSID: Blagojevic
    Password: Lozinka12!
[ ] Update MQTT broker IP
[ ] Update server API URL
[ ] Build APK
[ ] Install on 4x TicWatch devices
[ ] Test notifications
[ ] Test Accept/Delegate buttons
```

### Day 10 (Nov 14) - ESP32 Firmware & MQTT
```
[ ] Copy ESP32 button firmware
[ ] Update WiFi credentials
[ ] Update MQTT broker IP
[ ] Update location IDs
[ ] Flash firmware to ESP32 (if used)
[ ] Test MQTT communication
[ ] Test button press → notification flow
[ ] Verify WebSocket events
```

### Day 11 (Nov 15) - Integration Testing
```
[ ] End-to-end testing:
    [ ] Button press (simulator or hardware)
    [ ] Service request created
    [ ] Notification appears on tablet
    [ ] Accept request
    [ ] Status updates in real-time
    [ ] Complete request
    [ ] Activity log updated
    [ ] Wear OS watch receives notification
    [ ] Wear OS Accept works
    [ ] Chat message sent/received
    [ ] Task created/completed
[ ] Performance testing
[ ] Load testing (multiple requests)
[ ] Fix any critical bugs
```

### Day 12 (Nov 16) - Final Preparation
```
[ ] Build production versions:
    [ ] Frontend: npm run build
    [ ] Backend: npm run build
[ ] Create startup scripts
[ ] Test on tablet device
[ ] Create demo data backup
[ ] Create database backup
[ ] Write setup instructions for demo day
[ ] Prepare demo script
[ ] Test demo script run-through
[ ] Charge all devices
[ ] Pack everything needed
```

---

## 🔧 CONFIGURATION CHECKLIST

### Backend Configuration
```
[ ] .env file created
[ ] PORT set (8080)
[ ] DATABASE_URL configured
[ ] JWT_SECRET set
[ ] MQTT_BROKER IP configured
[ ] CORS_ORIGIN set to "*" for demo
[ ] NODE_ENV set to production
```

### Frontend Configuration
```
[ ] .env file created
[ ] VITE_API_URL configured with tablet IP
[ ] VITE_WS_URL configured with tablet IP
[ ] VITE_MQTT_BROKER configured with tablet IP
```

### ESP32 Firmware Configuration (If used)
```
[ ] WIFI_SSID = "Blagojevic"
[ ] WIFI_PASSWORD = "Lozinka12!"
[ ] MQTT_BROKER = tablet IP
[ ] LOCATION_ID = uuid from database
[ ] Firmware flashed successfully
```

### Wear OS App Configuration
```
⏳ WAITING FOR SOURCE CODE

[ ] WIFI_SSID = "Blagojevic"
[ ] WIFI_PASSWORD = "Lozinka12!"
[ ] MQTT_BROKER = tablet IP
[ ] SERVER_API = tablet IP
[ ] APK built successfully
[ ] Installed on 4x TicWatch
```

---

## 📱 HARDWARE CHECKLIST

### Required Devices
```
[ ] 1x Tablet (Windows/Android/iPad)
    [ ] Specs: _____________
    [ ] OS: ________________
    [ ] RAM: 4GB+ required
    [ ] Storage: 10GB+ free

[ ] 4x TicWatch Devices (Wear OS)
    [ ] Watch 1: Model _____ (Assigned to: _____)
    [ ] Watch 2: Model _____ (Assigned to: _____)
    [ ] Watch 3: Model _____ (Assigned to: _____)
    [ ] Watch 4: Model _____ (Assigned to: _____)

[ ] 1x ESP32 Button (Optional)
    [ ] Model: ______________
    [ ] Firmware flashed: [ ]

[ ] 1x WiFi Router
    [ ] Model: ______________
    [ ] SSID: Blagojevic
    [ ] Password: Lozinka12!
```

### Accessories
```
[ ] Power banks for watches
[ ] USB cables (4x for watches, 1x for tablet)
[ ] WiFi router power adapter
[ ] Extension cord / power strip
[ ] Laptop for emergency debugging (optional)
```

---

## 🌐 NETWORK SETUP CHECKLIST

### WiFi Router Setup
```
[ ] Router powered on
[ ] SSID set to "Blagojevic"
[ ] Password set to "Lozinka12!"
[ ] DHCP enabled
[ ] 5 GHz band enabled (if available)
[ ] Test WiFi connection from phone
```

### Device Connections
```
[ ] Tablet connected to WiFi
[ ] Tablet IP address noted: _______________
[ ] Watch 1 connected to WiFi
[ ] Watch 2 connected to WiFi
[ ] Watch 3 connected to WiFi
[ ] Watch 4 connected to WiFi
[ ] All devices on same network verified
[ ] Ping test between devices successful
```

---

## ✅ PRE-DEMO TESTING CHECKLIST (Day 11-12)

### Backend Tests
```
[ ] Server starts without errors
[ ] Health check responds: GET /api/health
[ ] Database connection successful
[ ] MQTT broker connection successful
[ ] WebSocket server initialized
[ ] All API endpoints respond correctly:
    [ ] POST /api/auth/login
    [ ] GET /api/service-requests
    [ ] POST /api/service-requests
    [ ] PUT /api/service-requests/:id/accept
    [ ] PUT /api/service-requests/:id/complete
    [ ] GET /api/guests
    [ ] GET /api/crew
    [ ] GET /api/messages
    [ ] POST /api/messages
    [ ] GET /api/tasks
    [ ] POST /api/tasks
```

### Frontend Tests
```
[ ] Page loads without errors
[ ] Login works (auto-login or manual)
[ ] Dashboard displays correctly
[ ] Service Requests page loads
[ ] Guests page loads
[ ] Chat page loads
[ ] Tasks page loads
[ ] Activity Log page loads
[ ] All navigation links work
[ ] WebSocket connection established
[ ] Real-time updates work
```

### Integration Tests
```
[ ] Button press creates service request
[ ] Notification appears on tablet
[ ] Accept request changes status
[ ] Complete request works
[ ] Activity log updates
[ ] Chat message sends and receives
[ ] Task creation works
[ ] Wear OS receives notification
[ ] Wear OS Accept button works
```

### Performance Tests
```
[ ] Multiple service requests handled
[ ] WebSocket handles 10+ concurrent connections
[ ] Page load time < 3 seconds
[ ] API response time < 500ms
[ ] No memory leaks after 1 hour
[ ] Battery usage acceptable on watches
```

---

## 🎬 DEMO DAY CHECKLIST (Nov 18)

### Morning Setup (2 hours before)
```
[ ] Arrive at venue early
[ ] Find power outlets
[ ] Setup WiFi router
[ ] Connect all devices to WiFi
[ ] Note tablet IP address
[ ] Update configuration files if IP changed
[ ] Start backend server
[ ] Start frontend
[ ] Test service request flow
[ ] Charge all devices to 100%
[ ] Test demo script once
```

### 1 Hour Before Demo
```
[ ] All devices powered on
[ ] Backend server running
[ ] Frontend accessible
[ ] Test button press
[ ] Test watch notifications
[ ] Verify chat works
[ ] Verify tasks work
[ ] Have backup plan ready (video/screenshots)
```

### 30 Minutes Before Demo
```
[ ] Final system check
[ ] Clear all test data
[ ] Create fresh demo requests
[ ] Test microphone/audio (if presenting)
[ ] Test screen sharing (if virtual)
[ ] Have tablet ready at demo booth
[ ] Have watches ready on wrists
[ ] Relax and breathe 😊
```

### During Demo
```
[ ] Follow demo script
[ ] Show real-time features
[ ] Highlight WOW factor (Chat)
[ ] Demonstrate watch notifications
[ ] Answer questions confidently
[ ] Have backup demo ready if needed
```

### After Demo
```
[ ] Collect feedback
[ ] Note any issues encountered
[ ] Thank visitors
[ ] Take photos/videos
[ ] Backup demo data
[ ] Celebrate! 🎉
```

---

## 🚨 CONTINGENCY PLANS

### If WiFi Fails
```
Plan A: Use mobile hotspot from phone
Plan B: Demo in airplane mode with pre-loaded data
Plan C: Show demo video
```

### If Tablet Crashes
```
Plan A: Restart server
Plan B: Use laptop as backup
Plan C: Show demo video
```

### If Watch Connection Fails
```
Plan A: Use Button Simulator
Plan B: Show pre-recorded watch notification video
Plan C: Describe functionality verbally
```

### If Backend Fails
```
Plan A: Restart server quickly
Plan B: Show frontend mockup
Plan C: Show demo video
```

### If Complete System Failure
```
Plan A: Show demo video (PREPARE THIS!)
Plan B: Show screenshots
Plan C: Verbal presentation with printed materials
```

---

## 📦 BACKUP & RECOVERY

### Before Travel (Nov 17)
```
[ ] Backup entire project folder
[ ] Backup database
[ ] Backup .env files
[ ] Backup firmware files
[ ] Backup Wear OS APK
[ ] Copy to USB drive
[ ] Copy to cloud storage
[ ] Copy to second laptop (if available)
```

### Emergency Recovery
```
If something breaks:
1. Restore from USB backup
2. Restore database
3. Restore configuration files
4. Restart services
5. Test quickly
```

---

## 📝 DEMO SCRIPT REHEARSAL

### Practice Sessions (Day 10-12)
```
[ ] Practice 1 (Nov 14): First run-through
    Duration: _____
    Issues: _______________

[ ] Practice 2 (Nov 15): Timing & polish
    Duration: _____
    Issues: _______________

[ ] Practice 3 (Nov 16): Final rehearsal
    Duration: _____
    Issues: _______________

[ ] Practice 4 (Nov 17): On-site rehearsal
    Duration: _____
    Issues: _______________
```

### Target Demo Duration
```
Opening: 1 minute
Main demo: 5 minutes
Q&A: 3 minutes
Total: 9 minutes
```

---

## 📞 EMERGENCY CONTACTS

### Technical Support
```
Developer: _________________
Phone: ____________________
Email: ____________________
```

### Hardware Suppliers
```
TicWatch Support: __________
ESP32 Support: ____________
WiFi Router Support: _______
```

### Venue Contacts
```
MedStred Organizer: ________
Booth Manager: ____________
Technical Support: _________
```

---

## 🎯 SUCCESS CRITERIA

### Must Work (Critical)
```
[ ] Button press creates service request
[ ] Notification appears on tablet
[ ] Accept request works
[ ] Real-time updates work
[ ] Wear OS receives notification
```

### Should Work (Important)
```
[ ] Chat functionality
[ ] Task management
[ ] Activity log
[ ] All 4 watches working
```

### Nice to Have (Bonus)
```
[ ] Emergency shake detection
[ ] Guest photos displayed
[ ] Voice recording
[ ] Auxiliary buttons
```

---

## 📊 FINAL READINESS SCORE

**Before Demo Day, you should have:**
```
Technical Readiness:    [ ] 100% (all features working)
Hardware Readiness:     [ ] 100% (all devices charged & configured)
Network Readiness:      [ ] 100% (WiFi tested & stable)
Backup Readiness:       [ ] 100% (backups & contingency plans ready)
Presentation Readiness: [ ] 100% (demo script practiced)

Overall Readiness:      [ ] READY FOR DEMO! 🚀
```

---

**GOOD LUCK WITH THE DEMO! 🎉**

**Remember:**
- Stay calm
- Follow the script
- Highlight real-time features
- Show WOW factor (Chat)
- Have fun!

**You've got this! 💪**

---

**END OF DEMO SETUP CHECKLIST**
