# 🤖 RULES FOR CLAUDE - OBEDIO Demo Project
**Created:** 2025-11-05
**Project:** MedStred Demo (12 days to completion)
**Purpose:** Guide Claude in building OBEDIO demo step-by-step

---

## 🎯 PROJECT MISSION

**Build a functional, beautiful yacht crew management demo for MedStred sajam (Nov 18, 2025).**

**Target Audience:**
- Yacht owners
- Crew managers
- Tech enthusiasts
- Potential investors

**Demo Goals:**
1. Show real-time service request handling
2. Demonstrate WOW factor (Chat, Wear OS)
3. Impress with smooth UX and animations
4. Prove system works across multiple devices

---

## 🚨 GOLDEN RULES - NO EXCEPTIONS

### RULE #1: STEP BY STEP - NO JUMPING AHEAD
```
✅ CORRECT:
- Finish Dashboard page completely
- Test Dashboard thoroughly
- User approves Dashboard
- Move to next page (Service Requests)

❌ WRONG:
- Work on Dashboard, Service Requests, and Chat simultaneously
- Skip testing
- Move to next page before finishing current one
```

**USER SAID:** *"JAKO BITNO da idemo korak po korak, stranicu po stranicu, funkciju po funkciju."*

### RULE #2: FRONTEND FIRST - ONLY UI/UX REFACTORING
```
✅ CURRENT PHASE: Frontend UI/UX refactoring
- Make it beautiful
- Add animations
- Improve responsive design
- Better widget layouts
- Smooth transitions

❌ NOT NOW:
- Changing API endpoints
- Adding new functionality
- Modifying backend
- Database changes
```

**USER SAID:** *"Rekreiraj ceo front-end. Radiš front-end sad koji treba bude spojen kasnije sa API back-end i database-om. Samo za lepši izgled, ne menjamo funkcionalnosti."*

### RULE #3: NO MOCK DATA - PREPARE FOR API INTEGRATION
```
✅ CORRECT:
- Use API service with placeholder endpoints
- Prepare hooks for React Query
- Structure for WebSocket integration
- Comment where API will connect
- ALL DATA FROM DATABASE (even if not connected yet)

❌ WRONG:
- Hardcoded arrays of data: const guests = [{...}];
- localStorage for permanent data
- Fake/mock data in components: const mockServiceRequest = {...};
- Test/dummy data: generateTestData()
```

**FROM OLD RULES:**
*"OBEDIO is a PRODUCTION SERVER that will be installed on a Mini PC and serve REAL HARDWARE DEVICES across a yacht network. This is NOT a demo application!"*

**CRITICAL RULES FROM OLD PROJECT:**
```typescript
// ❌ ABSOLUTELY FORBIDDEN:
const locations = ["Master Suite", "Guest Cabin"]; // NO HARDCODED DATA
localStorage.setItem('devices', JSON.stringify(devices)); // NO LOCAL STORAGE
const mockGuests = generateTestData(); // NO MOCK DATA

// ✅ REQUIRED:
const locations = await api.locations.getAll(); // From API/Database
await api.userPreferences.update(settings); // Save to database
const guests = useQuery(['guests'], api.guests.getAll); // Real data
```

**THIS IS A SERVER APPLICATION - NOT A WEB APP!**
- Backend is the "brain", Frontend is just a "dashboard"
- System MUST work 24/7 without frontend
- Multiple frontends can connect (Web, iOS, Android, Wear OS)
- ESP32 devices connect directly to server (not through frontend)

### RULE #4: MODERN & ANIMATED - WOW FACTOR
```
✅ ADD:
- Smooth page transitions (fade, slide)
- Button hover effects (subtle scale)
- Card entrance animations (stagger)
- Loading skeletons (shimmer effect)
- Notification animations (smooth slide-in)
- Responsive widget resize (with transition)

ANIMATION STYLE: Smooth & Minimal (Apple-like)
- Duration: 200-400ms
- Easing: ease-out, ease-in-out
- No bounce or elastic (too playful)
- Subtle and elegant
- Smooth 60fps performance

TOOLS:
- Framer Motion (React animation library)
- Tailwind CSS transitions
- CSS transforms
```

