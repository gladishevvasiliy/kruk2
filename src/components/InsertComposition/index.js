import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { find } from 'lodash'
import './style.css'

import { RFReactSelect } from '../../utils'
import { addSyllable, createNamesList, getCompositions } from '../../actions'

class InsertComposition extends Component {
  changeTone = e => {
    const { actions } = this.props
    actions.getCompositions()
    actions.createNamesList(e.label)
  }

  changeName = e => {
    const { actions, currentCompositions } = this.props
    const syllablesForInsert = find(currentCompositions, { _id: e.id }).value
    syllablesForInsert.map(item =>
      actions.addSyllable({ value: item, text: '-', type: 'KRUK' })
    )
  }

  render() {
    const { compositionsNames, compositionsLables } = this.props
    return (
      <div className="insertComposition text-left">
        <h4 className="text-left">Вставить попевку</h4>
        <div className="field">
          <label htmlFor="Tone">Глас</label>
          <Field
            name="tone"
            options={compositionsLables}
            onChange={this.changeTone}
            component={RFReactSelect}
            className="input"
          />
        </div>
        <div className="field">
          <label htmlFor="Name">Глас</label>
          <Field
            name="name"
            options={compositionsNames}
            onChange={this.changeName}
            component={RFReactSelect}
            className="input"
          />
        </div>
      </div>
    )
  }
}

const InsertCompositionWithForm = reduxForm({
  form: 'compostitionForInsert',
})(InsertComposition)

const mapStateToProps = state => ({
  compositionsLables: state.symbols.compositions.map(item => ({
    id: item.tone,
    label: item.tone,
  })),
  currentCompositions: state.symbols.currentCompositions,
  compositionsNames: state.symbols.compositionsNames.map(item => ({
    id: item.id,
    label: item.name,
  })),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addSyllable,
      createNamesList,
      getCompositions,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertCompositionWithForm)
