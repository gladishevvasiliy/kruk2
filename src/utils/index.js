import { RFReactSelect, RFReactMultiSelect } from './RFReactSelect'
import { withErrorHandling, DivWithErrorHandling } from './withErrorHandling'

import Loading from './Loading'
import Header from './Header'
import RangeInput from './RangeInput'
import getPageNum from './getPageNum'
import getPaperItem from './getPaperItem'
import Select from './Select'

export {
  RFReactMultiSelect,
  RFReactSelect,
  Loading,
  Header,
  RangeInput,
  getPageNum,
  withErrorHandling,
  DivWithErrorHandling,
  Select,
  getPaperItem,
}

export const getDataFromServer = (url) =>
  fetch(url).then((resp) => {
    const data = resp.json()
    return data
  })

export const getDate = () => {
  const today = new Date()
  return `${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate(),
  ).padStart(2, '0')}.${today.getFullYear()}`
}

export const saveFieldDataToLocalStorage = (e) => {
  localStorage.setItem(e.currentTarget.name, e.currentTarget.value)
}