**USER SAID:** *"Animacija smoothe minimal."* (Apple-style, elegant, subtle)

### RULE #5: RESPONSIVE = HYBRID BEHAVIOR (SCALE + MORE CONTENT)
```
✅ CORRECT (Hybrid Approach):
SMALL RESIZE (10-30% size change):
- Scale content (fonts slightly larger, spacing increases)
- Same number of items
- Smooth transition

LARGE RESIZE (>30% size change):
- Show more columns (e.g., 2 → 3 columns)
- Show more rows (e.g., 5 → 10 items)
- Add more information (e.g., show descriptions, timestamps)

EXAMPLE - Guest Widget:
- Small (mobile): 1 column, 3 guests, minimal info
- Medium (tablet): 2 columns, 6 guests, more info
- Large (desktop): 3 columns, 12 guests, full details

❌ WRONG:
- Widget size increases → Same content, just bigger fonts (NO!)
- Fixed number of items regardless of space (NO!)
- Content gets cut off or overflow (NO!)
```

**USER SAID:** *"Dashboard widgets treba da bude baš taj hibrid."*

### RULE #6: MOBILE APPS - REACT NATIVE (DECIDED ✅)
```
DECISION: React Native for iOS + Android
✅ One codebase for both platforms
✅ Faster development
✅ Easier maintenance
✅ Good performance
✅ Shared components with web (similar React patterns)

COMPONENTS NEEDED:
✅ React Native App (iOS + Android in one)
✅ Wear OS App (native Kotlin or React Native for Wear OS)
✅ Apple Watch App (native Swift - no React Native support)

PRIORITY FOR DEMO:
1. Web frontend (CURRENT - Days 1-8)
2. React Native mobile app (Days 9-10)
3. Wear OS app (Day 10-11)
4. Apple Watch app (Day 11-12 or post-demo)
```

**USER SAID:** *"U redu možemo da radimo s React Native za oba. To je za potrebe demo."*

---

## 📋 DEVELOPMENT WORKFLOW - MANDATORY PROCESS

### Phase 1: PLANNING (Before any code)
```
□ Read this RULES document
□ Read DEVELOPMENT-WORKFLOW.md
□ Read PAGE-BY-PAGE-PLAN.md for current page
□ Check Mermaid diagrams for architecture
□ Understand what user wants for this page
□ Ask clarifying questions if needed
```

### Phase 2: DEVELOPMENT (For each page/component)
```
□ Create file structure
□ Setup base component (layout, routing)
□ Add static UI (HTML/JSX structure)
□ Add Tailwind CSS styling
□ Add animations (Framer Motion)
□ Make responsive (breakpoints, grid)
□ Prepare API integration points (commented)
□ Add loading states (skeletons)
□ Add error boundaries
□ Test on different screen sizes
```

### Phase 3: TESTING (Before moving to next page)
```
□ Visual test (does it look good?)
□ Responsive test (resize window)
□ Animation test (smooth transitions?)
□ Accessibility test (keyboard nav, screen reader)
□ Performance test (no lag, no jank)
□ Show to user for approval
□ Get user feedback
□ Fix issues if any
□ Get final approval
```

### Phase 4: DOCUMENTATION (After page completion)
```
□ Update PAGE-BY-PAGE-PLAN.md (mark completed)
□ Update TODO list
□ Document any decisions made
□ Note any issues for later
□ Commit changes (if using git)
```

---

## 🚫 STRICTLY FORBIDDEN

### 1. Hardcoded Data
```typescript
❌ FORBIDDEN:
const guests = [
  { id: 1, name: "John Doe", cabin: "Master Suite" },
  { id: 2, name: "Jane Smith", cabin: "Guest Cabin A" }
];

✅ REQUIRED:
// Placeholder for API integration
const { data: guests, isLoading } = useQuery(['guests'], api.guests.getAll);

// For now, show loading skeleton or empty state
if (isLoading) return <GuestsSkeleton />;
```

