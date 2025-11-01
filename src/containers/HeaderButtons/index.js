import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, change as changeFieldValue } from 'redux-form'
import { get, mapKeys, isNil } from 'lodash'
import { saveAs } from 'file-saver/FileSaver'
import { setSyllables } from '../../actions'
import { getDate } from '../../utils'
import { Help } from './../index'
import './style.css'

class HeaderButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModalHelp: false,
      redMarksHidden: false,
    }

    this.toggleModalHelp = this.toggleModalHelp.bind()
  }

  handleFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (evt) => resolve(evt.target.result)
        reader.readAsText(file)
        reader.onerror = reject
      })
        .then(this.processFileContent)
        .catch((err) => console.log(err)) // eslint-disable-line
    }
  }

  processFileContent = (data) => {
    const { actions } = this.props
    const fileData = JSON.parse(data)
    if (isNil(fileData.settings)) {
      actions.setSyllables(fileData)
      return
    }
    mapKeys(fileData.settings, (value, key) => {
      actions.changeFieldValue('paperStyle', key, value)
    })
    actions.setSyllables(fileData.syllables)
  }

  downloadFile = () => {
    const { paper, paperStyle } = this.props
    const {
      symbolFontSize,
      textFontSize,
      marginTop,
      marginBottom,
      fontOfTextInSyllables,
      sizeOfBucvica,
    } = paperStyle.values

    const file = {
      syllables: paper.syllables,
      settings: {
        symbolFontSize,
        textFontSize,
        marginTop,
        marginBottom,
        fontOfTextInSyllables,
        sizeOfBucvica,
      },
    }
    const dataToDownload = JSON.stringify(file)
    const blob = new Blob([dataToDownload], {
      type: 'application/json; charset=utf-8',
    })
    saveAs(blob, `domestikos-${getDate()}.json`)
  }

  toggleModalHelp = () => {
    this.setState({
      showModalHelp: !this.state.showModalHelp,
    })
  }

  handleRemoveRedMarks = () => {
    const { redMarksHidden } = this.state
    const existingStyle = document.getElementById('hide-red-marks-style')

    if (redMarksHidden) {
      // Показываем пометы - удаляем стиль
      if (existingStyle) {
        existingStyle.remove()
      }
      this.setState({ redMarksHidden: false })
    } else {
      // Скрываем пометы - добавляем стиль
      if (!existingStyle) {
        const style = document.createElement('style')
        style.id = 'hide-red-marks-style'
        style.textContent = '.red { color: #ffffff !important; }'
        document.head.appendChild(style)
      }
      this.setState({ redMarksHidden: true })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Help
          toggle={this.toggleModalHelp}
          showModalHelp={this.state.showModalHelp}
        />
        <div className="import-export">
          <div id="hidden-export-container" style={{ display: 'none' }} />
          <div className="file btn-light btn">
            Загрузить из файла
            <input
              className="input-upload"
              type="file"
              name="myfile"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
          <button
            className="btn btn-light button-download"
            onClick={this.downloadFile}
          >
            Экспорт в файл
          </button>
          <button
            className="btn btn-light button-download"
            onClick={this.handleRemoveRedMarks}
            style={{ marginLeft: '10px' }}
          >
            {this.state.redMarksHidden ? 'С пометами' : 'Без помет'}
          </button>
          <button
            className="btn button-help btn-primary button-help"
            onClick={() => this.toggleModalHelp()}
          >
            Помощь
          </button>
        </div>
      </React.Fragment>
    )
  }
}

const HeaderButtonsWithForm = reduxForm({
  form: 'paperStyle',
})(HeaderButtons)

const mapStateToProps = (state) => ({
  paper: state.paper,
  paperStyle: get(state.form, 'paperStyle', {}),
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setSyllables, changeFieldValue }, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderButtonsWithForm)
