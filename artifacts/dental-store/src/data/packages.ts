export interface UniversityPackage {
  id: string;
  universityId: string;
  level: string;
  name: string;
  itemCount?: number;
  description?: string;
  productNames: string[];
}

export const universityPackages: UniversityPackage[] = [
  // ─────────────────────────────────────────────
  // TANTA UNIVERSITY
  // ─────────────────────────────────────────────

  {
    id: 'tanta-level-3-preclinical',
    universityId: 'tanta',
    level: 'Level 3',
    name: 'Level 3 Preclinical Tanta Package',
    itemCount: 39,
    productNames: [],
  },

  {
    id: 'tanta-level-4-clinical',
    universityId: 'tanta',
    level: 'Level 4',
    name: 'Level 4 Clinical Tanta',
    itemCount: 57,
    productNames: [],
  },

  // ─────────────────────────────────────────────
  // KAFRELSHEIKH
  // ─────────────────────────────────────────────

  {
    id: 'kafrelsheikh-level-1',
    universityId: 'kafrelsheikh',
    level: 'Level 1',
    name: 'Level 1 Kafr Elsheikh',
    productNames: [],
  },

  {
    id: 'kafrelsheikh-level-2',
    universityId: 'kafrelsheikh',
    level: 'Level 2',
    name: 'Level 2 Kafr Elsheikh',
    productNames: [],
  },

  {
    id: 'kafrelsheikh-level-3',
    universityId: 'kafrelsheikh',
    level: 'Level 3',
    name: 'Level 3 Kafr Elsheikh',
    productNames: [],
  },

  {
    id: 'kafrelsheikh-level-4',
    universityId: 'kafrelsheikh',
    level: 'Level 4',
    name: 'Level 4 Kafr Elsheikh',
    productNames: [],
  },

  // ─────────────────────────────────────────────
  // AL SALAM UNIVERSITY
  // ─────────────────────────────────────────────

  {
    id: 'alsalam-level-1',
    universityId: 'al-salam',
    level: 'Level 1',
    name: 'Level 1',
    productNames: [],
  },

  {
    id: 'alsalam-level-3-pink',
    universityId: 'al-salam',
    level: 'Level 3',
    name: 'The Pink Package',
    itemCount: 4,
    productNames: [],
  },

  {
    id: 'alsalam-level-3-full-year',
    universityId: 'al-salam',
    level: 'Level 3',
    name: 'SUE Full Year Package',
    itemCount: 71,
    productNames: [],
  },

  {
    id: 'alsalam-level-3-first-semester',
    universityId: 'al-salam',
    level: 'Level 3',
    name: 'SUE First Semester Package',
    itemCount: 33,
    productNames: [],
  },

  {
    id: 'alsalam-level-3-second-semester',
    universityId: 'al-salam',
    level: 'Level 3',
    name: 'SUE Second Semester Package',
    itemCount: 38,
    productNames: [],
  },

  {
    id: 'alsalam-level-4',
    universityId: 'al-salam',
    level: 'Level 4',
    name: 'SUE Full Year Level 4 Package',
    itemCount: 62,
    productNames: [],
  },

  {
    id: 'alsalam-level-5',
    universityId: 'al-salam',
    level: 'Level 5',
    name: 'Level 5',
    productNames: [],
  },

  // ─────────────────────────────────────────────
  // DELTA
  // ─────────────────────────────────────────────

  {
    id: 'delta',
    universityId: 'delta',
    level: '',
    name: 'Packages coming soon',
    productNames: [],
  },

  // ─────────────────────────────────────────────
  // AL MENOUFIA NATIONAL UNIVERSITY
  // ─────────────────────────────────────────────

  {
    id: 'mnu-level-1',
    universityId: 'menoufia-national',
    level: 'Level 1',
    name: 'Level 1 Start Up',
    productNames: [],
  },

  {
    id: 'mnu-level-2-first-semester',
    universityId: 'menoufia-national',
    level: 'Level 2',
    name: 'Level 2 Preclinical First Semester Package MNU',
    itemCount: 137,
    productNames: [],
  },

  {
    id: 'mnu-level-2-full-year',
    universityId: 'menoufia-national',
    level: 'Level 2',
    name: 'Preclinical Full Year Package MNU',
    itemCount: 172,
    productNames: [],
  },

  {
    id: 'mnu-level-3-full-year',
    universityId: 'menoufia-national',
    level: 'Level 3',
    name: 'Level 3 Full Year Package MNU',
    itemCount: 43,
    productNames: [],
  },

  {
    id: 'mnu-level-4',
    universityId: 'menoufia-national',
    level: 'Level 4',
    name: 'Level 4',
    productNames: [],
  },

  // ─────────────────────────────────────────────
  // AL-AZHAR UNIVERSITY — GIRLS
  // ─────────────────────────────────────────────

  {
    id: 'azhar-girls-level-1',
    universityId: 'azhar-girls',
    level: 'Level 1',
    name: 'Level 1 Al-Azhar University',
    itemCount: 109,
    productNames: [],
  },

  {
    id: 'azhar-girls-level-2',
    universityId: 'azhar-girls',
    level: 'Level 2',
    name: 'Level 2 Al-Azhar University',
    itemCount: 28,
    productNames: [],
  },
];

export const getPackagesByUniversity = (universityId: string) =>
  universityPackages.filter(
    (pkg) => pkg.universityId === universityId,
  );