### 2. localStorage for Data Storage
```typescript
❌ FORBIDDEN:
localStorage.setItem('guests', JSON.stringify(guests));
localStorage.setItem('settings', JSON.stringify(settings));

✅ ALLOWED (ONLY FOR):
localStorage.setItem('auth-token', token); // Auth only
localStorage.setItem('theme', 'dark'); // UI preferences only
```

### 3. Skipping Steps
```typescript
❌ FORBIDDEN:
- Working on multiple pages simultaneously
- Moving to next page before finishing current
- Skipping testing phase
- Not waiting for user approval

✅ REQUIRED:
- Complete one page fully
- Test thoroughly
- Get user approval
- Document completion
- Move to next page
```

### 4. Changing Functionality
```typescript
❌ FORBIDDEN:
- Adding new features
- Changing API logic
- Modifying backend routes
- Adding database models

✅ ALLOWED:
- Changing UI appearance
- Adding animations
- Improving responsive design
- Better widget layouts
```

### 5. Working Without Plan
```typescript
❌ FORBIDDEN:
- Starting coding without reading docs
- Implementing without understanding requirements
- Guessing what user wants
- Making big decisions alone

✅ REQUIRED:
- Read all docs first
- Understand current page plan
- Ask questions if unclear
- Get approval for major changes
```

---

## ✅ REQUIRED PATTERNS

### Component Structure
```tsx
// 1. Imports (grouped logically)
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

// 2. Types/Interfaces
interface DashboardProps {
  userId: string;
  onNavigate: (page: string) => void;
}

// 3. Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// 4. Main component
export function DashboardPage({ userId, onNavigate }: DashboardProps) {
  // 5. State
  const [isLoading, setIsLoading] = useState(false);

  // 6. API/Data hooks
  const { data: stats } = useQuery(['dashboard-stats'], api.dashboard.getStats);

  // 7. Effects
  useEffect(() => {
    // Setup logic
  }, []);

  // 8. Event handlers
  const handleClick = () => {
    // Handler logic
  };

  // 9. Render logic
  if (isLoading) return <DashboardSkeleton />;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="p-4"
    >
      {/* Content */}
    </motion.div>
  );
}
```

### Responsive Widget Pattern
```tsx
// Use Tailwind's responsive classes + CSS Grid
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="..."
    >
      {/* Widget content */}
    </motion.div>
  ))}
</div>
```

### Animation Pattern
```tsx
// Use Framer Motion for smooth animations
import { motion, AnimatePresence } from 'framer-motion';

// Page transition
<AnimatePresence mode="wait">
  <motion.div
    key={currentPage}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    {/* Page content */}
  </motion.div>
</AnimatePresence>

// Button hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="..."
>
  Click me
</motion.button>

// Card entrance
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  {/* Card content */}
</motion.div>
```

### API Integration Placeholder Pattern
```tsx
// Prepare for API, but don't implement yet
export function useGuests() {
  // TODO: Connect to actual API when backend is ready
  const { data, isLoading, error } = useQuery({
    queryKey: ['guests'],
    queryFn: async () => {
      // Placeholder - will be replaced with actual API call
      // return await api.guests.getAll();

      // For now, return empty array (will show empty state)
      return [];
    },
    enabled: false, // Disable until API is ready
  });

  return { guests: data || [], isLoading, error };
}
```

---

## 🎨 DESIGN GUIDELINES

### THREE THEMES (User Requested)

**USER SAID:** *"Yes! za novi frontend modernizovati treba light tema i možeš tu jahd luxury temu i treću dark temu."*

#### Theme 1: LIGHT (Modernized)
```css
--background: #FFFFFF
--foreground: #0F172A
--card: #F8FAFC
--card-foreground: #0F172A
--primary: #3B82F6 (Blue)
--primary-foreground: #FFFFFF
--muted: #F1F5F9
--muted-foreground: #64748B
--accent: #10B981 (Green)
--border: #E2E8F0
--input: #F1F5F9
--ring: #3B82F6

Style: Clean, modern, minimal (inspired by Vercel, Linear)
```

