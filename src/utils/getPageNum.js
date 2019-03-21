import { isNil } from 'lodash'

const slavonicNumbers = {
  1: 'а',
  2: 'в',
  3: 'г',
  4: 'д',
  5: 'е',
  6: 'ѕ',
  7: 'з',
  8: 'и',
  9: 'f',
  10: 'i',
  20: 'к',
  30: 'л',
  40: 'м',
  50: 'н',
}

const getPageNum = (arabicNum) => {
  // если до 10 просто добавляем титлу
  if (arabicNum <= 10) {
    return `${slavonicNumbers[arabicNum]}7`
  }

  // если от 11 до 19 то беерм остаток от деления на 10, примисываем славянскую 10 и титлу
  if (arabicNum > 10 && arabicNum < 20) {
    return `${slavonicNumbers[arabicNum % 10]}i7`
  }

  // если больше 20 то если число не встречается в масссиве слав чисел (там только целые),
  // то возвращаем слав число десятичной части + слав число 0го разряда
  if (arabicNum >= 20 && arabicNum < 60) {
    if (isNil(slavonicNumbers[arabicNum])) {
      return `${slavonicNumbers[Math.floor(arabicNum - (arabicNum % 10))]}${
        slavonicNumbers[arabicNum % 10]
      }7`
    }
    return `${slavonicNumbers[arabicNum]}7`
  }
  return ''
}

export default getPageNum
