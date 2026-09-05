import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { universities } from '@/data/universities';
import { products } from '@/data/products';

export default function UniversityProducts() {
  const { universityId, yearId } = useParams();

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

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to universities
          </Link>
        </div>
      </main>
    );
  }

  /*
   * We are not inventing which products belong to which university/year.
   * Until verified package data is added, this page safely shows
   * that the package is not yet available.
   */

  const yearName = yearId
    ? yearId
        .replace(`${university.id}-`, '')
        .replace(/-/g, ' ')
    : 'Package';

  const packageProducts = products.filter(() => false);

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Link
          to={`/university/${university.id}`}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {university.name}
        </Link>

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {university.name}
          </p>

          <h1
            className="text-4xl font-bold capitalize text-foreground md:text-5xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {yearName}
          </h1>
        </div>

        {packageProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {packageProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-4 aspect-square w-full rounded-xl object-contain"
                  />
                )}

                <h2 className="font-semibold text-foreground">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {product.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-primary">
                  Price on request
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center md:p-16">
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Products will be added here
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Verified products for this package have not been connected yet.
              No products or prices have been invented.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