#### Theme 2: YACHT LUXURY (Premium)
```css
--background: #1A1A1A (Dark charcoal)
--foreground: #F5F5F5
--card: #252525
--card-foreground: #F5F5F5
--primary: #C8A96B (Gold/Champagne)
--primary-foreground: #1A1A1A
--muted: #333333
--muted-foreground: #A0A0A0
--accent: #D4AF37 (Brighter gold)
--border: #404040
--input: #2A2A2A
--ring: #C8A96B

Style: Luxurious, elegant, premium (gold accents, rich colors)
Special: Subtle gradients, soft shadows, high-end feel
```

#### Theme 3: DARK (Pure Dark)
```css
--background: #0F172A (Slate)
--foreground: #E2E8F0
--card: #1E293B
--card-foreground: #E2E8F0
--primary: #3B82F6 (Blue)
--primary-foreground: #FFFFFF
--muted: #334155
--muted-foreground: #94A3B8
--accent: #8B5CF6 (Purple)
--border: #334155
--input: #1E293B
--ring: #3B82F6

Style: Deep, comfortable, OLED-friendly
```

### Theme Implementation
```tsx
// Store theme preference in localStorage
localStorage.setItem('theme', 'light' | 'yacht-luxury' | 'dark');

// Apply theme via CSS variables
document.documentElement.setAttribute('data-theme', theme);
```

### Common Colors (All Themes)
```
SUCCESS: #10B981 (Green)
WARNING: #F59E0B (Orange/Yellow)
ERROR: #EF4444 (Red)
INFO: #3B82F6 (Blue)
```

### Typography
```css
Headings: font-family: 'Inter', sans-serif; font-weight: 600-700
Body: font-family: 'Inter', sans-serif; font-weight: 400
Monospace: font-family: 'Fira Code', monospace; (for IDs, codes)
```

### Spacing
```
xs: 4px (0.5rem)
sm: 8px (1rem)
md: 16px (2rem)
lg: 24px (3rem)
xl: 32px (4rem)
```

### Border Radius
```
sm: 4px
md: 8px
lg: 12px
xl: 16px
```

### Shadows
```
sm: 0 1px 2px rgba(0, 0, 0, 0.05)
md: 0 4px 6px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px rgba(0, 0, 0, 0.15)
```

### Animation Timing
```
Fast: 150ms (hover, click feedback)
Normal: 300ms (transitions, modal open/close)
Slow: 500ms (page transitions, complex animations)
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
sm: 640px   /* Mobile landscape, small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

### Widget Responsive Behavior
```
Small (< 640px):
- Single column layout
- Stacked widgets
- Minimum info displayed

Medium (640px - 1024px):
- 2 column layout
- Cards side by side
- More info per card

Large (> 1024px):
- 3-4 column layout
- Full details visible
- Maximum info density
```

---

## 🔍 TESTING CHECKLIST (Before Each Approval)

### Visual Testing
```
□ Looks good on mobile (375px width)
□ Looks good on tablet (768px width)
□ Looks good on desktop (1920px width)
□ Dark mode works correctly
□ Light mode works correctly
□ All fonts load correctly
□ All icons display correctly
□ Images load (or placeholders shown)
□ Colors match design guidelines
```

### Functional Testing
```
□ All buttons clickable
□ All links navigate correctly
□ Forms submit (even if API not ready)
□ Modals open/close smoothly
□ Dropdowns work correctly
□ Search inputs functional
□ Filters apply correctly (UI only)
□ Pagination works (UI only)
```

### Animation Testing
```
□ Page transitions smooth (no jank)
□ Button hover effects work
□ Card entrance animations play
□ No animation delays or stutters
□ Animations respect user's motion preferences
□ Loading states show correctly
□ Skeleton screens display
```

### Performance Testing
```
□ Page loads in < 3 seconds
□ No console errors
□ No console warnings (major ones)
□ Smooth scrolling (60fps)
□ No memory leaks (use DevTools)
□ Images optimized (lazy loading)
```

### Accessibility Testing
```
□ Keyboard navigation works
□ Focus states visible
□ Screen reader friendly (aria labels)
□ Color contrast sufficient (WCAG AA)
□ Alt text on images
□ Semantic HTML used
```

---

## 📝 DOCUMENTATION REQUIREMENTS

### After Each Page Completion
```markdown
## Dashboard Page - COMPLETED ✅
**Date:** 2025-11-06
**Time Spent:** 4 hours
**Status:** Approved by user

