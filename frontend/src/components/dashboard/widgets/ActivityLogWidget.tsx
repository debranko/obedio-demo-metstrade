import { useActivityLog } from '../../../hooks/useDashboard';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/Card';
import { ScrollText, AlertCircle, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export function ActivityLogWidget() {
  const { data: activities, isLoading, error } = useActivityLog(10);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50">
            <ScrollText className="h-5 w-5 text-muted-foreground" />
          </div>
          <CardTitle>Recent Activity</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-12 rounded bg-muted"></div>
            <div className="h-12 rounded bg-muted"></div>
            <div className="h-12 rounded bg-muted"></div>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Failed to load activity</span>
          </div>
        ) : (
          <div>
            {activities && activities.length > 0 ? (
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="relative flex gap-3 rounded-md border border-border bg-muted/50 p-3 transition-colors hover:bg-muted"
                  >
                    {/* Timeline Dot */}
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <div className="w-px flex-1 bg-border"></div>
                    </div>

                    {/* Activity Content */}
                    <div className="flex-1 pb-2">
                      <div className="text-sm text-foreground">{activity.description}</div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        {activity.userName && (
                          <>
                            <span>{activity.userName}</span>
                            <span>•</span>
                          </>
                        )}
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {formatDistanceToNow(new Date(activity.createdAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border p-8 text-center">
                <ScrollText className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <div className="mt-4 text-sm font-medium text-foreground">No recent activity</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Activity will appear here as actions are performed
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
