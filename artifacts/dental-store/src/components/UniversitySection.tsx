import { UniversityCard } from '@/components/UniversityCard';
import { universities } from '@/data/universities';

export function UniversitySection() {
  return (
    <section
      id="universities"
      className="scroll-mt-24 border-y border-border bg-background py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shop by university
          </p>

          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Find your university
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose your university to find the packages and products available
            for your program.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {universities.map((university) => (
            <div
              key={university.id}
              id={`university-${university.id}`}
              className="scroll-mt-28"
            >
              <UniversityCard university={university} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}            Choose your university to find the packages and products available
            for your program.
          </p>
        </div>

        {/* UNIVERSITIES */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {universities.map((university) => (
            <div key={university.id}>
              <div
                onClick={() => setSelectedUniversity(university.id)}
                className="cursor-pointer"
              >
                <UniversityCard university={university} />
              </div>
            </div>
          ))}
        </div>

        {/* PACKAGES */}
        {selectedUniversity && (
          <div className="mt-16">

            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  Available packages
                </p>

                <h3
                  className="text-2xl font-bold text-foreground md:text-3xl"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {
                    universities.find(
                      (university) =>
                        university.id === selectedUniversity,
                    )?.name
                  }
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedUniversity(null)}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                Close
              </button>
            </div>

            {selectedPackages.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {selectedPackages.map((packageData) => (
                  <div
                    key={packageData.id}
                    id={`package-${packageData.id}`}
                  >
                    <UniversityPackageCard
                      packageData={packageData}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <p className="text-muted-foreground">
                  Packages for this university will be added soon.
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
