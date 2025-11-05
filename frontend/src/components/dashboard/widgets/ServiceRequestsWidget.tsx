import { useActiveServiceRequests } from '../../../hooks/useDashboard';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/Card';
import { Bell, Clock, AlertCircle } from 'lucide-react';

export function ServiceRequestsWidget() {
  const { data: requests, isLoading, error } = useActiveServiceRequests();

  const activeCount = requests?.length || 0;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <CardTitle>Service Requests</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 w-3/4 rounded bg-muted"></div>
            <div className="h-4 w-1/2 rounded bg-muted"></div>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Failed to load requests</span>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Stats */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{activeCount}</span>
              <span className="text-sm text-muted-foreground">active</span>
            </div>

            {/* Requests List */}
            {requests && requests.length > 0 ? (
              <div className="space-y-2">
                {requests.slice(0, 3).map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between rounded-md border border-border bg-muted/50 p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">
                          {request.guestName}
                        </span>
                        {request.priority === 'vip' && (
                          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                            VIP
                          </span>
                        )}
                        {request.priority === 'master' && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                            MASTER
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{request.locationName}</span>
                      </div>
                    </div>
                    <div
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        request.status === 'pending'
                          ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      }`}
                    >
                      {request.status === 'pending' ? 'Pending' : 'Serving'}
                    </div>
                  </div>
                ))}
                {requests.length > 3 && (
                  <div className="text-center text-xs text-muted-foreground">
                    +{requests.length - 3} more requests
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                No active service requests
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
