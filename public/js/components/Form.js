import React, { Component } from 'react'
import { browserHistory } from 'react-router'
// import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
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
    console.log(formData);
    const step = this.props.stepNumber + 1
    if (true && step < 7) {
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
    const { stepNumber, handleSubmit, fields } = this.props
    const forms = [
      <Form1 fields={fields} />,
      <Form2 />,
      `FORM ${stepNumber}`,
      `FORM ${stepNumber}`,
      `FORM ${stepNumber}`,
      `FORM ${stepNumber}`,
    ]
    return (
      <div class={`form-container centered ${isBadInput}`}>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div class="card-header">Title of Form {stepNumber}</div>
            {forms[stepNumber-1]}
          <div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
          <button action="submit" class="btn btn-primary pull-right">Next</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: '' } //state.form.error
}
//http://redux-form.com/5.3.3/#/examples/multirecord?_k=kcy5ns
export default reduxForm({
  form: 'this.props.stepNumber',
  fields: ['version', 'build', 'note', 'user'],
}, mapStateToProps, formActions)(Form)
