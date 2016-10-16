import React, { Component } from 'react'

import Form from '../components/Form'
import CompletionBar from '../components/CompletionBar'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stepNumber: 1,
    }
  }

  componentWillMount() {

  }

  render() {
    const { stepNumber } = this.state
    return (
      <div>
        <Form stepNumber={stepNumber} />
        <CompletionBar stepNumber={stepNumber} />
      </div>
    )
  }
}
