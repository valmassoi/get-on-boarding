import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
// import { reduxForm } from 'redux-form'
import * as formActions from '../actions/form'

import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBadInput: '',
    }
  }

  onSubmit(formData) {
    const step = this.props.stepNumber + 1
    console.log('STEEPPP', step)
    if (true && step < 7) {
      this.props.saveForm(formData, step - 1)
      this.props.setStep(step)
    } else if (true && step === 7) {
      browserHistory.push('/success')
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
  renderAlert() {
    if (this.props.errorMessage) {
      this.badAnimation()
      return (
       <div className="alert alert-danger">
         <strong>Oops!</strong> {this.props.errorMessage}
       </div>
     )
    }
  }

  render() {
    const { isBadInput } = this.state
    const { stepNumber } = this.props
    const forms = [
      <Form1 submit={this.onSubmit.bind(this)} goBack={this.goBack.bind(this)} />,
      <Form2 submit={this.onSubmit.bind(this)} goBack={this.goBack.bind(this)} />,
      <div>`FORM ${stepNumber}`<div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
      <button onClick={() => this.onSubmit()} class="btn btn-primary pull-right">Next</button></div>,
      <div>`FORM ${stepNumber}`<div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
      <button onClick={() => this.onSubmit()} class="btn btn-primary pull-right">Next</button></div>,
      <div>`FORM ${stepNumber}`<div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
      <button onClick={() => this.onSubmit()} class="btn btn-primary pull-right">Next</button></div>,
      <div>`FORM ${stepNumber}`<div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
      <button onClick={() => this.onSubmit()} class="btn btn-primary pull-right">Next</button></div>,
    ]
    return (
      <div class={`form-container centered ${isBadInput}`}>
        {forms[stepNumber - 1]}
      </div>
    )
  }
}
export default connect(null, formActions)(Form)// `connect` puts `dispatch` in our props.
