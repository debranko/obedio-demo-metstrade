# 🔄 DEVELOPMENT WORKFLOW - Step by Step Process
**Created:** 2025-11-05
**Purpose:** Definisati TAČAN proces kako Claude radi na svakom zadatku

---

## 🎯 CORE PRINCIPLE: ONE THING AT A TIME

```
┌─────────────────────────────────────────────────┐
│  FINISH COMPLETELY before moving to next step  │
│  PAGE → TEST → APPROVE → NEXT PAGE             │
└─────────────────────────────────────────────────┘
```

**NO PARALLEL WORK. NO SKIPPING. NO GUESSING.**

---

## 📋 COMPLETE WORKFLOW - EVERY TASK

### 🔸 STEP 1: PREPARATION (Before Writing Any Code)

#### 1.1 Read Documentation (5-10 min)
```bash
✅ Read: RULES-FOR-CLAUDE.md
✅ Read: DEVELOPMENT-WORKFLOW.md (this file)
✅ Read: PAGE-BY-PAGE-PLAN.md (current page section)
✅ Check: Mermaid diagrams for architecture understanding
✅ Review: Any user feedback/notes from previous session
```

#### 1.2 Understand Current Task
```markdown
ASK YOURSELF:
□ What page am I working on?
□ What is the goal of this page?
□ What components does it need?
□ What data will it display (even if placeholder)?
□ What interactions does user expect?
□ Are there any specific requirements?
□ What is the acceptance criteria?
```

#### 1.3 Check Prerequisites
```markdown
□ Is previous page completed and approved?
□ Do I have all necessary information?
□ Are there any blockers?
□ Do I need to ask user any questions?
```

#### 1.4 Create Task Checklist
```markdown
Example for Dashboard Page:
□ Create Dashboard.tsx file
□ Setup basic layout structure
□ Add 4 main widgets
□ Make responsive grid
□ Add animations
□ Add loading states
□ Test on multiple screen sizes
□ Get user approval
```

---

### 🔸 STEP 2: FILE STRUCTURE SETUP (10-15 min)

#### 2.1 Create Necessary Files
```bash
# Example for Dashboard page:
frontend/src/components/pages/Dashboard.tsx
frontend/src/components/widgets/ActiveRequestsWidget.tsx
frontend/src/components/widgets/OnDutyCrewWidget.tsx
frontend/src/components/widgets/RecentActivityWidget.tsx
frontend/src/components/widgets/QuickActionsWidget.tsx
frontend/src/components/ui/DashboardSkeleton.tsx
frontend/src/hooks/useDashboard.ts (if needed)
```

#### 2.2 Setup Basic Structure
```tsx
// Dashboard.tsx - Start with skeleton
import { useState } from 'react';

export function DashboardPage() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      {/* TODO: Add widgets */}
    </div>
  );
}
```

#### 2.3 Update Routing (if needed)
```tsx
// Add route to App.tsx or router config
<Route path="/dashboard" element={<DashboardPage />} />
```

---

### 🔸 STEP 3: LAYOUT & STRUCTURE (30-45 min)

#### 3.1 Create HTML/JSX Structure
```tsx
// Add semantic HTML structure
<div className="dashboard-container">
  <header className="dashboard-header">
    <h1>Dashboard</h1>
    <div className="dashboard-actions">
      {/* Action buttons */}
    </div>
  </header>

  <main className="dashboard-grid">
    <div className="widget-active-requests">
      {/* Widget content */}
    </div>
    <div className="widget-crew-status">
      {/* Widget content */}
    </div>
    <div className="widget-recent-activity">
      {/* Widget content */}
    </div>
    <div className="widget-quick-actions">
      {/* Widget content */}
    </div>
  </main>
</div>
```

#### 3.2 Setup Grid System
```tsx
// Use CSS Grid or Flexbox for responsive layout
<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Widgets */}
</div>
```

#### 3.3 Test Basic Layout
```bash
✅ Check: Does layout look reasonable?
✅ Check: Are widgets positioned correctly?
✅ Check: Does responsive grid work (resize window)?
```

---

### 🔸 STEP 4: STYLING & DESIGN (45-60 min)

#### 4.1 Add Tailwind CSS Classes
```tsx
<div className="
  bg-card
  rounded-lg
  border border-border
  p-6
  shadow-md
  hover:shadow-lg
  transition-shadow
  duration-300
">
  {/* Content */}
</div>
```

#### 4.2 Apply Design System
```css
/* Colors */
- Primary: text-primary, bg-primary
- Secondary: text-secondary, bg-secondary
- Muted: text-muted-foreground, bg-muted
- Accent: text-accent, bg-accent

/* Spacing */
- Padding: p-4, p-6, p-8
- Margin: m-4, m-6, m-8
- Gap: gap-2, gap-4, gap-6

/* Typography */
- Headings: text-2xl font-bold, text-xl font-semibold
- Body: text-base, text-sm
- Muted: text-sm text-muted-foreground
```

