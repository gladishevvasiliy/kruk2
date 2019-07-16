import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditButtons from '../../components/EditButtons'
import { showModalEditText, changePage } from '../../actions'

import './style.css'

class Syllable extends Component {
  editText() {
    const { actions, index, pageIndex } = this.props
    actions.changePage(pageIndex)
    actions.showModalEditText(index)
  }

  render() {
    const {
      paperStyle,
      value,
      text,
      index,
      pageIndex,
      paragraphIndex,
    } = this.props

    const symbolStyle = {
      fontSize: `${paperStyle.symbolFontSize}pt`,
    }

    const textStyle = {
      fontSize: `${paperStyle.textFontSize}pt`,
      marginTop: `${paperStyle.marginTop}pt`,
      marginBottom: `${paperStyle.marginBottom}pt`,
      lineHeight: '1pt',
      fontFamily: paperStyle.fontOfTextInSyllables,
    }

    return (
      <div className="syllable">
        <div
          className="symbol"
          style={symbolStyle}
          dangerouslySetInnerHTML={{ __html: value }}
        />
        <div
          id={index}
          className="text"
          style={textStyle}
          onClick={(e) => this.editText(e)}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <EditButtons
          index={index}
          pageIndex={pageIndex}
          paragraphIndex={paragraphIndex}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  paperStyle: state.form.paperStyle.values,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      showModalEditText,
      changePage,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Syllable)
