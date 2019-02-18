/* eslint-disable */

// Попевки

export const KICHIGI = [
  {
    value: ["<span class='red'>ö+</span>Dm", 'SK', 'Sm'],
    name: 'Кичиги',
    tone: '2, 6',
  },
]

const MEREZHA = [
  {
    value: [
      "<span class='red'>â</span>В(",
      "<span class='red'>âë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ì</span>S y",
      "<span class='red'>ï</span>W",
    ],
    name: 'Мережа 3 и 5 гласа',
    tone: '3',
  },
  {
    value: [
      "<span class='red'>â</span>В(",
      "<span class='red'>âë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ì</span>S y",
      "<span class='red'>ï</span>W",
    ],
    name: 'Мережа 3 и 5 гласа',
    tone: '5',
  },
  {
    value: [
      "<span class='red'>ö</span>l{",
      "<span class='red'>öë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ã</span>S y",
      "<span class='red'>í</span>W",
    ],
    name: 'Мережа 1 и 7 гласа (Ми)',
    tone: '1, 7 (Ми)',
  },
  {
    value: [
      "<span class='red'>ã</span>k{",
      "<span class='red'>öë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ã</span>S y",
      "<span class='red'>í</span>W",
    ],
    name: 'Мережа 1 и 7 гласа (Ут)',
    tone: '1, 7 (Ут)',
  },
]

const MEREZHA_S_PODDERZHKOI = [
  {
    value: [
      "<span class='red'>ì</span>k(",
      "<span class='red'>î</span>H",
      "<span class='red'>-</span>L92",
      "<span class='red'>ö</span>D y",
      "<span class='red'>í</span>W",
    ],
    name: 'Мережа с поддержкой',
    tone: '2, 6',
  },
]

const PLOSCHADKA = [
  {
    value: [
      "<span class='red'>í</span>z",
      "<span class='red'>ö</span><{4",
      "<span class='red'>ã</span>X",
      "<span class='red'>ö+</span>SK{?",
      "<span class='red'>í</span>z",
      "<span class='red'>ì</span>L9",
      "<span class='red'>ö</span>SK",
      "<span class='red'>í</span>W",
    ],
    name: 'Площадка',
    tone: '2, 6, 8',
  },
]

const KULIZMA_SREDNYAYA = [
  {
    value: [
      'g',
      "<span class='red'>ï</span>Y",
      "<span class='red'>ì</span>S /",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 1, 2, 6 и 8 глас',
    tone: '1, 2, 6, 8',
  },
  {
    value: [
      'g',
      "<span class='red'>ì</span>R",
      "<span class='red'>ð</span>S /",
      'S y',
      "<span class='red'>í</span>Д",
    ],
    name: 'Кулизма средняя 2 и 6 глас (в конце)',
    tone: '2, 6 (в конце)',
  },
  {
    value: [
      'g',
      "<span class='red'>Î</span>R",
      "<span class='red'>âê</span>D6",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 3 глас',
    tone: '3',
  },
  {
    value: [
      'g',
      "<span class='red'>Ï</span>Y",
      "<span class='red'>Î</span>S /",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 5 глас',
    tone: '5',
  },
  {
    value: [
      'g',
      "<span class='red'>ï</span>Y",
      "<span class='red'>öê</span>D6",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 7 глас',
    tone: '7',
  },
]

const KULIZMA_MALAYA = [
  {
    value: ["<span class='red'>ïá</span>W6", 'S y', 'S'],
    name: 'Кулизма малая 1 и 4 глас',
    tone: '1, 4',
  },
]

const DOLINKA_SREDNYAYA = [
  {
    value: [
      "<span class='red'>íó</span>W6",
      "<span class='red'>Í</span>88J\\",
      "<span class='red'>Ã</span>S",
    ],
    name: 'Долинка средняя 1 глас',
    tone: '1',
  },
]

const KOLESO = [
  {
    value: [
      "<span class='red perevodka'>ë</span>P|<span class='red'>ì</span>",
      "<span class='red'>ö</span>D y",
      "<span class='red'>í</span>W",
    ],
    name: 'Колесо 6 глас',
    tone: '6',
  },
]

export const COMPOSITIONS = [
  { id: 1, label: 'Кичиги', value: KICHIGI },
  { id: 2, label: 'Мережа', value: MEREZHA },
  { id: 3, label: 'Мережа с поддержкой', value: MEREZHA_S_PODDERZHKOI },
  { id: 4, label: 'Площадка', value: PLOSCHADKA },
  { id: 5, label: 'Кулизма средняя', value: KULIZMA_SREDNYAYA },
  { id: 6, label: 'Кулизма малая', value: KULIZMA_MALAYA },
  { id: 7, label: 'Долинка средняя', value: DOLINKA_SREDNYAYA },
  { id: 8, label: 'Колесо', value: KOLESO },
]
