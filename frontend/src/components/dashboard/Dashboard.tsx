import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ServiceRequestsWidget } from './widgets/ServiceRequestsWidget';
import { GuestStatusWidget } from './widgets/GuestStatusWidget';
import { DeviceMonitorWidget } from './widgets/DeviceMonitorWidget';
import { CrewActivityWidget } from './widgets/CrewActivityWidget';
import { ActivityLogWidget } from './widgets/ActivityLogWidget';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Dashboard() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Array<'light' | 'yacht-luxury' | 'dark'> = ['light', 'yacht-luxury', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            OBEDIO Yacht Crew Management System
          </p>
        </div>

        {/* Theme Switcher */}
        <button
          onClick={cycleTheme}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
        >
          {theme === 'light' && <Sun className="h-4 w-4" />}
          {theme === 'yacht-luxury' && <Sparkles className="h-4 w-4" />}
          {theme === 'dark' && <Moon className="h-4 w-4" />}
          <span className="capitalize">{theme === 'yacht-luxury' ? 'Luxury' : theme}</span>
        </button>
      </div>

      {/* Dashboard Grid - 5 Widgets */}
      <div className="grid gap-4 md:gap-6 lg:gap-8">
        {/* Top Row - 2 Widgets */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <ServiceRequestsWidget />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GuestStatusWidget />
          </motion.div>
        </div>

        {/* Middle Row - Device Monitor (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <DeviceMonitorWidget />
        </motion.div>

        {/* Bottom Row - 2 Widgets */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <CrewActivityWidget />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <ActivityLogWidget />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
