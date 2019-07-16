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
