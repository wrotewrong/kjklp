const shoulderMarkDB = [
  {
    positions: [
      'zastępca dyrektora_DGLP',
      'z-ca dyrektora_DGLP',
      'zastępca dyrektora_RDLP',
      'z-ca dyrektora_RDLP',
    ],
    img: '2rectangles3leaves_whole_unregular.png',
    rank: 2,
  },
  {
    positions: ['dyrektor_DGLP', 'dyrektor_RDLP'],
    img: '3rectangles3leaves_whole_unregular.png',
    rank: 1,
  },

  {
    positions: [
      'główny księgowy_DGLP',
      'główny księgowy_RDLP',
      'główna księgowa_DGLP',
      'główna księgowa_RDLP',
      'główny inspektor_DGLP',
      'główny inspektor_RDLP',
    ],
    img: '1rectangles3leaves_whole_unregular.png',
    rank: 3,
  },
  {
    positions: [
      'naczelnik_DGLP',
      'naczelnik_RDLP',
      'naczelnik_ZOL',
      'kierownik_DGLP',
      'kierownik_RDLP',
      'kierownik_ZOL',
      'główny specjalista sl_ZOL',
      'główny specjalista służby leśnej_ZOL',
      'główny specjalista sl_DGLP',
      'główny specjalista służby leśnej_DGLP',
      'główny specjalista sl_RDLP',
      'główny specjalista służby leśnej_RDLP',
      'główny specjalista sl_DISTRICT',
      'główny specjalista służby leśnej_DISTRICT',
      'gł. specjalista sl_ZOL',
      'gł. specjalista służby leśnej_ZOL',
      'gł. specjalista sl_DGLP',
      'gł. specjalista służby leśnej_DGLP',
      'gł. specjalista sl_RDLP',
      'gł. specjalista służby leśnej_RDLP',
      'gł. specjalista sl_DISTRICT',
      'gł. specjalista służby leśnej_DISTRICT',
      'główny spec. sl_ZOL',
      'główny spec. służby leśnej_ZOL',
      'główny spec. sl_DGLP',
      'główny spec. służby leśnej_DGLP',
      'główny spec. sl_RDLP',
      'główny spec. służby leśnej_RDLP',
      'główny spec. sl_DISTRICT',
      'główny spec. służby leśnej_DISTRICT',
      'gł. spec. sl_ZOL',
      'gł. spec. służby leśnej_ZOL',
      'gł. spec. sl_DGLP',
      'gł. spec. służby leśnej_DGLP',
      'gł. spec. sl_RDLP',
      'gł. spec. służby leśnej_RDLP',
      'gł. spec. sl_DISTRICT',
      'gł. spec. służby leśnej_DISTRICT',
      'nadleśniczy_DISTRICT',
    ],
    img: '3rectangles3leaves_top_unregular.png',
    rank: 4,
  },
  {
    positions: [
      'inspektor straży leśnej_DGLP',
      'inspektor sl_DGLP',
      'inspektor straży leśnej_RDLP',
      'inspektor sl_RDLP',
      'starszy specjalista służby leśnej_DGLP',
      'starszy specjalista służby leśnej_RDLP',
      'starszy specjalista sl_DGLP',
      'starszy specjalista sl_RDLP',
      'st. specjalista służby leśnej_DGLP',
      'st. specjalista służby leśnej_RDLP',
      'st. specjalista sl_DGLP',
      'st. specjalista sl_RDLP',
      'starszy spec. służby leśnej_DGLP',
      'starszy spec. służby leśnej_RDLP',
      'starszy spec. sl_DGLP',
      'starszy spec. sl_RDLP',
      'st. spec. służby leśnej_DGLP',
      'st. spec. służby leśnej_RDLP',
      'st. spec. sl_DGLP',
      'st. spec. sl_RDLP',
      'zastępca nadleśniczego_DISTRICT',
      'z-ca nadleśniczego_DISTRICT',
      'zastępca dyrektora_GENERALPLANT',
      'zastępca dyrektora_REGIONALPLANT',
      'z-ca dyrektora_GENERALPLANT',
      'z-ca dyrektora_REGIONALPLANT',
      'główny księgowy_DISTRICT',
      'główna księgowa_DISTRICT',
    ],
    img: '2rectangles3leaves_top_unregular.png',
    rank: 5,
  },
  {
    positions: ['dyrektor_GENERALPLANT', 'dyrektor_REGIONALPLANT'],
    img: '3rectangles3leaves_top_unregular.png',
    rank: 4,
  },
  {
    positions: [
      'specjalista służby leśnej_DGLP',
      'specjalista służby leśnej_RDLP',
      'specjalista sl_DGLP',
      'specjalista sl_RDLP',
      'spec. służby leśnej_DGLP',
      'spec. służby leśnej_RDLP',
      'spec. sl_DGLP',
      'spec. sl_RDLP',
      'inżynier nadzoru_DISTRICT',
    ],
    img: '1rectangles3leaves_top_unregular.png',
    rank: 6,
  },
  {
    positions: [
      'starszy specjalista służby leśnej_DISTRICT',
      'starszy specjalista sl_DISTRICT',
      'st. specjalista służby leśnej_DISTRICT',
      'st. specjalista sl_DISTRICT',
      'starszy spec. służby leśnej_DISTRICT',
      'starszy spec. sl_DISTRICT',
      'st. spec. służby leśnej_DISTRICT',
      'st. spec. sl_DISTRICT',
      'sekretarz_DISTRICT',
      'leśniczy_DISTRICT',
      'starszy strażnik leśny_DISTRICT',
      'komendant_DISTRICT',
    ],
    img: '3rectangles2leaves_whole_regular.png',
    rank: 7,
  },
  {
    positions: [
      'specjalista służby leśnej_DISTRICT',
      'specjalista sl_DISTRICT',
      'spec. służby leśnej_DISTRICT',
      'spec. sl_DISTRICT',
      'podleśniczy_DISTRICT',
      'strażnik leśny_DISTRICT',
    ],
    img: '2rectangles2leaves_whole_regular.png',
    rank: 8,
  },
  {
    positions: [],
    img: '2leaves_whole_regular_LP.svg',
    rank: 9,
  },
];

const getShoulderMarkImg = (downloadedPosition = '', unit) => {
  for (let shoulderMark of shoulderMarkDB) {
    for (let position of shoulderMark.positions) {
      let [positionPart, unitStructurePart] = position.split('_');
      if (
        positionPart
          .split(' ')
          .every((word) => downloadedPosition.toLowerCase().includes(word)) &&
        unit === unitStructurePart
      ) {
        return shoulderMark.img;
      }
    }
  }
  return shoulderMarkDB[shoulderMarkDB.length - 1].img;
};

// console.log(getShoulderMarkImg('p.o. Naczelnika Wydz', 'RDLP'));
// console.log(getShoulderMarkImg('st. specjalista sl', 'DISTRICT'));
// console.log(getShoulderMarkImg('ZASTĘPCA NADLEŚNICZEGO', 'DISTRICT'));

module.exports = getShoulderMarkImg;
