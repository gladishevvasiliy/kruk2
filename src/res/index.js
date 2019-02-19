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

export const KRUKI = [
  {
    id: '5c62dbeb70422c136adbfcb5',
    label: 'Челюстка',
  },
  {
    id: '5c62dc1b70422c136adbfcbd',
    label: 'Ключ',
  },
  {
    id: '5c62de0070422c136adbfd39',
    label: 'Дербица',
  },
  {
    id: '5c62deb970422c136adbfd53',
    label: 'Голубчик борзый',
  },
  {
    id: '5c62e08a70422c136adbfd93',
    label: 'Статья с крыжом',
  },
  {
    id: '5c62e15570422c136adbfd99',
    label: 'Статья простая (в кулизме)',
  },
  {
    id: '5c6319056733571b393e4dbb',
    label: 'Паук малый',
  },
  {
    id: '5c5d60b9af84051c8a91cea9',
    label: 'Параклит',
  },
  {
    id: '5c62d7f470422c136adbfb7d',
    label: 'Крюк',
  },
  {
    id: '5c62d90670422c136adbfc30',
    label: 'Запятая',
  },
  {
    id: '5c62d9c370422c136adbfc49',
    label: 'Запятая с крыжом',
  },
  {
    id: '5c62da2570422c136adbfc56',
    label: 'Стопица',
  },
  {
    id: '5c62dbaf70422c136adbfc8e',
    label: 'Стопица с очком',
  },
  {
    id: '5c62dc7e70422c136adbfcc2',
    label: 'Подчашие',
  },
  {
    id: '5c62dd4370422c136adbfced',
    label: 'Палка',
  },
  {
    id: '5c62ddca70422c136adbfd0d',
    label: 'Скамейца',
  },
  {
    id: '5c62de7870422c136adbfd3c',
    label: 'Переводка',
  },
  {
    id: '5c62dee170422c136adbfd5e',
    label: 'Голубчик тихий',
  },
  {
    id: '5c62df2070422c136adbfd66',
    label: 'Чашка',
  },
  {
    id: '5c62df6370422c136adbfd7c',
    label: 'Статья простая',
  },
  {
    id: '5c630f306733571b393e4ab0',
    label: 'Статья с запятой',
  },
  {
    id: '5c6311276733571b393e4b3c',
    label: 'Крыж',
  },
  {
    id: '5c6311686733571b393e4b48',
    label: 'Рог',
  },
  {
    id: '5c6312f96733571b393e4c21',
    label: 'Труба',
  },
  {
    id: '5c63134e6733571b393e4c26',
    label: 'Мечик',
  },
  {
    id: '5c62e19f70422c136adbfd9b',
    label: 'Статья светлая',
  },
  {
    id: '5c630f8d6733571b393e4abe',
    label: 'Статья мрачная',
  },
  {
    id: '5c63108a6733571b393e4ad9',
    label: 'Малая закрытая',
  },
  {
    id: '5c6310ec6733571b393e4b0b',
    label: 'Средняя закрытая',
  },
  {
    id: '5c6311ad6733571b393e4b53',
    label: 'Сложитие',
  },
  {
    id: '5c6311fc6733571b393e4b85',
    label: 'Сложитие с купной',
  },
  {
    id: '5c6312416733571b393e4b91',
    label: 'Сложитие с запятой',
  },
  {
    id: '5c6312776733571b393e4bd0',
    label: 'Полукулизма',
  },
  {
    id: '5c6312ba6733571b393e4bda',
    label: 'Два в челну',
  },
  {
    id: '5c6314146733571b393e4c29',
    label: 'Стрела мрачная',
  },
  {
    id: '5c6314646733571b393e4c43',
    label: 'Стрела крыжевая',
  },
  {
    id: '5c6314a66733571b393e4c96',
    label: 'Стрела поводная',
  },
  {
    id: '5c6314e66733571b393e4cc1',
    label: 'Стрела светлая',
  },
  {
    id: '5c63151d6733571b393e4ce0',
    label: 'Стрела тресветлая',
  },
  {
    id: '5c63156e6733571b393e4cfe',
    label: 'Стрела светлотихая',
  },
  {
    id: '5c6315996733571b393e4d09',
    label: 'Стрела поездная',
  },
  {
    id: '5c6315ca6733571b393e4d13',
    label: 'Стрела громная',
  },
  {
    id: '5c63160e6733571b393e4d34',
    label: 'Стрела громосветлая',
  },
  {
    id: '5c63164d6733571b393e4d53',
    label: 'Стрела громотресветлая',
  },
  {
    id: '5c6316906733571b393e4d6b',
    label: 'Стрела возводная',
  },
  {
    id: '5c6316cf6733571b393e4d8f',
    label: 'Стрела громокрыжная',
  },
  {
    id: '5c6317136733571b393e4daf',
    label: 'Стрела трясосветлая',
  },
  {
    id: '5c6319b56733571b393e4dbd',
    label: 'Паук большой',
  },
  {
    id: '5c631a866733571b393e4dbf',
    label: 'Фита',
  },
  {
    id: '5c631ac16733571b393e4dc1',
    label: 'Полукулизма малая',
  },
  {
    id: '5c631bb26733571b393e4dce',
    label: 'Фотиза',
  },
  {
    id: '5c631cac6733571b393e4dd0',
    label: 'Змийца',
  },
  {
    id: '5c631d806733571b393e4de8',
    label: 'Стрела простая',
  },
  {
    id: '5c6318c56733571b393e4db9',
    label: 'Хамило',
  },
  {
    id: '5c6313226733571b393e4c24',
    label: 'Дуда',
  },
]