#### 4.3 Make Responsive
```tsx
// Mobile-first approach
<div className="
  w-full
  sm:w-1/2
  lg:w-1/3
  xl:w-1/4
">
  {/* Responsive width */}
</div>
```

#### 4.4 Test Styling
```bash
✅ Check: Does it match design guidelines?
✅ Check: Are colors consistent?
✅ Check: Is spacing appropriate?
✅ Check: Does it look good on mobile?
✅ Check: Does it look good on tablet?
✅ Check: Does it look good on desktop?
```

---

### 🔸 STEP 5: ANIMATIONS (30-45 min)

#### 5.1 Install/Import Framer Motion
```tsx
import { motion, AnimatePresence } from 'framer-motion';
```

#### 5.2 Add Page Transition
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

#### 5.3 Add Widget Entrance Animations
```tsx
{widgets.map((widget, index) => (
  <motion.div
    key={widget.id}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }}
  >
    {/* Widget content */}
  </motion.div>
))}
```

#### 5.4 Add Hover Effects
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="..."
>
  Click me
</motion.button>
```

#### 5.5 Test Animations
```bash
✅ Check: Are animations smooth (no jank)?
✅ Check: Do animations enhance UX (not distract)?
✅ Check: Are timings appropriate?
✅ Check: Do animations work on slower devices?
```

---

### 🔸 STEP 6: DATA & STATE (30-45 min)

#### 6.1 Create Data Hook (Placeholder)
```tsx
// hooks/useDashboard.ts
export function useDashboardStats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      // TODO: Connect to actual API
      // For now, return placeholder data or empty state
      return {
        activeRequests: 0,
        onDutyCrew: 0,
        recentActivity: []
      };
    },
    enabled: false // Disable until API ready
  });

  return {
    stats: data,
    isLoading,
    error
  };
}
```

#### 6.2 Use Hook in Component
```tsx
export function DashboardPage() {
  const { stats, isLoading } = useDashboardStats();

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div>
      <h2>Active Requests: {stats?.activeRequests || 0}</h2>
      {/* ... */}
    </div>
  );
}
```

#### 6.3 Add Loading States
```tsx
// Create skeleton component
export function DashboardSkeleton() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-40 bg-muted rounded-lg" />
        </div>
      ))}
    </div>
  );
}
```

#### 6.4 Add Empty States
```tsx
{stats.activeRequests === 0 && (
  <div className="text-center py-8 text-muted-foreground">
    <p>No active requests</p>
  </div>
)}
```

---

### 🔸 STEP 7: INTERACTIONS (20-30 min)

#### 7.1 Add Click Handlers
```tsx
const handleWidgetClick = (widgetId: string) => {
  console.log('Widget clicked:', widgetId);
  // Navigate or show details
};
```

#### 7.2 Add Navigation
```tsx
const navigate = useNavigate(); // or custom hook

const handleViewAll = () => {
  navigate('/service-requests');
};
```

#### 7.3 Add Keyboard Support
```tsx
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</button>
```

---

### 🔸 STEP 8: TESTING (30-45 min)

#### 8.1 Visual Testing
```bash
✅ Chrome DevTools - Inspect elements
✅ Responsive Mode - Test all breakpoints (375px, 768px, 1024px, 1920px)
✅ Dark Mode - Toggle and check colors
✅ Light Mode - Toggle and check colors
✅ Different zoom levels (50%, 100%, 150%)
```

#### 8.2 Functional Testing
```bash
✅ Click all buttons - Do they work?
✅ Click all links - Do they navigate?
✅ Open all modals - Do they open/close?
✅ Try keyboard navigation - Tab, Enter, Escape
✅ Try edge cases - Empty data, error states
```

#### 8.3 Performance Testing
```bash
✅ Open Chrome DevTools Performance tab
✅ Record page load
✅ Check for:
   - Long tasks (> 50ms)
   - Layout shifts (CLS)
   - Paint issues
   - Memory leaks
