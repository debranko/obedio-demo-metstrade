import { useOnDutyCrew } from '../../../hooks/useDashboard';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/Card';
import { UserCheck, AlertCircle, User } from 'lucide-react';

export function CrewActivityWidget() {
  const { data: crewMembers, isLoading, error } = useOnDutyCrew();

  const onDutyCount = crewMembers?.length || 0;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
            <UserCheck className="h-5 w-5 text-secondary" />
          </div>
          <CardTitle>Crew Activity</CardTitle>
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
            <span className="text-sm">Failed to load crew</span>
          </div>
        ) : (
          <div className="space-y-4">
            {/* On Duty Count */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{onDutyCount}</span>
              <span className="text-sm text-muted-foreground">on duty</span>
            </div>

            {/* Crew Members List */}
            {crewMembers && crewMembers.length > 0 ? (
              <div className="space-y-2">
                {crewMembers.slice(0, 5).map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-3 rounded-md border border-border bg-muted/50 p-3 transition-colors hover:bg-muted"
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-sm font-medium text-secondary">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-foreground text-sm">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.position}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-muted-foreground">On Duty</span>
                    </div>
                  </div>
                ))}
                {crewMembers.length > 5 && (
                  <div className="text-center text-xs text-muted-foreground">
                    +{crewMembers.length - 5} more crew members
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                <User className="mx-auto h-8 w-8 opacity-50" />
                <div className="mt-2">No crew members on duty</div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
