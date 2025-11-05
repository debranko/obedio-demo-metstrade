# 🚀 QUICK START GUIDE - OBEDIO Demo
**Generated:** 2025-11-05
**Purpose:** Brzo pokretanje demo aplikacije

---

## ⚡ TL;DR - FASTEST START

```bash
# 1. Install dependencies
npm install                    # Frontend
cd backend && npm install      # Backend

# 2. Setup database
cd backend
npm run db:push                # Create tables
npm run db:seed                # Add demo data

# 3. Start servers
npm run dev                    # Backend (port 8080)
cd ../
npm run dev                    # Frontend (port 5173)

# 4. Open browser
http://localhost:5173

# 5. Login (auto-login or):
Username: demo
Password: demo123
```

---

## 📋 PREREQUISITES

### Required Software
```
✅ Node.js 18+ (Download: https://nodejs.org/)
✅ PostgreSQL 14+ (Download: https://www.postgresql.org/)
✅ Git (Download: https://git-scm.com/)
✅ VS Code (Optional, Download: https://code.visualstudio.com/)
```

### Check Installations
```bash
node --version        # Should be v18+ or higher
npm --version         # Should be 8+ or higher
psql --version        # Should be 14+ or higher
git --version         # Any recent version
```

---

## 📥 INSTALLATION

### Step 1: Clone/Copy Project
```bash
# If git repo:
git clone <repo-url> obedio-demo-medstred
cd obedio-demo-medstred

# Or just navigate to folder:
cd C:\Users\debra\OneDrive\Desktop\obedio-demo-medstred
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

**Expected output:**
```
added 250 packages in 30s
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
```

**Expected output:**
```
added 150 packages in 25s
```

---

## 🗄️ DATABASE SETUP

### Step 1: Start PostgreSQL
```bash
# Windows
net start postgresql

# Or start manually
pg_ctl start -D "C:\Program Files\PostgreSQL\16\data"
```

### Step 2: Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE obedio_demo;

# Exit
\q
```

### Step 3: Configure Database URL
Edit `backend/.env`:
```bash
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/obedio_demo"
```

### Step 4: Push Schema & Seed Data
```bash
cd backend

# Create tables from Prisma schema
npm run db:push

# Seed demo data
npm run db:seed
```

**Expected output:**
```
✅ Database schema pushed
✅ Demo data seeded:
   - 4 crew members
   - 10 guests
   - 8 locations
   - 3 service categories
   - 1 admin user
```

---

## 🚀 STARTING THE APP

### Terminal 1: Backend Server
```bash
cd backend
npm run dev
```

**Expected output:**
```
🚀 Obedio Server Started Successfully!

📍 Server Details:
   • Host: localhost:8080
   • Environment: development

🌐 Access URLs:
   • API Health: http://localhost:8080/api/health
   • Auth: http://localhost:8080/api/auth/login
   • WebSocket: ws://localhost:8080

✅ Database connected successfully
✅ WebSocket server initialized
✅ MQTT service connected

Ready to receive requests! 🛥️
```

### Terminal 2: Frontend Dev Server
```bash
# In project root
npm run dev
```

**Expected output:**
```
VITE v6.3.5  ready in 1200 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.100:5173/
```

### Step 3: Open Browser
Navigate to: **http://localhost:5173**

---

## 🔐 LOGIN

### Auto-Login (Configured)
- Application should auto-login with demo user
- No credentials needed

### Manual Login (If needed)
```
Username: demo
Password: demo123
```

**After login, you should see:**
- Dashboard with widgets
- Sidebar navigation
- Real-time service requests (if any)

---

## ✅ VERIFICATION CHECKLIST

### Backend Health Checks
```bash
# Test API health
curl http://localhost:8080/api/health

# Expected: {"status":"OK","timestamp":"2025-11-05T..."}

# Test login endpoint
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"demo123"}'

# Expected: {"success":true,"data":{...token...}}

# Test service requests
curl http://localhost:8080/api/service-requests

# Expected: {"success":true,"data":[...]}
```

### Frontend Health Checks
1. ✅ Page loads without errors
2. ✅ Login successful (auto or manual)
3. ✅ Dashboard displays widgets
4. ✅ Sidebar navigation works
5. ✅ Can navigate to different pages

