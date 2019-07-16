import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Container, Col, Input, Label, Form, FormGroup } from 'reactstrap'
import { Select } from '../../utils'
import { customFonts } from '../../res/index'
import './style.css'

const PaperStyle = () => (
  <Container className="paperStyle text-left">
    <h4>Настройки</h4>
    <Form>
      <FormGroup row>
        <Col>
          <Label for="symbolFontSize">Размер знамен</Label>
          <Input
            tag={Field}
            component="input"
            type="number"
            name="symbolFontSize"
            min="30"
            max="180"
          />
        </Col>
        <Col>
          <Label for="textFontSize">Размер текста</Label>
          <Input
            tag={Field}
            component="input"
            type="number"
            name="textFontSize"
            min="10"
            max="80"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Label for="marginTop">Отступ текста от знамени</Label>
          <Input
            tag={Field}
            component="input"
            type="number"
            name="marginTop"
            min="1"
            max="80"
          />
        </Col>
        <Col>
          <Label for="marginBottom">Межстрочный интервал</Label>
          <Input
            tag={Field}
            component="input"
            type="number"
            name="marginBottom"
            min="1"
            max="80"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Label for="fontOfTextInSyllables">Шрифт слогов</Label>
          <Field
            name="fontOfTextInSyllables"
            component={Select}
            options={customFonts}
            id="fontOfTextInSyllables"
          />
        </Col>
        <Col>
          <Label for="sizeOfBucvica">Размер буквицы</Label>
          <Input
            tag={Field}
            component="input"
            type="number"
            name="sizeOfBucvica"
            min="50"
            max="180"
          />
        </Col>
      </FormGroup>
    </Form>
  </Container>
)

const PaperStyleWithForm = reduxForm({
  form: 'paperStyle',
})(PaperStyle)

const InitializePaperStyleWithForm = connect(() => ({
  initialValues: {
    symbolFontSize: 50,
    textFontSize: 20,
    marginTop: 10,
    marginBottom: 14,
    fontOfTextInSyllables: customFonts[0],
    sizeOfBucvica: 90,
    sizeOfPage: 900,
  },
}))(PaperStyleWithForm)

export default InitializePaperStyleWithForm
