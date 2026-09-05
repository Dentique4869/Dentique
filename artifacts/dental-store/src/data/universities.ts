export interface University {
  id: string;
  name: string;
  shortName?: string;
  logo: string;
  campuses?: {
    id: string;
    name: string;
  }[];
}

export const universities: University[] = [
  {
    id: 'al-salam',
    name: 'Al Salam University',
    shortName: 'SUE',
    logo: '/universities/al-salam-university.png',
  },
  {
    id: 'zagazig',
    name: 'Zagazig University',
    shortName: 'ZU',
    logo: '/universities/zagazig-university.png',
  },
  {
    id: 'sinai',
    name: 'Sinai University',
    shortName: 'SU',
    logo: '/universities/sinai-university.png',
    campuses: [
      {
        id: 'kantara',
        name: 'Kantara Campus',
      },
      {
        id: 'arish',
        name: 'Arish Campus',
      },
    ],
  },
  {
    id: 'october-6',
    name: 'October 6 University',
    shortName: 'O6U',
    logo: '/universities/october-6-university.png',
  },
  {
    id: 'suez-canal',
    name: 'Suez Canal University',
    shortName: 'SCU',
    logo: '/universities/suez-canal-university.png',
  },
  {
    id: 'benha-national',
    name: 'Benha National University',
    shortName: 'BNU',
    logo: '/universities/benha-national-university.png',
  },
  {
    id: 'king-salman',
    name: 'King Salman International University',
    shortName: 'KSIU',
    logo: '/universities/king-salman-international-university.png',
  },
  {
    id: 'sphinx',
    name: 'Sphinx University',
    shortName: 'SPU',
    logo: '/universities/sphinx-university.png',
  },
  {
    id: 'south-valley',
    name: 'South Valley University',
    shortName: 'SVU',
    logo: '/universities/south-valley-university.png',
  },
];

export const getUniversityById = (id: string) =>
  universities.find((university) => university.id === id);        name: 'Arish Campus',
      },
    ],
  },
  {
    id: 'october-6',
    name: 'October 6 University',
    shortName: 'O6U',
    logo: '/universities/october-6-university.png',
  },
  {
    id: 'suez-canal',
    name: 'Suez Canal University',
    shortName: 'SCU',
    logo: '/universities/suez-canal-university.png',
  },
  {
    id: 'benha-national',
    name: 'Benha National University',
    shortName: 'BNU',
    logo: '/universities/benha-national-university.png',
  },
  {
    id: 'king-salman',
    name: 'King Salman International University',
    shortName: 'KSIU',
    logo: '/universities/king-salman-international-university.png',
  },
  {
    id: 'sphinx',
    name: 'Sphinx University',
    shortName: 'SPU',
    logo: '/universities/sphinx-university.png',
  },
  {
    id: 'south-valley',
    name: 'South Valley University',
    shortName: 'SVU',
    logo: '/universities/south-valley-university.png',
  },
];

export const getUniversityById = (id: string) =>
  universities.find((university) => university.id === id);
