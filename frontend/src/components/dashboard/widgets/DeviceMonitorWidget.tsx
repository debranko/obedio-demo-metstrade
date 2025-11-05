import { useDevices } from '../../../hooks/useDashboard';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/Card';
import { Wifi, WifiOff, Battery, BatteryLow, Smartphone, Watch, Tablet, AlertCircle } from 'lucide-react';

export function DeviceMonitorWidget() {
  const { data: devices, isLoading, error } = useDevices();

  const onlineDevices = devices?.filter((d) => d.status === 'online').length || 0;
  const offlineDevices = devices?.filter((d) => d.status === 'offline').length || 0;
  const lowBatteryDevices = devices?.filter((d) => d.status === 'low-battery').length || 0;

  const deviceTypeIcons = {
    'esp32': Smartphone,
    'wear-os': Watch,
    'apple-watch': Watch,
    'tablet': Tablet,
  };

  const getDeviceTypeLabel = (type: string) => {
    const labels = {
      'esp32': 'ESP32 Button',
      'wear-os': 'Wear OS Watch',
      'apple-watch': 'Apple Watch',
      'tablet': 'Tablet',
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Wifi className="h-5 w-5 text-secondary" />
            </div>
            <CardTitle>Device Monitor</CardTitle>
          </div>

          {/* Summary Stats */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="font-medium text-green-600 dark:text-green-400">{onlineDevices}</span>
              <span className="text-muted-foreground">online</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span className="font-medium text-red-600 dark:text-red-400">{offlineDevices}</span>
              <span className="text-muted-foreground">offline</span>
            </div>
            {lowBatteryDevices > 0 && (
              <div className="flex items-center gap-1">
                <BatteryLow className="h-4 w-4 text-orange-500" />
                <span className="font-medium text-orange-600 dark:text-orange-400">{lowBatteryDevices}</span>
                <span className="text-muted-foreground">low battery</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-16 rounded bg-muted"></div>
            <div className="h-16 rounded bg-muted"></div>
            <div className="h-16 rounded bg-muted"></div>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Failed to load devices</span>
          </div>
        ) : (
          <div>
            {devices && devices.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {devices.map((device) => {
                  const DeviceIcon = deviceTypeIcons[device.type as keyof typeof deviceTypeIcons] || Smartphone;
                  const isOnline = device.status === 'online';
                  const isLowBattery = device.status === 'low-battery';

                  return (
                    <div
                      key={device.id}
                      className={`rounded-lg border p-4 transition-all duration-200 hover:shadow-md ${
                        isOnline
                          ? 'border-green-500/20 bg-green-500/5'
                          : isLowBattery
                          ? 'border-orange-500/20 bg-orange-500/5'
                          : 'border-red-500/20 bg-red-500/5'
                      }`}
                    >
                      {/* Device Header */}
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                              isOnline
                                ? 'bg-green-500/10'
                                : isLowBattery
                                ? 'bg-orange-500/10'
                                : 'bg-red-500/10'
                            }`}
                          >
                            <DeviceIcon
                              className={`h-4 w-4 ${
                                isOnline
                                  ? 'text-green-600 dark:text-green-400'
                                  : isLowBattery
                                  ? 'text-orange-600 dark:text-orange-400'
                                  : 'text-red-600 dark:text-red-400'
                              }`}
                            />
                          </div>
                          <div>
                            <div className="font-medium text-foreground text-sm">{device.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {getDeviceTypeLabel(device.type)}
                            </div>
                          </div>
                        </div>
                        {isOnline ? (
                          <Wifi className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <WifiOff className="h-4 w-4 text-red-600 dark:text-red-400" />
                        )}
                      </div>

                      {/* Device Details */}
                      <div className="space-y-2">
                        {/* Status Badge */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Status</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              isOnline
                                ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                                : isLowBattery
                                ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                                : 'bg-red-500/10 text-red-600 dark:text-red-400'
                            }`}
                          >
                            {device.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>

                        {/* Battery Level */}
                        {device.battery !== undefined && (
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Battery</span>
                            <div className="flex items-center gap-1">
                              <Battery
                                className={`h-3 w-3 ${
                                  device.battery < 20
                                    ? 'text-red-600 dark:text-red-400'
                                    : device.battery < 50
                                    ? 'text-orange-600 dark:text-orange-400'
                                    : 'text-green-600 dark:text-green-400'
                                }`}
                              />
                              <span className="text-xs font-medium text-foreground">
                                {device.battery}%
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Signal Strength (for MQTT devices) */}
                        {device.signalStrength !== undefined && (
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Signal</span>
                            <span className="text-xs font-medium text-foreground">
                              {device.signalStrength} dBm
                            </span>
                          </div>
                        )}

                        {/* Last Seen */}
                        {device.lastSeen && (
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Last Seen</span>
                            <span className="text-xs font-medium text-foreground">
                              {new Date(device.lastSeen).toLocaleTimeString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border p-8 text-center">
                <Wifi className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <div className="mt-4 text-sm font-medium text-foreground">No devices found</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Devices will appear here when they connect
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
