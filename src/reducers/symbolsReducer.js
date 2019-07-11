import { filter, find, clone, difference, uniq, concat, isEmpty } from 'lodash'
import { COMPOSITIONS } from '../res/index'
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
  compositions: [],
  error: '',
  currentSymbols: [],
  options: [],
  tones: [],
}

getDataFromServer('https://84.201.133.135:8443/kruk/all').then(data => {
  initialState.symbols = data
})

getDataFromServer('https://84.201.133.135:8443/composition/all')
  .then(data => {
    initialState.compositions = data
  })
  .then(() => {
    let i = 1
    const compositionsSortedByTone = [
      { tone: 1, compositions: [] },
      { tone: 2, compositions: [] },
      { tone: 3, compositions: [] },
      { tone: 4, compositions: [] },
      { tone: 5, compositions: [] },
      { tone: 6, compositions: [] },
      { tone: 7, compositions: [] },
      { tone: 8, compositions: [] },
    ]
    while (i < 9) {
      const typeOfCompositions = clone(initialState.compositions)
      const filteredByTone = typeOfCompositions.map(composition =>
        composition.compositions.filter(
          subComposition => subComposition.tone.indexOf(i.toString()) !== -1
        )
      )

      const compositionsOfTone = find(compositionsSortedByTone, { tone: i })
        .compositions
      filteredByTone.forEach(array =>
        isEmpty(array)
          ? null
          : (compositionsOfTone = [...compositionsOfTone, array])
      )
      console.log(filteredByTone)
      i += 1
    }
    console.log(compositionsSortedByTone)
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
      const symbols = action.payload
      return {
        ...state,
        symbols,
        namesOfSymbols: symbols.map(symbol => ({
          value: symbol._id,
          label: symbol.name,
        })),
      }
    }

    case FILTER_SYMBOLS_BY_NAME: {
      const { symbols } = state
      const currentNameOfSymbol = action.payload
      const symbolsFilteredByName = find(
        symbols,
        symbol => symbol.name === currentNameOfSymbol
      )

      return {
        ...state,
        symbolsFilteredByName: symbolsFilteredByName.symbols,
        currentSymbols: symbolsFilteredByName.symbols,
      }
    }

    case FILTER_SYMBOLS_BY_OPTIONS: {
      const { symbolsFilteredByName } = state
      const currentOptionsOfSymbol = action.payload
      const symbolsFilteredByOptions = filter(
        symbolsFilteredByName,
        symbol =>
          difference(currentOptionsOfSymbol, symbol.opts).length === 0 &&
          difference(symbol.opts, currentOptionsOfSymbol).length === 0
      )
      return {
        ...state,
        symbolsFilteredByOptions,
        currentSymbols: symbolsFilteredByOptions,
        error: checkError(symbolsFilteredByOptions),
      }
    }

    case FILTER_SYMBOLS_BY_PITCH: {
      const { symbolsFilteredByOptions } = state
      const currentPitchOfSymbol = action.payload
      const symbolsFilteredByPitch = filter(
        symbolsFilteredByOptions,
        ({ pitch }) => pitch === currentPitchOfSymbol
      ) // eslint-disable-line max-len

      return {
        ...state,
        symbolsFilteredByPitch,
        currentSymbols: symbolsFilteredByPitch,
        error: checkError(symbolsFilteredByPitch),
      }
    }

    case ADD_TEXT_TO_SYLLABLE: {
      const { symbolsFilteredByPitch } = state
      const textForInsert = action.payload
      const symbolWithText = clone(symbolsFilteredByPitch)[0]
      symbolWithText.text = textForInsert
      symbolWithText.type = 'KRUK'
      return {
        ...state,
        symbolWithText,
      }
    }

    case CREATE_OPTIONS_LIST: {
      const { symbolsFilteredByName } = state
      let emptyArray = []
      // map array  of symbols, and in everi item add array of opts to emptyArray
      symbolsFilteredByName.map(symbol => {
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
      console.log('currentCompositions')
      console.log(currentCompositions)
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
        currentCompositions: action.payload,
        tones: labels,
      }
    }

    case GET_SYMBOLS:
      return {
        ...state,
        symbols: initialState.symbols,
      }

    case GET_COMPOSITIONS:
      return {
        ...state,
        compositions: initialState.compositions,
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
