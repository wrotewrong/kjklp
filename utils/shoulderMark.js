const shoulderMarkDB = [
  {
    names: ['dyrektor_DGLP', 'dyrektor_RDLP'],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/POL_patka_mund-le%C5%9Bnika_2017_nr08.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr08.svg.png',
    rank: 1,
  },
  {
    names: [
      'zastępca dyrektora_DGLP',
      'z-ca dyrektora_DGLP',
      'zastępca dyrektora_RDLP',
      'z-ca dyrektora_RDLP',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/POL_patka_mund-le%C5%9Bnika_2017_nr09.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr09.svg.png',
    rank: 2,
  },
  {
    names: [
      'główny księgowy_DGLP',
      'główny księgowy_RDLP',
      'główna księgowa_DGLP',
      'główna księgowa_RDLP',
      'główny inspektor_DGLP',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/POL_patka_mund-le%C5%9Bnika_2017_nr10.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr10.svg.png',
    rank: 3,
  },
  {
    names: [
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
      'nadleśniczy_DISTRICT',
      'dyrektor_GENERALPLANT',
      'dyrektor_REGIONALPLANT',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/POL_patka_mund-le%C5%9Bnika_2017_nr11.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr11.svg.png',
    rank: 4,
  },
  {
    names: [
      'inspektor straży leśnej_DGLP',
      'inspektor sl_DGLP',
      'starszy specjalista służby leśnej_DGLP',
      'starszy specjalista służby leśnej_RDLP',
      'starszy specjalista sl_DGLP',
      'starszy specjalista sl_RDLP',
      'zastępca nadleśniczego_DISTRICT',
      'z-ca nadleśniczego_DISTRICT',
      'zastępca dyrektora_GENERALPLANT',
      'zastępca dyrektora_REGIONALPLANT',
      'z-ca dyrektora_GENERALPLANT',
      'z-ca dyrektora_REGIONALPLANT',
      'główny księgowy_DISTRICT',
      'główna księgowa_DISTRICT',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/POL_patka_mund-le%C5%9Bnika_2017_nr12.svg/800px-POL_patka_mund-le%C5%9Bnika_2017_nr12.svg.png',
    rank: 5,
  },
  {
    names: [
      'specjalista służby leśnej_DGLP',
      'specjalista służby leśnej_RDLP',
      'specjalista sl_DGLP',
      'specjalista sl_RDLP',
      'inżynier nadzoru_DISTRICT',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/POL_patka_mund-le%C5%9Bnika_2017_nr13.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr13.svg.png',
    rank: 6,
  },
  {
    names: [
      'starszy specjalista służby leśnej_DISTRICT',
      'starszy specjalista sl_DISTRICT',
      'sekretarz_DISTRICT',
      'leśniczy_DISTRICT',
      'starszy strażnik leśny_DISTRICT',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/POL_patka_mund-le%C5%9Bnika_2017_nr14.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr14.svg.png',
    rank: 7,
  },
  {
    names: [
      'starszy specjalista służby leśnej_DISTRICT',
      'starszy specjalista sl_DISTRICT',
      'podleśniczy_DISTRICT',
      'strażnik leśny_DISTRICT',
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/POL_patka_mund-le%C5%9Bnika_2017_nr15.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr15.svg.png',
    rank: 8,
  },
  {
    names: [],
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/POL_patka_mund-le%C5%9Bnika_2017_nr17.svg/416px-POL_patka_mund-le%C5%9Bnika_2017_nr17.svg.png',
    rank: 9,
  },
];

const getShoulderMarkImg = (position, unit) => {
  for (let shoulderMark of shoulderMarkDB) {
    for (let nameInShoulderMark of shoulderMark.names) {
      if (
        position.toLowerCase().includes(nameInShoulderMark.split('_')[0]) &&
        unit === nameInShoulderMark.split('_')[1]
      ) {
        return shoulderMark.rank;
      }
    }
  }
  return shoulderMarkDB[shoulderMarkDB.length - 1].rank;
};

console.log(
  getShoulderMarkImg('z-ca nadleśniczego nadleśnictwa bełchatów', 'DISTRICT')
);
console.log(getShoulderMarkImg('kierownik ZOL', 'ZOL'));
console.log(getShoulderMarkImg('specjalista ds.idk', 'RDLP'));
