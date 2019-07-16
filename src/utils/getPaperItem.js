import React from 'react'
import { Bucvica, Text, Syllable } from '../containers'

const getPaperItem = (
  form,
  value,
  text,
  type,
  paragraphIndex,
  pageIndex,
  index,
  changePage,
  removeSyllablebyIndex,
) => {
  switch (type) {
    case 'KRUK': {
      return (
        <Syllable
          value={value}
          text={text}
          key={parseInt(index, 10)}
          paragraphIndex={paragraphIndex}
          pageIndex={pageIndex}
          index={parseInt(index, 10)}
        />
      )
    }
    case 'BUCVICA': {
      return (
        <Bucvica
          form={form}
          removeSyllablebyIndex={removeSyllablebyIndex}
          changePage={changePage}
          text={text}
          index={parseInt(index, 10)}
          paragraphIndex={paragraphIndex}
          pageIndex={pageIndex}
        />
      )
    }
    case 'TEXT': {
      return (
        <Text
          text={text}
          pageIndex={pageIndex}
          index={parseInt(index, 10)}
          key={parseInt(`${pageIndex}${paragraphIndex}${index}`, 10)}
        />
      )
    }
    case 'BREAK': {
      return <hr className="break" />
    }
    default:
      return null
  }
}
export default getPaperItem
