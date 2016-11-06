import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Dropzone from 'react-dropzone'

class Form2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleFormSubmit(formData) {
    this.props.submit(formData)// Parent
  }
  handleFormBack(formData) {
    this.props.goBack(formData)// Parent
  }

  onDrop(files) {
    const file = files[0]
    console.log('Received file: ', file.name)
    this.props.fileUpload(file)
  }

  render() {
    const { handleSubmit, fields: { firstName, lastName, textArea, myInput, note, state1, state2, testFile } } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div class="card-header">Title of Form 2</div>
        <div>
          <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
            <label>First Name</label>
            <input {...firstName} class="form-control" placeholder="John" />
        </fieldset>
        <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
          <label>Last Name</label>
          <input {...lastName} class="form-control" placeholder="Doe" />
        </fieldset>
        <fieldset class="form-group">
          <label>State</label>
          <br />
          <select {...state1}>
            <option value="none">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
          </select>
        </fieldset>
        <fieldset class="form-group">
          <label>State</label>
          <br />
          <select {...state2}>
            <option value="none">Select State</option>
            <option value="IN">Indiana</option>
            <option value="CA">California</option>
            <option value="UT">Utah</option>
          </select>
        </fieldset>
        <fieldset class="form-group" style={{ clear: 'both' }}>
          <label>Some long text area</label>
          <textarea {...textArea} width="100%" rows="7" class="form-control" />
        </fieldset>
        <fieldset class="form-group">
          <label>Some Input</label>
          <input {...myInput} class="form-control" placeholder="Some cool new stuff" />
        </fieldset>
        <fieldset class="form-group">
          <label>Note</label>
          <input {...note} class="form-control" placeholder="Test some new function to see if it works" />
        </fieldset>
        <fieldset class="form-group" style={{ textAlign: 'left !important' }}>
            <Dropzone onDrop={this.onDrop.bind(this)} multiple={false}>
              <div>Drop file here, or click to select file to upload.</div>
            </Dropzone>
            {this.props.uploadedFile ?
              <img width="200" src={this.props.uploadedFile.preview} />
              : null
            }
        </fieldset>
        </div>
        <div
          class="btn btn-default pull-left"
          onClick={handleSubmit(this.handleFormBack.bind(this))}
        >Back</div>
        <button action="submit" class="btn btn-primary pull-right">Next</button>
      </form>
)
  }
}
// For file upload: https://github.com/okonet/react-dropzone
function mapStateToProps(state) {
  return {
    errorMessage: '',
    initialValues: state.step.forms.form2,
    uploadedFile: state.step.uploadedFile,
  } // state.form.error
}
// http://redux-form.com/5.3.3/#/examples/multirecord?_k=kcy5ns
export default reduxForm({
  form: 'form2',
  fields: ['firstName', 'lastName', 'textArea', 'myInput', 'note', 'state1', 'state2', 'testFile'],
}, mapStateToProps, null)(Form2)