✅ Lighthouse audit (aim for 90+ score)
```

#### 8.4 Accessibility Testing
```bash
✅ Chrome DevTools Accessibility pane
✅ Check contrast ratios (WCAG AA: 4.5:1 for text)
✅ Check aria labels (screen reader friendly)
✅ Check keyboard navigation (all focusable elements)
✅ Use screen reader (if available)
```

---

### 🔸 STEP 9: CODE REVIEW (Self-Review) (15-20 min)

#### 9.1 Code Quality Check
```typescript
□ No console.log() left in code (except intentional logging)
□ No commented-out code (except TODOs)
□ No hardcoded values (use constants)
□ No magic numbers (use named constants)
□ Consistent naming (camelCase for variables, PascalCase for components)
□ Proper TypeScript types (no 'any' unless necessary)
```

#### 9.2 Component Quality Check
```typescript
□ Component is single responsibility (does one thing well)
□ Props are properly typed
□ State is minimal (only what's needed)
□ Effects are cleaned up (return cleanup function)
□ Event handlers are memoized (useCallback if needed)
□ Components are reusable (not tightly coupled)
```

#### 9.3 Performance Check
```typescript
□ Large lists are virtualized (if > 100 items)
□ Images are lazy loaded
□ Heavy computations are memoized (useMemo)
□ Expensive components are memoized (React.memo)
□ No unnecessary re-renders (check with React DevTools Profiler)
```

---

### 🔸 STEP 10: DOCUMENTATION (10-15 min)

#### 10.1 Add Code Comments
```tsx
// Document purpose and usage
/**
 * Dashboard Page
 *
 * Main dashboard showing overview of system status:
 * - Active service requests count
 * - On-duty crew members
 * - Recent activity timeline
 * - Quick action buttons
 *
 * @component
 * @example
 * <DashboardPage userId="123" onNavigate={handleNav} />
 */
export function DashboardPage({ userId, onNavigate }: DashboardProps) {
  // ...
}
```

#### 10.2 Update PAGE-BY-PAGE-PLAN.md
```markdown
## Dashboard Page - COMPLETED ✅
**Date:** 2025-11-06
**Status:** Approved by user
**Time Spent:** 4 hours

### Components Created:
- Dashboard.tsx
- ActiveRequestsWidget.tsx
- OnDutyCrewWidget.tsx
- RecentActivityWidget.tsx
- QuickActionsWidget.tsx
- DashboardSkeleton.tsx

### User Feedback:
- Loved the animations
- Requested larger padding (changed p-4 to p-6)
- Approved for demo

### Next: Service Requests Page
```

#### 10.3 Update TODO List
```markdown
✅ Dashboard page completed
⏳ Service Requests page in progress
□ Guests page
□ Chat page
□ Tasks page
```

---

### 🔸 STEP 11: USER APPROVAL (10-15 min)

#### 11.1 Prepare Demo
```bash
# Make sure dev server is running
npm run dev

# Open page in browser
http://localhost:5173/dashboard

# Test one more time before showing user
```

#### 11.2 Show to User
```markdown
Send message:

"Dashboard page is ready for review! 🎉

**What I've built:**
- Responsive grid layout with 4 main widgets
- Smooth entrance animations
- Works on mobile, tablet, and desktop
- Loading skeletons when data is loading
- Empty states when no data
- Prepared for API integration

**Live demo:**
http://localhost:5173/dashboard

**Please test:**
- Resize window (check responsive behavior)
- Try dark/light mode toggle
- Click buttons and widgets
- Check animations

**Let me know:**
- What you like ✅
- What needs changing ❌
- Any feedback 💬

Once approved, I'll move to Service Requests page."
```

#### 11.3 Collect Feedback
```markdown
User might say:
- "Looks great! Approved ✅" → Move to next page
- "Can you make X bigger?" → Make change, show again
- "I don't like Y" → Discuss alternatives, implement
- "Can we add Z?" → Check if in scope, discuss
```

#### 11.4 Implement Feedback
```bash
# If user requests changes:
1. Make the changes
2. Test again
3. Show to user again
4. Get final approval
5. Document feedback in PAGE-BY-PAGE-PLAN.md
```

---

### 🔸 STEP 12: MOVE TO NEXT TASK (5 min)

#### 12.1 Mark Current Task Complete
```markdown
✅ Update TODO list
✅ Update PAGE-BY-PAGE-PLAN.md
✅ Commit changes (if using git)
✅ Take a short break! ☕
```

#### 12.2 Prepare for Next Task
```markdown
□ Read PAGE-BY-PAGE-PLAN.md for next page
□ Understand next page requirements
□ Ask any questions if unclear
□ Start STEP 1 again for next page
```

---

## 🎯 EXAMPLE: Complete Workflow for Dashboard Page

```
DAY 1 - DASHBOARD PAGE

09:00 - STEP 1: Preparation (10 min)
   ✅ Read all docs
   ✅ Understand dashboard requirements
   ✅ Check no blockers

09:10 - STEP 2: File Structure (15 min)
   ✅ Create Dashboard.tsx
   ✅ Create 4 widget components
   ✅ Create skeleton component
   ✅ Update routing

09:25 - STEP 3: Layout & Structure (45 min)
   ✅ Build HTML structure
   ✅ Setup grid system
   ✅ Position widgets
   ✅ Test responsive layout

10:10 - BREAK (10 min) ☕

10:20 - STEP 4: Styling & Design (60 min)
   ✅ Add Tailwind classes
   ✅ Apply design system
   ✅ Make fully responsive
   ✅ Test on all screen sizes

11:20 - STEP 5: Animations (45 min)
   ✅ Install Framer Motion
   ✅ Add page transitions
   ✅ Add widget entrance animations
   ✅ Add hover effects
   ✅ Test smoothness

12:05 - LUNCH BREAK (30 min) 🍕

12:35 - STEP 6: Data & State (45 min)
   ✅ Create useDashboard hook
   ✅ Add loading states
   ✅ Add empty states
   ✅ Test with placeholder data

13:20 - STEP 7: Interactions (30 min)
   ✅ Add click handlers
   ✅ Add navigation
   ✅ Add keyboard support

13:50 - BREAK (10 min) ☕

14:00 - STEP 8: Testing (45 min)
   ✅ Visual testing (all screen sizes)
   ✅ Functional testing (all buttons work)
   ✅ Performance testing (Lighthouse)
   ✅ Accessibility testing (contrast, keyboard)

14:45 - STEP 9: Code Review (20 min)
   ✅ Check code quality
   ✅ Check component quality
   ✅ Check performance
   ✅ Fix any issues found

15:05 - STEP 10: Documentation (15 min)
   ✅ Add code comments
   ✅ Update PAGE-BY-PAGE-PLAN.md
   ✅ Update TODO list

15:20 - STEP 11: User Approval (15 min)
   ✅ Prepare demo
   ✅ Show to user
   ✅ User: "Looks great! Just make padding larger."
   ✅ Make change (p-4 → p-6)
   ✅ Show again
   ✅ User: "Perfect! Approved ✅"

15:35 - STEP 12: Move to Next Task (5 min)
   ✅ Mark Dashboard complete
   ✅ Commit changes
   ✅ Read plan for Service Requests page

15:40 - END OF DAY
   Total time: ~6 hours for Dashboard page
   Next: Service Requests page tomorrow
```

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ MISTAKE 1: Skipping Steps
```
DON'T:
- Start coding without reading docs
- Skip testing phase
- Move to next page before approval
- Forget documentation

DO:
- Follow all 12 steps in order
- Don't skip any step
- Get approval before moving on
```

### ❌ MISTAKE 2: Working on Multiple Pages
```
DON'T:
- Work on Dashboard + Service Requests simultaneously
- Start next page while waiting for feedback
- Context-switch between pages

DO:
- Focus on ONE page at a time
- Finish completely before moving on
- Wait for approval before starting next
```

### ❌ MISTAKE 3: Over-Engineering
```
DON'T:
- Create complex abstractions
- Optimize prematurely
- Add features not requested
- Make it "perfect"

DO:
- Keep it simple
- Optimize only if needed
- Stick to requirements
- Ship working code
```

### ❌ MISTAKE 4: Under-Testing
```
DON'T:
- Test only on your screen size
- Skip responsive testing
- Ignore console errors
- Assume animations work on all devices

DO:
- Test all screen sizes
- Test dark/light mode
- Fix all console errors
- Test performance on slower devices
```

### ❌ MISTAKE 5: Poor Communication
```
DON'T:
- Disappear for hours without update
- Make major decisions without asking
- Assume user wants something
- Show half-finished work

DO:
- Update user on progress
- Ask when unsure
- Confirm major decisions
- Show complete work for approval
```

---

## ✅ SUCCESS CHECKLIST

### Before Showing User:
```
□ Page looks beautiful
□ All animations smooth
□ Fully responsive (mobile, tablet, desktop)
□ No console errors or warnings
□ Fast performance (< 3s load)
□ Keyboard navigation works
□ Loading states work
□ Empty states look good
□ Dark/light mode both work
□ Code is clean and documented
□ Self-reviewed code
□ Tested thoroughly
```

### After User Approval:
```
□ Feedback implemented
□ Final approval received
□ PAGE-BY-PAGE-PLAN.md updated
□ TODO list updated
□ Committed changes (if using git)
□ Ready to move to next page
```

---

**REMEMBER THE MANTRA:**

```
READ → PLAN → BUILD → TEST → APPROVE → NEXT

One step at a time.
One page at a time.
One function at a time.

Quality over speed.
User satisfaction over perfection.
Working demo over fancy features.
```

---

**END OF WORKFLOW**

**Follow this process for EVERY page.**
**Don't skip steps.**
**Don't rush.**
**Deliver quality.**

🚀 **LET'S BUILD SOMETHING AMAZING!** 🚀
