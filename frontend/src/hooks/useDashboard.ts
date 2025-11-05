import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

/**
 * Hook for fetching dashboard statistics
 * @returns Dashboard stats (active requests, guests, crew, devices)
 */
export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => api.getDashboardStats(),
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}

/**
 * Hook for fetching active service requests
 * @returns List of pending and serving service requests
 */
export function useActiveServiceRequests() {
  return useQuery({
    queryKey: ['service-requests', 'active'],
    queryFn: () => api.getActiveServiceRequests(),
    refetchInterval: 5000, // Refetch every 5 seconds (real-time updates)
  });
}

/**
 * Hook for fetching active guests
 * @returns List of active guests
 */
export function useActiveGuests() {
  return useQuery({
    queryKey: ['guests', 'active'],
    queryFn: () => api.getActiveGuests(),
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}

/**
 * Hook for fetching all devices
 * @returns List of all devices (ESP32, watches, tablets)
 */
export function useDevices() {
  return useQuery({
    queryKey: ['devices'],
    queryFn: () => api.getDevices(),
    refetchInterval: 10000, // Refetch every 10 seconds
  });
}

/**
 * Hook for fetching on-duty crew members
 * @returns List of crew members currently on duty
 */
export function useOnDutyCrew() {
  return useQuery({
    queryKey: ['crew', 'on-duty'],
    queryFn: () => api.getOnDutyCrew(),
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}

/**
 * Hook for fetching recent activity log
 * @param limit - Number of activity items to fetch (default: 20)
 * @returns List of recent activity log items
 */
export function useActivityLog(limit = 20) {
  return useQuery({
    queryKey: ['activity-log', limit],
    queryFn: () => api.getActivityLog(limit),
    refetchInterval: 10000, // Refetch every 10 seconds
  });
}
