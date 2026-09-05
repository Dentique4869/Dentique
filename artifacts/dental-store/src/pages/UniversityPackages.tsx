import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { universities } from '@/data/universities';

export default function UniversityPackages() {
  const { universityId } = useParams();

  const university = universities.find(
    (item) => item.id === universityId
  );

  if (!university) {
    return (
      <main className="min-h-screen bg-background px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            University not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            The university you are looking for could not be found.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to universities
          </Link>
        </div>
      </main>
    );
  }

  /*
   * Package/year information will come from the verified
   * university package data.
   *
   * We intentionally do not invent years or packages here.
   */
  const packages =
    university.id === 'sinai'
      ? [
          {
            id: 'sinai-kantara',
            name: 'Kantara Campus',
          },
          {
            id: 'sinai-arish',
            name: 'Arish Campus',
          },
        ]
      : [];

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to universities
        </Link>

        <div className="mb-12">
          <div className="mb-6 flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-white p-4 shadow-sm">
              <img
                src={university.logo}
                alt={`${university.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                University
              </p>

              <h1
                className="text-3xl font-bold text-foreground md:text-5xl"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {university.name}
              </h1>

              {university.shortName && (
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {university.shortName}
                </p>
              )}
            </div>
          </div>

          <p className="max-w-2xl text-muted-foreground">
            Choose an available package or campus to continue.
          </p>
        </div>

        {packages.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  Campus
                </p>

                <h2
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.name}
                </h2>

                <Link
                  to={`/university/${university.id}/${item.id}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center md:p-16">
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Packages coming next
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Verified package information for this university has not been
              added yet. We will only display package information that has
              been verified.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
