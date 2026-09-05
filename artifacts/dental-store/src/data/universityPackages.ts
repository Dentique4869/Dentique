export interface UniversityPackage {
  id: string;
  universityId: string;
  name: string;
  description?: string;
  productIds: string[];
}

export const universityPackages: UniversityPackage[] = [];

export function getUniversityPackages(
  universityId: string,
): UniversityPackage[] {
  return universityPackages.filter(
    (item) => item.universityId === universityId,
  );
}

export function getUniversityPackage(
  packageId: string,
): UniversityPackage | undefined {
  return universityPackages.find(
    (item) => item.id === packageId,
  );
}