### What Was Done:
- Created responsive grid layout
- Added 4 main widgets (Active Requests, On Duty Crew, Recent Activity, Quick Actions)
- Implemented smooth animations (Framer Motion)
- Made fully responsive (mobile, tablet, desktop)
- Added loading skeletons
- Prepared API integration points

### Components Created:
- `src/components/pages/Dashboard.tsx` - Main dashboard page
- `src/components/widgets/ActiveRequestsWidget.tsx` - Service requests widget
- `src/components/widgets/OnDutyCrewWidget.tsx` - Crew status widget
- `src/components/widgets/RecentActivityWidget.tsx` - Activity log widget
- `src/components/widgets/QuickActionsWidget.tsx` - Action buttons widget
- `src/components/ui/DashboardSkeleton.tsx` - Loading skeleton

### User Feedback:
- User loved the animations
- Requested slightly larger widget padding (changed from 4 to 6)
- Approved for demo

### Next Page: Service Requests
```

---

## 🚀 WHEN TO ASK USER

### Ask Before:
```
- Major design decisions (color scheme changes, layout changes)
- Adding/removing features (even UI-only)
- Changing page structure significantly
- Choosing between multiple approaches
- Moving to next page (get approval first)
```

### Don't Ask (Just Do):
```
- Minor styling tweaks
- Animation timing adjustments
- Code refactoring (internal improvements)
- Bug fixes
- Performance optimizations
```

### Ask After:
```
- Completing each page (show for approval)
- Finishing major component (get feedback)
- Implementing animation (show demo)
- Creating new pattern (confirm approach)
```

---

## 💡 TIPS FOR SUCCESS

### 1. Read Docs First
```
Before starting work on ANY page:
1. Read this RULES document
2. Read DEVELOPMENT-WORKFLOW.md
3. Read PAGE-BY-PAGE-PLAN.md
4. Check Mermaid diagrams
5. Understand current task
```

### 2. Test Early, Test Often
```
Don't wait until page is finished:
- Test responsive at each step
- Test animations as you add them
- Check console for errors frequently
- Use React DevTools to debug
```

### 3. Keep It Simple
```
✅ GOOD:
- Clean code
- Simple components
- Reusable patterns
- Clear structure

❌ BAD:
- Over-engineered solutions
- Complex abstractions
- Premature optimization
- Clever tricks
```

### 4. Follow Existing Patterns
```
If something already works well:
- Copy that pattern
- Don't reinvent the wheel
- Consistency > Creativity (for internal code)
- Creativity = Good for UI/UX
```

### 5. Comment Generously
```typescript
// Document your thinking:

// TODO: Connect to API when backend is ready
// API endpoint: GET /api/dashboard/stats

// FIXME: Animation stutters on slow devices
// Consider using CSS transitions instead of Framer Motion for this

// NOTE: User requested larger padding here
// Changed from p-4 to p-6 (approved Nov 6)

