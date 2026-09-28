export const EN_COMMON = {
  questionNodes: {
    function: 'What type of building would you like to design?',
    bnbSize: 'How large would you like the building to be?',
    bnbRooms: 'How many guest rooms do you need?',
    houseSize: 'What is your desired floor area?',
    houseSmallPeople: 'How many people will be using it?',
    houseMidPeople: 'Number of residents',
  },
  questionOptions: {
    culturalTourismHomestay: 'Cultural Tourism Homestay',
    selfBuiltHouse: 'Self-Built House',
    eightRooms: '8 Rooms',
    twelveRooms: '12 Rooms',
    oneToTwoPeople: '1–2 People',
    threeToFourPeople: '3–4 People',
  },
  questionResults: {
    bnb2008: {
      title: 'Architectural Style · Cultural Tourism Homestay · ≥200㎡ · 8 Rooms',
      description:
        'Modern minimalist or Neo-Chinese style recommended to suit the compact layout of 8 guest rooms.',
    },
    bnb20012: {
      title: 'Architectural Style · Cultural Tourism Homestay · ≥200㎡ · 12 Rooms',
      description:
        'Industrial or light luxury style recommended for large-scale 12-room configurations.',
    },
    houseSmall12: {
      title: 'Architectural Style · Self-Built House · <100㎡ · 1–2 People',
      description: 'Loft or Scandinavian style recommended to make the most of compact spaces.',
    },
    houseSmall34: {
      title: 'Architectural Style · Self-Built House · <100㎡ · 3–4 People',
      description:
        'Japanese Zen style recommended, with efficient storage solutions for multi-member households.',
    },
    houseMid12: {
      title: 'Architectural Style · Self-Built House · 100–200㎡ · 1–2 People',
      description:
        'Modern minimalist or American style recommended for flexible layouts in mid-size spaces.',
    },
    houseMid34: {
      title: 'Architectural Style · Self-Built House · 100–200㎡ · 3–4 People',
      description:
        'Neo-Chinese or pastoral style recommended, ideal for larger households in mid-size spaces.',
    },
  },
} as const;
