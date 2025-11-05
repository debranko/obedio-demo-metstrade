// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Types
export interface ServiceRequest {
  id: string;
  guestId: string;
  guestName: string;
  locationId: string;
  locationName: string;
  requestType: string;
  priority: 'normal' | 'vip' | 'master';
  status: 'pending' | 'serving' | 'completed';
  assignedToId?: string;
  assignedToName?: string;
  createdAt: string;
}

export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  photo?: string;
  type: 'vip' | 'master' | 'regular';
  status: 'active' | 'checked-out' | 'arriving';
  locationId?: string;
  locationName?: string;
}

export interface Device {
  id: string;
  deviceId: string;
  name: string;
  type: 'esp32' | 'wear-os' | 'apple-watch' | 'tablet';
  status: 'online' | 'offline' | 'low-battery';
  battery?: number;
  lastSeen?: string;
  signalStrength?: number; // RSSI for MQTT devices
  locationId?: string;
}

export interface CrewMember {
  id: string;
  name: string;
  position: string;
  department: string;
  status: 'on-duty' | 'off-duty' | 'break';
  photo?: string;
}

export interface ActivityLogItem {
  id: string;
  type: string;
  description: string;
  userId?: string;
  userName?: string;
  createdAt: string;
}

export interface DashboardStats {
  activeRequests: number;
  activeGuests: number;
  onDutyCrew: number;
  onlineDevices: number;
  offlineDevices: number;
}

// API Service
class ApiService {
  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        credentials: 'include', // Important for JWT cookies
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API fetch error for ${endpoint}:`, error);
      throw error;
    }
  }

  // Dashboard API
  async getDashboardStats(): Promise<DashboardStats> {
    // TODO: Connect to backend when ready
    // return this.fetch<DashboardStats>('/dashboard/stats');

    // Placeholder: Return empty stats until backend is connected
    return {
      activeRequests: 0,
      activeGuests: 0,
      onDutyCrew: 0,
      onlineDevices: 0,
      offlineDevices: 0,
    };
  }

  // Service Requests API
  async getServiceRequests(filters?: {
    status?: string;
    priority?: string;
  }): Promise<ServiceRequest[]> {
    // TODO: Connect to backend when ready
    // const query = new URLSearchParams(filters as any).toString();
    // return this.fetch<ServiceRequest[]>(`/service-requests?${query}`);

    // Placeholder: Return empty array until backend is connected
    return [];
  }

  async getActiveServiceRequests(): Promise<ServiceRequest[]> {
    return this.getServiceRequests({ status: 'pending,serving' });
  }

  // Guests API
  async getGuests(filters?: { status?: string }): Promise<Guest[]> {
    // TODO: Connect to backend when ready
    // const query = new URLSearchParams(filters as any).toString();
    // return this.fetch<Guest[]>(`/guests?${query}`);

    // Placeholder: Return empty array until backend is connected
    return [];
  }

  async getActiveGuests(): Promise<Guest[]> {
    return this.getGuests({ status: 'active' });
  }

  // Devices API
  async getDevices(): Promise<Device[]> {
    // TODO: Connect to backend when ready
    // return this.fetch<Device[]>('/devices');

    // Placeholder: Return empty array until backend is connected
    return [];
  }

  // Crew API
  async getCrewMembers(): Promise<CrewMember[]> {
    // TODO: Connect to backend when ready
    // return this.fetch<CrewMember[]>('/crew');

    // Placeholder: Return empty array until backend is connected
    return [];
  }

  async getOnDutyCrew(): Promise<CrewMember[]> {
    // TODO: Connect to backend when ready
    // return this.fetch<CrewMember[]>('/crew?status=on-duty');

    // Placeholder: Return empty array until backend is connected
    return [];
  }

  // Activity Log API
  async getActivityLog(limit?: number): Promise<ActivityLogItem[]> {
    // TODO: Connect to backend when ready
    // return this.fetch<ActivityLogItem[]>(`/activity-log?limit=${limit || 20}`);

    // Placeholder: Return empty array until backend is connected
    return [];
  }
}

export const api = new ApiService();
