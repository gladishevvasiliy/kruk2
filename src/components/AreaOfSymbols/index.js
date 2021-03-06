import React, { Component } from 'react'
import PropTypes from 'react-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { isNil } from 'lodash'

import {
  moveSyllable,
  hideModal,
  changePage,
  removePage,
  addPage,
  removeSyllablebyIndex,
  changeParagraph,
} from '../../actions'

import { Loading, getPageNum, getPaperItem } from '../../utils'

import {
  EditText,
  RemovePageButton,
  RemoveParagraphButton,
  EditSyllable,
  RemoveParagraph,
  RemovePageModal,
} from '../'

import './style.css'

class AreaOfSymbols extends Component {
  renderPages = () => {
    const { syllables, actions, showPagination, currentPageNum } = this.props
    let pageTemplate = null

    if (syllables) {
      pageTemplate = syllables.map((item, pageIndex) => (
        <React.Fragment>
          <div
            className={pageIndex === currentPageNum ? 'a4 activePage' : 'a4'}
            key={pageIndex} // eslint-disable-line
            onClick={() => actions.changePage(pageIndex)}
          >
            <RemovePageButton pageIndex={pageIndex} />
            <div className="page">{this.renderOnePage(item, pageIndex)}</div>
            <span
              className="pagination"
              style={{ display: showPagination ? 'inline' : 'none' }}
              dangerouslySetInnerHTML={{ __html: getPageNum(pageIndex + 1) }}
            />
          </div>
        </React.Fragment>
      ))
    }
    return pageTemplate
  }

  changeParagraph = (e, paragraphIndex) => {
    const { actions } = this.props
    actions.changeParagraph(paragraphIndex)
  }

  renderOnePage = (item, pageIndex) => {
    const { currentPageNum, currentParagraphNum } = this.props
    const syllablesTemplate = item.map((paragraph, paragraphIndex) => (
      <div className="paragraphWrapper">
        <RemoveParagraphButton
          paragraphIndex={paragraphIndex}
          pageIndex={pageIndex}
        />
        <div
          className={
            `${pageIndex}${paragraphIndex}` ===
            `${currentPageNum}${currentParagraphNum}`
              ? 'paragraph activeParagraph'
              : 'paragraph'
          }
          key={`${paragraphIndex}${pageIndex}`} // eslint-disable-line
          onClick={(e) => this.changeParagraph(e, paragraphIndex)}
        >
          {/* eslint-disable-line */}
          {this.renderOneParagraph(paragraph, paragraphIndex, pageIndex)}
        </div>
      </div>
    ))
    return syllablesTemplate
  }

  renderOneParagraph = (paragraph, paragraphIndex, pageIndex) => {
    const { form, actions } = this.props
    const syllablesTemplate = paragraph.map(({ value, text, type }, index) =>
      getPaperItem(
        form,
        value,
        text,
        type,
        paragraphIndex,
        pageIndex,
        index,
        actions.changePage,
        actions.removeSyllablebyIndex,
      ),
    )
    return syllablesTemplate
  }

  render() {
    const { form, actions } = this.props

    if (isNil(form.paperStyle)) {
      return <Loading />
    }

    return (
      <React.Fragment>
        <div className="paperArea">
          <div className="areaOfSymbols mx-auto">
            <div className="paperMargin">
              {this.renderPages()}
              <Button
                color="primary"
                className="add-page"
                onClick={actions.addPage}
              >
                Добавить страницу
              </Button>
            </div>
          </div>
        </div>
        <EditSyllable />
        <EditText />
        <RemoveParagraph />
        <RemovePageModal />
      </React.Fragment>
    )
  }
}

AreaOfSymbols.propTypes = {
  syllables: PropTypes.array,
  form: PropTypes.object,
  actions: PropTypes.object,
  showPagination: PropTypes.boolean,
  currentPageNum: PropTypes.number,
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      moveSyllable,
      hideModal,
      changePage,
      removePage,
      addPage,
      removeSyllablebyIndex,
      changeParagraph,
    },
    dispatch,
  ),
})

const mapStateToProps = (state) => ({
  syllables: state.paper.syllables,
  form: state.form,
  showModalEdit: state.paper.showModalEdit,
  showModalEditText: state.paper.showModalEditText,
  currentPageNum: state.paper.currentPageNum,
  currentParagraphNum: state.paper.currentParagraphNum,
  showPagination: state.paper.showPagination,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AreaOfSymbols)
