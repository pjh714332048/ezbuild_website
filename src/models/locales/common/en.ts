export const EN_COMMON = {
  pageTitle: 'ezBuild.ai | Intelligent Design & Modular Construction',
  questionNodes: {
    function: 'What type of building would you like to design?',
    bnbSize: 'What floor area do you have in mind?',
    bnbRooms: 'How many guest rooms do you need?',
    houseSize: 'What floor area do you have in mind?',
    houseSmallPeople: 'How many people will live here?',
    houseMidPeople: 'How many people will live here?',
  },
  questionOptions: {
    culturalTourismHomestay: 'Tourism accommodation',
    selfBuiltHouse: 'Private home',
    eightRooms: '8 guest rooms',
    twelveRooms: '12 guest rooms',
    oneToTwoPeople: '1–2 people',
    threeToFourPeople: '3–4 people',
  },
  questionResults: {
    bnb2008: {
      title: 'Architectural style · Tourism accommodation · 200 m² or more · 8 guest rooms',
      description:
        'Modern minimalist or Neo-Chinese style recommended to suit the compact layout of 8 guest rooms.',
    },
    bnb20012: {
      title: 'Architectural style · Tourism accommodation · 200 m² or more · 12 guest rooms',
      description:
        'Industrial or light luxury style recommended for large-scale 12-room configurations.',
    },
    houseSmall12: {
      title: 'Architectural style · Private home · Less than 100 m² · 1–2 people',
      description: 'Loft or Scandinavian style recommended to make the most of compact spaces.',
    },
    houseSmall34: {
      title: 'Architectural style · Private home · Less than 100 m² · 3–4 people',
      description:
        'Japanese Zen style recommended, with efficient storage solutions for multi-member households.',
    },
    houseMid12: {
      title: 'Architectural style · Private home · 100–200 m² · 1–2 people',
      description:
        'Modern minimalist or American style recommended for flexible layouts in mid-size spaces.',
    },
    houseMid34: {
      title: 'Architectural style · Private home · 100–200 m² · 3–4 people',
      description:
        'Neo-Chinese or pastoral style recommended, ideal for larger households in mid-size spaces.',
    },
  },
} as const;
