import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import type { University } from '@/data/universities';

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({
  university,
}: UniversityCardProps) {
  return (
    <Card
      className="group h-full overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
      data-testid={`card-university-${university.id}`}
    >
      <CardContent className="flex h-full flex-col items-center p-6 text-center">
        <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-2xl border border-border bg-white p-4 shadow-sm">
          <img
            src={university.logo}
            alt={`${university.name} logo`}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <div className="flex flex-1 flex-col items-center">
          <h3
            className="text-lg font-bold leading-tight text-foreground"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {university.name}
          </h3>

          {university.shortName && (
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {university.shortName}
            </p>
          )}

          {university.campuses &&
            university.campuses.length > 0 && (
              <p className="mt-2 text-xs text-muted-foreground">
                {university.campuses.length} campuses
              </p>
            )}

          <Link
            to={`/university/${university.id}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View packages

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
