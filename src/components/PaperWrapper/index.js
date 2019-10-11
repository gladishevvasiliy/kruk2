import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSymbols } from '../../actions'
import { getDataFromServer } from '../../utils'
import Paper from '..//Paper'
import './style.css'

export class PaperWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount = () => {
    getDataFromServer('https://tranquil-plateau-55628.herokuapp.com/kruk/all').then(data => {
      const { actions } = this.props
      actions.setSymbols(data)
      this.setState({ isLoading: false })
    })
  }

  render() {
    return this.state.isLoading ? (
      <React.Fragment>
        <h1 className="title">Доме1стикъ</h1>
        <div
          className="spinner spinner--steps icon-spinner loading-gif"
          aria-hidden="true"
        />
        {/* <p className="notice">
          При первом запуске пройдите по следующему адресу:{' '}
          <a href="https://84.201.133.135:8443/kruk/all">
            https://84.201.133.135:8443/kruk/all
          </a>{' '}
          и добавьте исключение безопасности.
        </p> */}
      </React.Fragment>
    ) : (
      <Paper />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setSymbols,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaperWrapper)
