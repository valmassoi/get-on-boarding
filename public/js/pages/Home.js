import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import * as formActions from '../actions/form'

import Form from '../components/Form'
import CompletionBar from '../components/CompletionBar'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // stepNumber: 1,
    }
  }

  componentWillMount() {
    console.warn('home cwm')
  }

  render() {
    const { stepNumber } = this.props
    return (
      <div>
        <Form stepNumber={stepNumber} />
        <CompletionBar stepNumber={stepNumber} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stepNumber: state.step.stepNumber,
  }
}

export default connect(mapStateToProps, formActions)(Home)
