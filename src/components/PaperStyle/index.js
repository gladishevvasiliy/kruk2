import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { RangeInput, Select } from '../../utils'
import { customFonts } from '../../res/index'
import './style.css'

const PaperStyle = () => (
  <div className="paperStyle text-left">
    <h4>Настройки</h4>
    <label htmlFor="symbolFontSize">Размер знамен</label>
    <Field
      name="symbolFontSize"
      type="range"
      className="custom-range"
      component={RangeInput}
      id="fontRange"
      min="30"
      max="180"
    />
    <label htmlFor="textFontSize">Размер текста</label>
    <Field
      name="textFontSize"
      type="range"
      className="custom-range"
      component={RangeInput}
      id="fontRange"
      min="10"
      max="80"
    />
    <label htmlFor="lineHeight">Отступ текста от знамени</label>
    <Field
      name="lineHeight"
      type="range"
      className="custom-range"
      component={RangeInput}
      id="fontRange"
      min="1"
      max="80"
    />
    <label htmlFor="fontOfTextInSyllables">Шрифт текста под знаменами</label>
    <Field
      name="fontOfTextInSyllables"
      component={Select}
      options={customFonts}
      id="fontOfTextInSyllables"
    />
    <label htmlFor="sizeOfBucvica">Размер буквицы</label>
    <Field
      name="sizeOfBucvica"
      type="range"
      className="custom-range"
      component={RangeInput}
      id="sizeOfBucvica"
      min="50"
      max="180"
    />
  </div>
)

const PaperStyleWithForm = reduxForm({
  form: 'paperStyle',
})(PaperStyle)

const InitializePaperStyleWithForm = connect(() => ({
  initialValues: {
    textfontSize: 40,
    sizeOfBucvica: 72,
    sizeOfPage: 900,
    lineHeight: 1,
    fontOfTextInSyllables: customFonts[0],
  },
}))(PaperStyleWithForm)

export default InitializePaperStyleWithForm
