import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as formActions from '../actions/form'

import Form1 from './Forms/Form1'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBadInput: '',
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const step = this.props.stepNumber + 1
    if (true && step < 7) {
      this.props.setStep(step)
    } else {
      this.badAnimation()
    }
  }

  goBack() {
    const step = this.props.stepNumber - 1
    if (step > 0)
      this.props.setStep(step)
    else
      this.badAnimation()
  }

  badAnimation() {
    this.setState({ isBadInput: 'bad' })
    setTimeout(() => this.setState({ isBadInput: '' }), 1000)// HACK
  }

  render() {
    const { isBadInput } = this.state
    const { stepNumber } = this.props
    return (
      <div class={`form-container centered ${isBadInput}`}>
        <form onSubmit={(e) => this.onSubmit(e)}>
         <div class="card-header">Title of Form {stepNumber}</div>
            {stepNumber === 1 ? <Form1 /> : `FORM ${stepNumber}`}
          <div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
          <button action="submit" class="btn btn-primary pull-right">Next</button>
        </form>
      </div>
    )
  }
}
export default connect(null, formActions)(Form)