### Database Health Checks
```bash
# Connect to database
psql -U postgres obedio_demo

# Check tables exist
\dt

# Expected:
# User, Guest, CrewMember, Location, ServiceRequest, etc.

# Check data exists
SELECT COUNT(*) FROM "Guest";
SELECT COUNT(*) FROM "CrewMember";
SELECT COUNT(*) FROM "Location";

# Exit
\q
```

### WebSocket Health Check
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for: `WebSocket connection established`
4. Create a test service request
5. Should see real-time update in console

---

## 🧪 TESTING THE DEMO

### Test 1: Create Service Request (Button Simulator)
1. Navigate to "Button Simulator" page
2. Select a location (e.g., "Cabin A")
3. Click "Press Button" (main button)
4. ✅ Check: Service request appears on Dashboard
5. ✅ Check: Notification popup appears
6. ✅ Check: Real-time update via WebSocket

### Test 2: Accept Service Request
1. Navigate to "Service Requests" page
2. Find pending request
3. Click "Accept" button
4. ✅ Check: Status changes to "Serving"
5. ✅ Check: Real-time update on all pages

### Test 3: Complete Service Request
1. Find serving request
2. Click "Complete" button
3. ✅ Check: Request moves to "Completed"
4. ✅ Check: Activity log updated

### Test 4: Guest Management
1. Navigate to "Guests" page
2. Click "Add Guest" button
3. Fill in guest details
4. Click "Save"
5. ✅ Check: Guest appears in list

### Test 5: Chat (If implemented)
1. Navigate to "Chat" page
2. Select a crew member
3. Type a message
4. Send
5. ✅ Check: Message appears in conversation

### Test 6: Tasks (If implemented)
1. Navigate to "Tasks" page
2. Click "Add Task"
3. Fill in task details
4. Click "Save"
5. ✅ Check: Task appears in list

---

## 🛠️ TROUBLESHOOTING

### Problem 1: Backend won't start
```
Error: Cannot find module 'express'
Solution: npm install in backend folder
```

```
Error: connect ECONNREFUSED 127.0.0.1:5432
Solution: Start PostgreSQL database
```

```
Error: P1001: Can't reach database server
Solution: Check DATABASE_URL in backend/.env
```

### Problem 2: Frontend won't start
```
Error: Cannot find module 'react'
Solution: npm install in project root
```

```
Error: Port 5173 is already in use
Solution: Kill process on port 5173 or change port
```

### Problem 3: Login doesn't work
```
Issue: Token error or 401 Unauthorized
Solution:
1. Check backend .env JWT_SECRET exists
2. Check backend server is running
3. Clear browser cookies/localStorage
4. Try different browser
```

### Problem 4: Service Requests not appearing
```
Issue: No real-time updates
Solution:
1. Check WebSocket connection in DevTools
2. Check MQTT broker is running (if using hardware)
3. Refresh page
4. Check backend logs for errors
```

### Problem 5: Database seed fails
```
Error: Unique constraint failed
Solution: Reset database:
  npm run db:reset
  npm run db:push
  npm run db:seed
```

---

## 📱 DEMO DAY SETUP (MedStred)

### Pre-Demo Checklist (Day Before)

**Hardware:**
```
[ ] 1x Tablet (Windows/Android) - Backend + Frontend server
[ ] 4x TicWatch devices - Wear OS app installed
[ ] 1x ESP32 Button (optional) - Firmware flashed
[ ] 1x WiFi Router - Blagojevic network
[ ] Power banks / chargers for all devices
```

**Software:**
```
[ ] Backend server tested and working
[ ] Frontend built and tested
[ ] Database seeded with demo data
[ ] MQTT broker running
[ ] Wear OS app installed on all 4 watches
[ ] ESP32 firmware flashed (if used)
```

**Network:**
```
[ ] WiFi Router: SSID "Blagojevic", Pass "Lozinka12!"
[ ] Tablet connected to WiFi
[ ] Note tablet IP address (e.g., 192.168.1.100)
[ ] 4x Watches connected to WiFi
[ ] Test MQTT communication
```

