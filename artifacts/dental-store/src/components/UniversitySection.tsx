import { universities } from '@/data/universities';
import { UniversityCard } from './UniversityCard';

export function UniversitySection() {
  return (
    <section
      id="universities"
      className="bg-background py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shop by university
          </p>

          <h2
            className="text-3xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Find your university
          </h2>

          <p className="mt-4 text-muted-foreground">
            Choose your university to see the available packages and
            products.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <UniversityCard
              key={university.id}
              university={university}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