// WARNING: This component re-renders often
// Consider memoization if performance becomes issue
```

---

## 🎯 SUCCESS CRITERIA

### For Each Page:
```
✅ Looks beautiful
✅ Fully responsive
✅ Smooth animations
✅ No bugs/errors
✅ Fast performance
✅ User approved
✅ Documented
✅ Ready for API integration
```

### For Overall Project:
```
✅ All pages completed
✅ Consistent design
✅ Smooth navigation
✅ Mobile apps ready
✅ Wear OS integration ready
✅ Demo-ready by Nov 17
✅ User is happy!
```

---

## 📞 WHEN STUCK

### 1. Check Documentation
```
- This RULES document
- DEVELOPMENT-WORKFLOW.md
- PAGE-BY-PAGE-PLAN.md
- Mermaid diagrams
- Old codebase (as reference only)
```

### 2. Ask User
```
Send clear, specific questions:
- "For Dashboard widget resize, should I show more items or larger items?"
- "Which animation style do you prefer: A (fade) or B (slide)?"
- "Dashboard approved? Can I move to Service Requests page?"
```

### 3. Make Reasonable Decision
```
If user is unavailable and decision is small:
- Choose most common/standard approach
- Document your decision
- Ask for feedback later
- Be ready to change if needed
```

---

**REMEMBER:**
- **Step by step** - Don't rush
- **Page by page** - Finish before moving on
- **Function by function** - One thing at a time
- **Test thoroughly** - Quality over speed
- **Get approval** - User is the boss
- **Document everything** - Future you will thank you
- **Have fun!** - We're building something cool! 🚀

---

## 🚨 CRITICAL RULES FROM OLD PROJECT - MUST FOLLOW!

**USER SAID:** *"Ono što je najbitnije je da napišeš sebi da iskopiraš pravila koje smo tamo upisali u starom failu. Još jednom, pravila su najbitnija kako ne bi došlo opet do kvara i opet do ove ludila gde sam izgubio mnogo dana i mnogo živaca."*

### 🔴 FROM OLD RULES - ABSOLUTE FORBIDDEN PRACTICES

#### 1. NO HARDCODED DATA - EVER!
```typescript
// ❌ ZABRANJENO:
const locations = ["Master Suite", "Guest Cabin"];
const defaultUser = { name: "John Doe" };
const mockDevices = [...];
const mockServiceRequest = { id: "123", status: "pending" };
const fakeGuest = { name: "Test Guest" };
const dummyData = generateTestData();

// ✅ OBAVEZNO:
const locations = await prisma.location.findMany();
const user = await prisma.user.findUnique({ where: { id } });
const devices = await prisma.device.findMany();
const serviceRequest = await prisma.serviceRequest.create({ data: {...} });
const guest = await prisma.guest.findUnique({ where: { id } });
```

#### 2. NO LOCAL-ONLY FEATURES
```typescript
// ❌ ZABRANJENO:
localStorage.setItem('devices', JSON.stringify(devices));
localStorage.setItem('settings', JSON.stringify(settings));
localStorage.setItem('guests', JSON.stringify(guests));
const settings = JSON.parse(localStorage.getItem('settings'));

// ✅ DOZVOLJENO (SAMO ZA):
localStorage.setItem('auth-token', token); // Auth only
localStorage.setItem('theme', 'dark'); // UI preferences only

// ✅ OBAVEZNO ZA DATA:
await fetch('/api/user-preferences', { method: 'PUT', body: ... });
const { data: settings } = await fetch('/api/settings');
```

#### 3. NE KVARI ŠTO RADI - DON'T TOUCH WORKING CODE
```
✅ ZAVRŠENE KOMPONENTE - NE DIRATI:
(Za stari projekat bile su ove, za novi paziti šta je završeno)
- Komponente koje user odobri ✅
- API routes koji rade ✅
- Database schema koja radi ✅
- WebSocket events koji rade ✅
```

### OBAVEZAN WORKFLOW (From Old Rules)

#### 1. PRE SVAKOG ZADATKA - CHECKLIST:
```
□ Pročitao RULES-FOR-CLAUDE.md?
□ Pročitao DEVELOPMENT-WORKFLOW.md?
□ Pročitao PAGE-BY-PAGE-PLAN.md za current page?
□ Znam tačno koji zadatak radim?
□ Proverio da li API endpoint postoji?
□ Proverio da komponenta već koristi React Query?
□ Pitao korisnika ako nisam siguran?
```

#### 2. REDOSLED IMPLEMENTACIJE (Old Rules):
```
1. Backend API endpoint (ako ne postoji)
2. Testirati sa Postman/curl
3. React Query hook
4. Frontend komponenta
5. WebSocket listener
6. Testirati end-to-end
7. Dobiti user approval
```

**ZA NAŠ DEMO:** Mi radimo SAMO frontend, ali **struktura mora biti ista** - pripremiti za API integraciju!

#### 3. OBAVEZNI PATTERNS (From Old Rules):

**Backend Endpoint Pattern:**
```typescript
router.post('/',
  authMiddleware,
  requirePermission('resource.create'),
  validate(createSchema),
  asyncHandler(async (req, res) => {
    const result = await prisma.resource.create({ data: req.body });
    websocketService.emit('resource:created', result);
    res.json({ success: true, data: result });
  })
);
```

**Frontend Hook Pattern:**
```typescript
export function useResources() {
  return useQuery({
    queryKey: ['resources'],
    queryFn: () => api.resources.getAll(),
    staleTime: 1000 * 60 * 5,
  });
}
```

**WebSocket Listener Pattern:**
```typescript
useEffect(() => {
  const ws = websocketService.connect();
  ws.on('resource:updated', () => {
    queryClient.invalidateQueries(['resources']);
  });
  return () => ws.disconnect();
}, []);
```

### CRITICAL ARCHITECTURE PRINCIPLES (From Old Rules)

#### 1. CLIENT-SERVER ARCHITECTURE
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   ESP32 Buttons │     │ iOS/Android App │     │  Web Dashboard  │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │ MQTT                  │ HTTP/WS                │ HTTP/WS
         │                       │                        │
    ┌────▼────────────────────────▼────────────────────────▼─────┐
    │                      OBEDIO SERVER                          │
    │  - Express API                                              │
    │  - WebSocket Server                                         │
    │  - MQTT Service                                            │
    │  - PostgreSQL Database                                     │
    └─────────────────────────────────────────────────────────────┘
```

