import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class Form2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleFormSubmit(formData) {
    this.props.submit(formData)// Parent
  }

  render() {
    const { handleSubmit, fields: { } } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div class="card-header">Title of Form 2</div>
        <div>
          <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
            <label>First Name</label>
            <input class="form-control" placeholder="John" />
        </fieldset>
        <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
          <label>Last Name</label>
          <input class="form-control" placeholder="Doe" />
        </fieldset>
        <fieldset class="form-group">
          <label>State</label>
          <br />
          <select>
            <option value="none">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
          </select>
        </fieldset>
        <fieldset class="form-group">
          <label>State</label>
          <br />
          <select>
            <option value="none">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
          </select>
        </fieldset>
        <fieldset class="form-group" style={{ clear: 'both' }}>
          <label>Some long text area</label>
          <textarea width="100%" rows="7" class="form-control" />
        </fieldset>
        <fieldset class="form-group">
          <label>Some Input</label>
          <input class="form-control" placeholder="Some cool new stuff" />
        </fieldset>
        <fieldset class="form-group">
          <label>Note</label>
          <input class="form-control" placeholder="Test some new function to see if it works" />
        </fieldset>
        <fieldset class="form-group" style={{ textAlign: 'left !important' }}>
          <label>ID upload (image)</label>
          <input type="file" name="pic" accept="image/*" />
        </fieldset>
        </div>
      <div class="btn btn-default pull-left" onClick={() => this.props.goBack()}>Back</div>
      <button action="submit" class="btn btn-primary pull-right">Next</button>
    </form>
)
  }
}

function mapStateToProps(state) {
  return { errorMessage: '' } // state.form.error
}
// http://redux-form.com/5.3.3/#/examples/multirecord?_k=kcy5ns
export default reduxForm({
  form: 'form2',
  fields: ['versiosadn', 'asdf', 'notasdfe', 'useasdfr'],
}, mapStateToProps, null)(Form2)
