export interface Card {
    order: number,
    point:number;
    name: string;
    image: string;
    color?: string;
    text?:string
    index?:number
  }
  
  export const CARDS: Card[] = [
    { order:1, point: 1, name: 'clubs-01', image: '/cards-image/clubs/clubs-01.svg.png', color: 'text-green-700', text: '1' },
    { order:2, point: 2, name: 'clubs-02', image: '/cards-image/clubs/clubs-02.svg.png', color: 'text-green-700', text: '2' },
    { order:3, point: 3, name: 'clubs-03', image: '/cards-image/clubs/clubs-03.svg.png', color: 'text-green-700', text: '3'  },
    { order:4, point: 4, name: 'clubs-04', image: '/cards-image/clubs/clubs-04.svg.png', color: 'text-green-700', text: '4'  },
    { order:5, point: 5, name: 'clubs-05', image: '/cards-image/clubs/clubs-05.svg.png', color: 'text-green-700', text: '5'  },
    { order:6, point: 6, name: 'clubs-06', image: '/cards-image/clubs/clubs-06.svg.png', color: 'text-green-700', text: '6'  },
    { order:7, point: 7, name: 'clubs-07', image: '/cards-image/clubs/clubs-07.svg.png', color: 'text-green-700', text: '7'  },
    { order:8, point: 8, name: 'clubs-08', image: '/cards-image/clubs/clubs-08.svg.png', color: 'text-green-700', text: '8'  },
    { order:9, point: 9, name: 'clubs-09', image: '/cards-image/clubs/clubs-09.svg.png', color: 'text-green-700', text: '9'  },
    { order:10, point: 10, name: 'clubs-0A', image: '/cards-image/clubs/clubs-0A.svg.png', color: 'text-green-700', text: '2(10)'},
    { order:11, point: 11, name: 'clubs-0B', image: '/cards-image/clubs/clubs-0B.svg.png', color: 'text-green-700', text: '3(11)'},
    { order:12, point: 12, name: 'clubs-10', image: '/cards-image/clubs/clubs-10.svg.png', color: 'text-green-700', text: '10(12)'  },
    { order:13, point: 10, name: 'clubs-J', image: '/cards-image/clubs/Clubs-J.svg.png', color: 'text-green-700', text: 'J'  },
    { order:14, point: 10, name: 'clubs-Q', image: '/cards-image/clubs/Clubs-Q.svg.png', color: 'text-green-700', text: 'Q'  },
    { order:15, point: 10, name: 'clubs-K', image: '/cards-image/clubs/Clubs-K.svg.png', color: 'text-green-700', text: 'K'  },
    { order:16, point: 10, name: 'clubs-C', image: '/cards-image/clubs/Clubs-C.svg.png', color: 'text-green-700', text: 'C'  },

    { order:1, point: 1, name: 'diamonds-01', image: '/cards-image/diamonds/diamonds-01.svg.png',color: 'text-yellow-600' , text: '1'  },
    { order:2, point: 2, name: 'diamonds-02', image: '/cards-image/diamonds/diamonds-02.svg.png',color: 'text-yellow-600' , text: '2'  },
    { order:3, point: 3, name: 'diamonds-03', image: '/cards-image/diamonds/diamonds-03.svg.png',color: 'text-yellow-600' , text: '3'  },
    { order:4, point: 4, name: 'diamonds-04', image: '/cards-image/diamonds/diamonds-04.svg.png',color: 'text-yellow-600' , text: '4'  },
    { order:5, point: 5, name: 'diamonds-05', image: '/cards-image/diamonds/diamonds-05.svg.png',color: 'text-yellow-600' , text: '5'  },
    { order:6, point: 6, name: 'diamonds-06', image: '/cards-image/diamonds/diamonds-06.svg.png',color: 'text-yellow-600' , text: '6'  },
    { order:7, point: 7, name: 'diamonds-07', image: '/cards-image/diamonds/diamonds-07.svg.png',color: 'text-yellow-600' , text: '7'  },
    { order:8, point: 8, name: 'diamonds-08', image: '/cards-image/diamonds/diamonds-08.svg.png',color: 'text-yellow-600' , text: '8'  },
    { order:9, point: 9, name: 'diamonds-09', image: '/cards-image/diamonds/diamonds-09.svg.png',color: 'text-yellow-600' , text: '9'  },
    { order:10, point: 10, name: 'diamonds-0A', image: '/cards-image/diamonds/diamonds-0A.svg.png',color: 'text-yellow-600' , text: '2(10)' },
    { order:11, point: 11, name: 'diamonds-0B', image: '/cards-image/diamonds/diamonds-0B.svg.png',color: 'text-yellow-600' , text: '3(11)'  },
    { order:12, point: 12, name: 'diamonds-10', image: '/cards-image/diamonds/diamonds-10.svg.png',color: 'text-yellow-600' , text: '10(12)'  },
    { order:13, point: 10, name: 'diamonds-J', image: '/cards-image/diamonds/Diamonds-J.svg.png',color: 'text-yellow-600' , text: 'J'  },
    { order:14, point: 10, name: 'diamonds-Q', image: '/cards-image/diamonds/Diamonds-Q.svg.png',color: 'text-yellow-600' , text: 'Q'  },
    { order:15, point: 10, name: 'diamonds-K', image: '/cards-image/diamonds/Diamonds-K.svg.png',color: 'text-yellow-600' , text: 'K'  },
    { order:16, point: 10, name: 'diamonds-C', image: '/cards-image/diamonds/Diamonds-C.svg.png',color: 'text-yellow-600' , text: 'C'  },

    { order:1, point: 1, name: 'hearts-01', image: '/cards-image/Hearts/hearts-01.svg.png',color: 'text-red-600' , text: '1'   },
    { order:2, point: 2, name: 'hearts-02', image: '/cards-image/Hearts/hearts-02.svg.png',color: 'text-red-600' , text: '2'   },
    { order:3, point: 3, name: 'hearts-03', image: '/cards-image/Hearts/hearts-03.svg.png',color: 'text-red-600' , text: '3'   },
    { order:4, point: 4, name: 'hearts-04', image: '/cards-image/Hearts/hearts-04.svg.png',color: 'text-red-600' , text: '4'   },
    { order:5, point: 5, name: 'hearts-05', image: '/cards-image/Hearts/hearts-05.svg.png',color: 'text-red-600' , text: '5'   },
    { order:6, point: 6, name: 'hearts-06', image: '/cards-image/Hearts/hearts-06.svg.png',color: 'text-red-600' , text: '6'   },
    { order:7, point: 7, name: 'hearts-07', image: '/cards-image/Hearts/hearts-07.svg.png',color: 'text-red-600' , text: '7'   },
    { order:8, point: 8, name: 'hearts-08', image: '/cards-image/Hearts/hearts-08.svg.png',color: 'text-red-600' , text: '8'   },
    { order:9, point: 9, name: 'hearts-09', image: '/cards-image/Hearts/hearts-09.svg.png',color: 'text-red-600' , text: '9'   },
    { order:10, point: 10, name: 'hearts-0A', image: '/cards-image/Hearts/hearts-0A.svg.png',color: 'text-red-600' , text: '2(10)'   },
    { order:11, point: 11, name: 'hearts-0B', image: '/cards-image/Hearts/hearts-0B.svg.png',color: 'text-red-600' , text: '3(11)'   },
    { order:12, point: 12, name: 'hearts-10', image: '/cards-image/Hearts/hearts-10.svg.png',color: 'text-red-600' , text: '10(12)'   },
    { order:13, point: 10, name: 'hearts-J', image: '/cards-image/Hearts/Hearts-J.svg.png',color: 'text-red-600' , text: 'J'   },
    { order:14, point: 10, name: 'hearts-Q', image: '/cards-image/Hearts/Hearts-Q.svg.png' ,color: 'text-red-600' , text: 'Q'  },
    { order:15, point: 10, name: 'hearts-K', image: '/cards-image/Hearts/Hearts-K.svg.png',color: 'text-red-600' , text: 'K'   },
    { order:16, point: 10, name: 'hearts-C', image: '/cards-image/Hearts/Hearts-C.svg.png',color: 'text-red-600' , text: 'C'   },

    { order:1, point: 1, name: 'spades-01', image: '/cards-image/spades/spades-01.svg.png',color: 'text-black' , text: '1' },
    { order:2, point: 2, name: 'spades-02', image: '/cards-image/spades/spades-02.svg.png',color: 'text-black' , text: '2' },
    { order:3, point: 3, name: 'spades-03', image: '/cards-image/spades/spades-03.svg.png',color: 'text-black' , text: '3' },
    { order:4, point: 4, name: 'spades-04', image: '/cards-image/spades/spades-04.svg.png',color: 'text-black' , text: '4' },
    { order:5, point: 5, name: 'spades-05', image: '/cards-image/spades/spades-05.svg.png',color: 'text-black' , text: '5'  },
    { order:6, point: 6, name: 'spades-06', image: '/cards-image/spades/spades-06.svg.png',color: 'text-black' , text: '6'  },
    { order:7, point: 7, name: 'spades-07', image: '/cards-image/spades/spades-07.svg.png',color: 'text-black' , text: '7'  },
    { order:8, point: 8, name: 'spades-08', image: '/cards-image/spades/spades-08.svg.png',color: 'text-black' , text: '8'  },
    { order:9, point: 9, name: 'spades-09', image: '/cards-image/spades/spades-09.svg.png',color: 'text-black' , text: '9'  },
    { order:10, point: 10, name: 'spades-0A', image: '/cards-image/spades/spades-0A.svg.png',color: 'text-black' , text: '2(10)' },
    { order:11, point: 11, name: 'spades-0B', image: '/cards-image/spades/spades-0B.svg.png',color: 'text-black' , text: '3(11)' },
    { order:12, point: 12, name: 'spades-10', image: '/cards-image/spades/spades-10.svg.png',color: 'text-black' , text: '10(12)'  },
    { order:13, point: 10, name: 'spades-J', image: '/cards-image/spades/Spades-J.svg.png',color: 'text-black' , text: 'J'  },
    { order:14, point: 10, name: 'spades-Q', image: '/cards-image/spades/Spades-Q.svg.png',color: 'text-black' , text: 'Q'  },
    { order:15, point: 10, name: 'spades-K', image: '/cards-image/spades/Spades-K.svg.png',color: 'text-black' , text: 'K'  },
    { order:16, point: 10, name: 'spades-C', image: '/cards-image/spades/Spades-C.svg.png',color: 'text-black' , text: 'C'  },

  ];