**Configuration:**
```
[ ] Update backend/.env MQTT_BROKER with tablet IP
[ ] Update frontend/.env VITE_API_URL with tablet IP
[ ] Update Wear OS app MQTT_BROKER with tablet IP
[ ] Update ESP32 firmware MQTT_BROKER with tablet IP (if used)
```

### Demo Day Setup (On-Site)

**1. Connect to WiFi (5 min)**
```
- Connect tablet to "Blagojevic" WiFi
- Note tablet IP: ipconfig (Windows) or ifconfig (Mac/Linux)
- Connect 4x watches to "Blagojevic" WiFi
```

**2. Start Backend Server (2 min)**
```bash
cd backend
npm start
# Wait for "✅ Server started successfully"
```

**3. Start Frontend (2 min)**
```bash
# Open browser on tablet
http://localhost:5173
# Or serve built files from backend
```

**4. Test Service Request Flow (5 min)**
```
1. Press button on Watch 1 or Simulator
2. Check notification appears on tablet
3. Accept request
4. Complete request
5. Verify real-time updates

If all works → Ready for demo! 🎉
```

**5. Open Demo Pages (1 min)**
```
- Dashboard (main view)
- Service Requests (show to visitors)
- Chat (WOW effect)
- Guests (show guest info)
```

---

## 🎬 DEMO SCRIPT (For Presentation)

### Opening (1 min)
```
"Welcome to OBEDIO - yacht crew management system.
Today I'll show you how we handle guest service requests in real-time."
```

### Demo Flow (5 min)

**1. Show Dashboard**
```
"This is our main dashboard. We can see:
- Active service requests
- Crew on duty
- Recent activity"
```

**2. Simulate Button Press**
```
"Now a guest presses their button in Cabin A..."
[Press button on Watch or Simulator]
```

**3. Show Notification**
```
"Instantly, a notification appears on our tablet.
We can see:
- Guest name: Sofia Anderson
- Location: Cabin A
- Request type: Call for service"
```

**4. Accept Request**
```
"Our crew member John accepts the request..."
[Click Accept button]
"And we can see it's now being served."
```

**5. Show Real-Time Updates**
```
"Notice how all pages update in real-time.
No refresh needed. This is powered by WebSocket technology."
```

**6. Show Chat (WOW Effect)**
```
"Crew can also communicate instantly via chat..."
[Send a message]
"Messages appear in real-time, like WhatsApp."
```

**7. Complete Request**
```
"Once service is complete, we mark it done..."
[Click Complete button]
"And it's logged in our activity history."
```

**8. Show Wear OS Watch**
```
"Our crew members receive notifications on their smartwatches.
They can accept requests directly from their wrist."
[Show watch notification]
[Press Accept button on watch]
```

### Closing (1 min)
```
"This is OBEDIO - real-time yacht crew management.
Thank you for watching!"
```

---

## 📞 SUPPORT & CONTACT

**Issues during demo?**
1. Check backend logs (terminal)
2. Check browser DevTools console
3. Restart servers if needed
4. Use Button Simulator if hardware fails

**Emergency Fallback:**
- Demo video (prepare beforehand)
- Screenshots of all pages
- Printed materials

---

## 📚 ADDITIONAL RESOURCES

**Documentation:**
- [00-AUDIT-COMPREHENSIVE-REPORT.md](./00-AUDIT-COMPREHENSIVE-REPORT.md)
- [01-MIGRATION-PLAN.md](./01-MIGRATION-PLAN.md)
- [02-PROJECT-STRUCTURE.md](./02-PROJECT-STRUCTURE.md)
- [04-DEMO-SETUP-CHECKLIST.md](./04-DEMO-SETUP-CHECKLIST.md)

**API Documentation:**
- Swagger UI: http://localhost:8080/api-docs (if enabled)
- API.md: Detailed API reference

**Tutorials:**
- DATABASE.md: Database schema guide
- MQTT.md: MQTT topics & messages
- WEBSOCKET.md: WebSocket events

---

**END OF QUICK START GUIDE**

---

**NEED HELP?**
- Read troubleshooting section
- Check backend/frontend logs
- Test each component individually
- Use Button Simulator for testing

**GOOD LUCK WITH THE DEMO! 🚀**
