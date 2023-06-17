// shoulderMarkDB.positions contains all possible combinations of employee's position
// each position consist of a positionPart and unitStructurePart connected with "_"
// shoulderMarkDB.img refers to imgs uploaded to server's public folder
// shoulderMarkDB.rank might be use in the future to sort by rank
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
      'gł. księgowy_DGLP',
      'gł. księgowy_RDLP',
      'główna księgowa_DGLP',
      'główna księgowa_RDLP',
      'gł. księgowa_DGLP',
      'gł. księgowa_RDLP',
      'główny inspektor_DGLP',
      'główny inspektor_RDLP',
      'gł. inspektor_DGLP',
      'gł. inspektor_RDLP',
      'glówny księgowy_DGLP',
      'glówny księgowy_RDLP',
      'gl. księgowy_DGLP',
      'gl. księgowy_RDLP',
      'glówna księgowa_DGLP',
      'glówna księgowa_RDLP',
      'gl. księgowa_DGLP',
      'gl. księgowa_RDLP',
      'glówny inspektor_DGLP',
      'glówny inspektor_RDLP',
      'gl. inspektor_DGLP',
      'gl. inspektor_RDLP',
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
      'kierujący_DGLP',
      'kierujący_RDLP',
      'kierujący_ZOL',
      'kierująca_DGLP',
      'kierująca_RDLP',
      'kierująca_ZOL',
      'główny specjalista sl_ZOL',
      'główny specjalista służby leśnej_ZOL',
      'główny specjalista sl_DGLP',
      'główny specjalista służby leśnej_DGLP',
      'główny specjalista sl_RDLP',
      'główny specjalista służby leśnej_RDLP',
      'główny specjalista sl_DISTRICT',
      'główny specjalista służby leśnej_DISTRICT',
      'główny sp. sl_ZOL',
      'główny sp. służby leśnej_ZOL',
      'główny sp. sl_DGLP',
      'główny sp. służby leśnej_DGLP',
      'główny sp. sl_RDLP',
      'główny sp. służby leśnej_RDLP',
      'główny sp. sl_DISTRICT',
      'główny sp. służby leśnej_DISTRICT',
      'gł. specjalista sl_ZOL',
      'gł. specjalista służby leśnej_ZOL',
      'gł. specjalista sl_DGLP',
      'gł. specjalista służby leśnej_DGLP',
      'gł. specjalista sl_RDLP',
      'gł. specjalista służby leśnej_RDLP',
      'gł. specjalista sl_DISTRICT',
      'gł. specjalista służby leśnej_DISTRICT',
      'gł. sp. sl_ZOL',
      'gł. sp. służby leśnej_ZOL',
      'gł. sp. sl_DGLP',
      'gł. sp. służby leśnej_DGLP',
      'gł. sp. sl_RDLP',
      'gł. sp. służby leśnej_RDLP',
      'gł. sp. sl_DISTRICT',
      'gł. sp. służby leśnej_DISTRICT',
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
      'p.o. nadleśniczy_DISTRICT',
      'p.o. nadleśniczego_DISTRICT',
      'pełniący oobowiązki nadleśniczy_DISTRICT',
      'pełniący oobowiązki nadleśniczego_DISTRICT',
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
      'starszy sp. służby leśnej_DGLP',
      'starszy sp. służby leśnej_RDLP',
      'starszy specjalista sl_DGLP',
      'starszy specjalista sl_RDLP',
      'starszy sp. sl_DGLP',
      'starszy sp. sl_RDLP',
      'st. specjalista służby leśnej_DGLP',
      'st. specjalista służby leśnej_RDLP',
      'st. sp. służby leśnej_DGLP',
      'st. sp. służby leśnej_RDLP',
      'st. specjalista sl_DGLP',
      'st. specjalista sl_RDLP',
      'st. sp. sl_DGLP',
      'st. sp. sl_RDLP',
      'starszy spec. służby leśnej_DGLP',
      'starszy spec. służby leśnej_RDLP',
      'starszy spec. sl_DGLP',
      'starszy spec. sl_RDLP',
      'st. spec. służby leśnej_DGLP',
      'st. spec. służby leśnej_RDLP',
      'st. spec. sl_DGLP',
      'st. spec. sl_RDLP',
      'zastępca nadleśniczego_DISTRICT',
      'zastepca nadleśniczego_DISTRICT',
      'zastępca nadlesniczego_DISTRICT',
      'zastepca nadlesniczego_DISTRICT',
      'z-ca nadleśniczego_DISTRICT',
      'zastępca dyrektora_GENERALPLANT',
      'zastępca dyrektora_REGIONALPLANT',
      'z-ca dyrektora_GENERALPLANT',
      'z-ca dyrektora_REGIONALPLANT',
      'główny księgowy_DISTRICT',
      'główna księgowa_DISTRICT',
      'glówny księgowy_DISTRICT',
      'glówna księgowa_DISTRICT',
      'głowny księgowy_DISTRICT',
      'głowna księgowa_DISTRICT',
      'glowny księgowy_DISTRICT',
      'glowna księgowa_DISTRICT',
      'gł. księgowy_DISTRICT',
      'gł. księgowa_DISTRICT',
      'gl. księgowy_DISTRICT',
      'gl. księgowa_DISTRICT',
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
      'sp. służby leśnej_DGLP',
      'sp. służby leśnej_RDLP',
      'specjalista sl_DGLP',
      'specjalista sl_RDLP',
      'sp. sl_DGLP',
      'sp. sl_RDLP',
      'spec. służby leśnej_DGLP',
      'spec. służby leśnej_RDLP',
      'spec. sl_DGLP',
      'spec. sl_RDLP',
      'inżynier nadzoru_DISTRICT',
      'inż. nadzoru_DISTRICT',
    ],
    img: '1rectangles3leaves_top_unregular.png',
    rank: 6,
  },
  {
    positions: [
      'starszy specjalista służby leśnej_DISTRICT',
      'starszy specjalista sl_DISTRICT',
      'starszy sp. służby leśnej_DISTRICT',
      'starszy sp. sl_DISTRICT',
      'st. specjalista służby leśnej_DISTRICT',
      'st. specjalista sl_DISTRICT',
      'st. sp. służby leśnej_DISTRICT',
      'st. sp. sl_DISTRICT',
      'starszy spec. służby leśnej_DISTRICT',
      'starszy spec. sl_DISTRICT',
      'st. spec. służby leśnej_DISTRICT',
      'st. spec. sl_DISTRICT',
      'sekretarz_DISTRICT',
      'leśniczy_DISTRICT',
      'starszy strażnik leśny_DISTRICT',
      'st. strażnik leśny_DISTRICT',
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
      'sp. służby leśnej_DISTRICT',
      'sp. sl_DISTRICT',
      'podleśniczy_DISTRICT',
      'strażnik leśny_DISTRICT',
      'strażnik straży leśnej_DISTRICT',
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

// the getShoulderMarkImg function is used to determine the employee's shoulder mark image
// it takes 3 arguments:
// downloadedPosition - a position scrapped from the site
// downloadedName - a name scrapped from the site
// unit - current unit's structure (i.e. RDLP, DISTRICT) taken from the database
// it then iterates trough every shoulderMarkDB object, and further trough all of it's positions
// then it splits the position string into two parts: positionPart and unitStructurePart
// then it checks if the position scrapped from the site contains all the words included in shoulderMarkDB positions AND if the unit structures are the same
// it returns the assaigned image when it find a match
// if it fails - there is another loop that does the same check for name scrapped from the site (rarely the name string contains the poistion)
// if it can't assign the image it will take the image from the very last element of the array - which contains generic image for employees outside the Forest Service
const getShoulderMarkImg = (
  downloadedPosition = '',
  downloadedName = '',
  unit
) => {
  for (let shoulderMark of shoulderMarkDB) {
    for (let position of shoulderMark.positions) {
      let [positionPart, unitStructurePart] = position.split('_');
      if (
        positionPart
          .split(' ')
          .every((word) => downloadedPosition.toLowerCase().includes(word)) &&
        unit === unitStructurePart
      ) {
        return { shoulderMark: shoulderMark.img, rank: shoulderMark.rank };
      }
    }
    // the reason for additional loop: it's very rare for position to be included in the name, to speed up the process it should be checked only if the first loop fails
    for (let position of shoulderMark.positions) {
      let [positionPart, unitStructurePart] = position.split('_');
      if (
        positionPart
          .split(' ')
          .every((word) => downloadedName.toLowerCase().includes(word)) &&
        unit === unitStructurePart
      ) {
        return { shoulderMark: shoulderMark.img, rank: shoulderMark.rank };
      }
    }
  }
  return {
    shoulderMark: shoulderMarkDB[shoulderMarkDB.length - 1].img,
    rank: shoulderMarkDB[shoulderMarkDB.length - 1].rank,
  };
};

// console.log(
//   getShoulderMarkImg(
//     'Wydział Organizacji i Kadr (DO)',
//     'Marzena Sobiech - Gł. Księgowa',
//     'RDLP'
//   )
// );
// console.log(getShoulderMarkImg('st. specjalista sl', 'DISTRICT'));
// console.log(getShoulderMarkImg('ZASTĘPCA NADLEŚNICZEGO', 'DISTRICT'));

module.exports = getShoulderMarkImg;