#### 2. DATABASE IS SINGLE SOURCE OF TRUTH
```
❌ WRONG:
- Frontend generates IDs
- Frontend stores permanent data
- Frontend is the source of truth

✅ CORRECT:
- Database generates all IDs
- Database stores all permanent data
- Database is the ONLY source of truth
- All state changes go through API
- Database triggers real-time updates (via WebSocket)
```

#### 3. SERVER MUST WORK HEADLESS
```
CRITICAL: Backend API must function WITHOUT frontend!

✅ Backend works 24/7 independently
✅ ESP32 devices connect directly to server (not through frontend)
✅ iOS/Android apps connect to server (not through web frontend)
✅ Multiple frontends can connect simultaneously
✅ Frontend is OPTIONAL dashboard, not required for system to work
```

### WHAT TO AVOID (From Old Rules)

```
🚫 STRIKTNO ZABRANJENO:
1. Hardcoded data - SVE mora iz baze
2. localStorage za data - Samo za auth token i UI preferences
3. Direktni fetch bez api service
4. Refaktorisanje završenih komponenti
5. Rad bez testiranja
6. Skipping korak po korak workflow
7. Pretpostavke šta korisnik želi (pitaj!)
8. Rad na više stranica istovremeno
9. Dodavanje funkcionalnosti (SAMO UI/UX za sada)
10. Izmjene backend API-ja (ne sad)
```

### IF NOT SURE - ASK! (From Old Rules)

```
AKO NISI SIGURAN:
1. Pogledaj kako radi nešto slično u starom projektu
2. Proveri da li postoji API endpoint
3. Testiraj svaku promenu
4. PITAJ KORISNIKA pre nego što menjaš arhitekturu
5. Ne pretpostavljaj - PITAJ!
```

### ZAPAMTI (From Old Rules)

**"Ovo je production sistem za jahtu, ne demo aplikacija!"**

Iako pravimo demo verziju, arhitektura mora biti **production-ready**:
- ✅ Real database (ne mock data)
- ✅ Real API calls (ne hardcoded)
- ✅ Real WebSocket (ne polling)
- ✅ Real MQTT (ne fake messages)
- ✅ Real authentication (ne hardcoded users)

**DEMO = SIMPLIFIED, NOT FAKE!**

Simplifikujemo security, permissions, error handling - ali **ARHITEKTURA OSTAJE ISTA!**

---

**END OF RULES**

**Created:** 2025-11-05
**Last Updated:** 2025-11-05 (Added critical rules from old project)
**Version:** 1.1
**Status:** ACTIVE - READ BEFORE EVERY TASK

**MOST IMPORTANT:** These rules exist because previous work broke due to:
- Mock data instead of database
- localStorage instead of API
- Skipping steps
- Not testing
- Not asking user

**DON'T REPEAT THOSE MISTAKES!** 🚨
