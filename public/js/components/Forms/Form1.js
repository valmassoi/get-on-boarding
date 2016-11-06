import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class Form1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleFormSubmit(formData) {
    this.props.submit(formData)// Parent
  }

  render() {
    const { handleSubmit, fields: { version, build, changeLog, note, user, production, beta, rc } } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <div class="card-header">Title of Form 1</div>
        <div>
          <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
            <label>Version</label>
            <input {...version} class="form-control" placeholder="v2.2.2" />
          </fieldset>
          <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
            <label>Build</label>
            <input {...build} class="form-control" placeholder="282" />
          </fieldset>
          <fieldset class="form-group">
            <label>Production</label>
            <br />
            <input {...production} value="true" type="radio" checked={production.value === 'true'} /> True
           &nbsp;&nbsp;&nbsp;&nbsp;
            <input {...production} value="false" type="radio" checked={production.value === 'false'} /> False
          </fieldset>
          <fieldset class="form-group">
            <label>Beta</label>
            <br />
            <input {...beta} value="true" type="radio" checked={beta.value === 'true'} /> True
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input {...beta} value="false" type="radio" checked={beta.value === 'false'} /> False
          </fieldset>
          <fieldset class="form-group">
            <label>RC</label>
            <br />
            <input {...rc} value="true" type="radio" checked={rc.value === 'true'} /> True
           &nbsp;&nbsp;&nbsp;&nbsp;
            <input {...rc} value="false" type="radio" checked={rc.value === 'false'} /> False
          </fieldset>
          <fieldset class="form-group">
            <label>Change Log</label>
            <input {...changeLog} class="form-control" placeholder="Some cool new stuff" />
          </fieldset>
          <fieldset class="form-group">
            <label>Note</label>
            <input {...note} class="form-control" placeholder="Test some new function to see if it works" />
          </fieldset>
          <fieldset class="form-group">
           <label>User access</label>
           <br />
           <select {...user}>
             <option>asdffdas</option>
             <option>asfd</option>
             <option>asdfasdfasdfasd</option>
             <option>All</option>
           </select>
          </fieldset>
        </div>
      <div class="btn btn-default pull-left" onClick={() => this.props.goBack()}>Back</div>
      <button action="submit" class="btn btn-primary pull-right">Next</button>
    </form>
)
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: '',
    initialValues: state.step.forms.form1,
  } // state.form.error
}
// http://redux-form.com/5.3.3/#/examples/multirecord?_k=kcy5ns
export default reduxForm({
  form: 'form1',
  fields: ['version', 'build', 'changeLog', 'note', 'user', 'production', 'beta', 'rc'],
}, mapStateToProps, null)(Form1)
