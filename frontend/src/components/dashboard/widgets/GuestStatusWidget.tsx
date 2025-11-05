import { useActiveGuests } from '../../../hooks/useDashboard';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/Card';
import { Users, Star, User, AlertCircle } from 'lucide-react';

export function GuestStatusWidget() {
  const { data: guests, isLoading, error } = useActiveGuests();

  const totalGuests = guests?.length || 0;
  const vipGuests = guests?.filter((g) => g.type === 'vip').length || 0;
  const masterGuests = guests?.filter((g) => g.type === 'master').length || 0;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <CardTitle>Guest Status</CardTitle>
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
            <span className="text-sm">Failed to load guests</span>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Total Guests */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{totalGuests}</span>
              <span className="text-sm text-muted-foreground">active guests</span>
            </div>

            {/* Guest Breakdown */}
            <div className="grid grid-cols-3 gap-3">
              {/* Master Guests */}
              <div className="rounded-md border border-border bg-muted/50 p-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Master</span>
                </div>
                <div className="mt-2 text-2xl font-bold text-foreground">{masterGuests}</div>
              </div>

              {/* VIP Guests */}
              <div className="rounded-md border border-border bg-muted/50 p-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span className="text-xs text-muted-foreground">VIP</span>
                </div>
                <div className="mt-2 text-2xl font-bold text-foreground">{vipGuests}</div>
              </div>

              {/* Regular Guests */}
              <div className="rounded-md border border-border bg-muted/50 p-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Regular</span>
                </div>
                <div className="mt-2 text-2xl font-bold text-foreground">
                  {totalGuests - vipGuests - masterGuests}
                </div>
              </div>
            </div>

            {/* Guest List Preview */}
            {guests && guests.length > 0 ? (
              <div className="space-y-2">
                <div className="text-xs font-medium text-muted-foreground">Recent Guests</div>
                {guests.slice(0, 3).map((guest) => (
                  <div
                    key={guest.id}
                    className="flex items-center gap-3 rounded-md border border-border bg-muted/50 p-2 transition-colors hover:bg-muted"
                  >
                    {guest.photo ? (
                      <img
                        src={guest.photo}
                        alt={`${guest.firstName} ${guest.lastName}`}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {guest.firstName[0]}
                        {guest.lastName[0]}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-foreground text-sm">
                        {guest.firstName} {guest.lastName}
                      </div>
                      {guest.locationName && (
                        <div className="text-xs text-muted-foreground">
                          {guest.locationName}
                        </div>
                      )}
                    </div>
                    {guest.type !== 'regular' && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          guest.type === 'master'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        {guest.type.toUpperCase()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                No active guests
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
