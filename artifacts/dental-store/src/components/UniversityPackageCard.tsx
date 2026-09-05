import { Package, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { UniversityPackage } from '@/data/packages';

interface UniversityPackageCardProps {
  packageData: UniversityPackage;
}

export function UniversityPackageCard({
  packageData,
}: UniversityPackageCardProps) {
  return (
    <Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-6">

        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>

          {packageData.itemCount && (
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {packageData.itemCount} items
            </span>
          )}
        </div>

        {packageData.level && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            {packageData.level}
          </p>
        )}

        <h3
          className="text-lg font-bold leading-tight text-foreground"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {packageData.name}
        </h3>

        <div className="mt-auto pt-5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              document
                .getElementById(`package-${packageData.id}`)
                ?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
            }}
          >
            View package
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </CardContent>
    </Card>
  );
}
