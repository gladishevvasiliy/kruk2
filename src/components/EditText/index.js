import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { hideModalEditText, editText } from '../../actions'

class EditText extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()

      const { actions } = this.props
      actions.editText(e.target.value)
      actions.hideModalEditText()
    }
  }

  cancel = () => {
    const { actions } = this.props
    actions.hideModalEditText()
  }

  render() {
    const { showModalEditText, ucsFont } = this.props
    return (
      <Modal isOpen={showModalEditText}>
        <ModalHeader toggle={this.cancel}>Изменить текст</ModalHeader>
        <ModalBody>
          <p>Введите новый текст и нажмите Enter</p>
          <form onKeyPress={this.handleKeyPress}>
            <input
              type="text"
              name="name"
              style={{ fontFamily: ucsFont }}
              className="inputTextUCS form-control"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cancel}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  indexOfEditableText: state.paper.indexOfEditableText,
  showModalEditText: state.paper.showModalEditText,
  ucsFont: state.form.paperStyle.values.fontOfTextInSyllables,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      hideModalEditText,
      editText,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditText)
