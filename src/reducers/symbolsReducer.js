import { filter, find, clone, difference, uniq, concat } from 'lodash'
import { KRUKI, COMPOSITIONS } from '../res/index'
import { getDataFromServer } from '../utils'

import {
  SET_SYMBOLS,
  FILTER_SYMBOLS_BY_NAME,
  CREATE_OPTIONS_LIST,
  FILTER_SYMBOLS_BY_OPTIONS,
  FILTER_SYMBOLS_BY_PITCH,
  ADD_TEXT_TO_SYLLABLE,
  GET_SYMBOLS,
  CHECK_ERROR,
  ERROR_NO_DEFINE_SYMBOL,
  CREATE_PITCH_LIST,
  CREATE_TONE_LIST,
  GET_COMPOSITIONS,
} from '../constants/'

const initialState = {
  symbols: [],
  compositions: COMPOSITIONS,
  error: '',
  currentSymbols: [],
  options: [],
  tones: [],
}

getDataFromServer('http://84.201.133.135/kruk/all').then(data => {
  initialState.symbols = data
})

const checkError = symbols => {
  if (symbols.length === 0) {
    return 'Ошибка. Такого крюка в базе нет.'
  }
  return ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SYMBOLS: {
      console.log(SET_SYMBOLS)
      const symbols = action.payload
      return {
        ...state,
        symbols,
      }
    }

    case FILTER_SYMBOLS_BY_NAME: {
      console.log(FILTER_SYMBOLS_BY_NAME)
      const { symbols } = state
      const currentNameOfSymbol = action.payload
      const symbolsFilteredByName = find(
        symbols,
        symbol => symbol.name === currentNameOfSymbol
      )
      console.log(symbolsFilteredByName)

      return {
        ...state,
        currentSymbols: symbolsFilteredByName,
        symbols: symbolsFilteredByName,
      }
    }

    case FILTER_SYMBOLS_BY_OPTIONS: {
      console.log(FILTER_SYMBOLS_BY_OPTIONS) // TODO без важности порядка опций
      const { symbols } = state
      const currentOptionsOfSymbol = action.payload
      const symbolsFilteredByOptions = filter(
        symbols.symbols,
        symbol =>
          difference(currentOptionsOfSymbol, symbol.opts).length === 0 &&
          difference(symbol.opts, currentOptionsOfSymbol).length === 0
      )
      console.log(symbolsFilteredByOptions)
      return {
        ...state,
        symbolsFilteredByOptions,
        currentSymbols: symbolsFilteredByOptions,
        error: checkError(symbolsFilteredByOptions),
      }
    }

    case FILTER_SYMBOLS_BY_PITCH: {
      console.log(FILTER_SYMBOLS_BY_PITCH)
      const { symbolsFilteredByOptions } = state
      const currentPitchOfSymbol = action.payload
      const symbolsFilteredByPitch = filter(
        symbolsFilteredByOptions,
        ({ pitch }) => pitch === currentPitchOfSymbol
      ) // eslint-disable-line max-len
      console.log(symbolsFilteredByPitch)

      return {
        ...state,
        symbolsFilteredByPitch,
        currentSymbols: symbolsFilteredByPitch,
        error: checkError(symbolsFilteredByPitch),
      }
    }

    case ADD_TEXT_TO_SYLLABLE: {
      console.log(ADD_TEXT_TO_SYLLABLE)
      const { symbolsFilteredByPitch } = state
      const textForInsert = action.payload
      const symbolWithText = clone(symbolsFilteredByPitch)[0]
      symbolWithText.text = textForInsert
      symbolWithText.type = 'KRUK'
      console.log(symbolWithText)
      return {
        ...state,
        symbolWithText,
      }
    }

    case CREATE_OPTIONS_LIST: {
      const { symbols } = state
      const choosedSymbols = symbols.symbols
      let emptyArray = []
      // map array  of symbols, and in everi item add array of opts to emptyArray
      choosedSymbols.map(symbol => {
        emptyArray = concat(emptyArray, symbol.opts)
      }) // eslint-disable-line
      const uniqOptions = uniq(emptyArray) // uniq our array of opts
      let index = 0
      const labels = uniqOptions.map(option => ({
        value: index++,
        label: option,
      })) // eslint-disable-line

      return {
        ...state,
        options: labels,
      }
    }

    case CREATE_PITCH_LIST: {
      const { currentSymbols } = state
      const choosedSymbols = currentSymbols
      let emptyArray = []
      choosedSymbols.map(symbol => {
        emptyArray = concat(emptyArray, symbol.pitch)
      }) // eslint-disable-line
      const uniqOptions = uniq(emptyArray) // uniq our array of opts
      let index = 0
      const labels = uniqOptions.map(pitch => ({
        value: index++,
        label: pitch,
      })) // eslint-disable-line

      return {
        ...state,
        pitchs: labels,
      }
    }

    case CREATE_TONE_LIST: {
      const currentCompositions = action.payload
      let emptyArray = []
      currentCompositions.map(composition => {
        emptyArray = concat(emptyArray, composition.tone)
      }) // eslint-disable-line
      const uniqTones = uniq(emptyArray) // uniq our array of opts
      let index = 0
      const labels = uniqTones.map(tone => ({ value: index++, label: tone })) // eslint-disable-line
      console.log('CREATE_TONE_LIST')
      console.log(labels)

      return {
        ...state,
        compositions: action.payload,
        tones: labels,
      }
    }

    case GET_SYMBOLS:
      console.log(GET_SYMBOLS)
      return {
        ...state,
        symbols: initialState.symbols,
      }

    case GET_COMPOSITIONS:
      console.log(GET_COMPOSITIONS)
      return {
        ...state,
        compositions: COMPOSITIONS,
      }

    case CHECK_ERROR: {
      const symbolsForCheck = action.payload
      if (symbolsForCheck.length === 0) {
        return {
          ...state,
          error: 'Ошибка. Такого крюка нет в базе',
        }
      }
      return {
        ...state,
        error: '',
      }
    }

    case ERROR_NO_DEFINE_SYMBOL: {
      return {
        ...state,
        error: 'Ошибка. Не выбран крюк или его помета',
      }
    }

    default: {
      return state
    }
  }
}
