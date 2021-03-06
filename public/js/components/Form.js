import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
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
    const step = this.props.stepNumber + 1// FIX
    if (true && step < 7) {
      this.props.saveForm(formData, step - 1)
      this.props.setStep(step)
    } else if (true && step === 7) {
      console.log('All DATA:', this.props.allData)
      browserHistory.push('/success')
    } else {
      this.badAnimation()
    }
  }

  goBack(formData) {
    const step = this.props.stepNumber - 1
    if (step > 0) {
      this.props.saveForm(formData, step + 1)
      this.props.setStep(step)
    }
    else
      this.badAnimation()
  }
  fileUpload(file) {
    this.props.uploadedFile(file)
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
      <Form2 submit={this.onSubmit.bind(this)} goBack={this.goBack.bind(this)} fileUpload={this.fileUpload.bind(this)} />,
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
function mapStateToProps(state) {
  return {
    allData: { ...state.step.forms, uploadedFile: state.step.uploadedFile },
  }
}
export default connect(mapStateToProps, formActions)(Form)// `connect` puts `dispatch` in our props.
