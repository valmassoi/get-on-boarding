import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as formActions from '../actions/form'

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
            <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
             <label>Version</label>
             <input class="form-control" placeholder="v2.2.2" />
            </fieldset>
            <fieldset class="form-group" style={{ width: '300px', float: 'left' }}>
             <label>Build</label>
             <input class="form-control" placeholder="282" />
            </fieldset>
            <fieldset class="form-group">
             <label>Production</label>
             <br />
             <input value="true" type="radio" /> True
             &nbsp;&nbsp;&nbsp;&nbsp;
             <input value="false" type="radio" /> False
            </fieldset>
            <fieldset class="form-group">
             <label>Beta</label>
             <br />
             <input value="true" type="radio" /> True
             &nbsp;&nbsp;&nbsp;&nbsp;
             <input value="false" type="radio" /> False
            </fieldset>
            <fieldset class="form-group">
             <label>RC</label>
             <br />
             <input value="true" type="radio" /> True
             &nbsp;&nbsp;&nbsp;&nbsp;
             <input value="false" type="radio" /> False
            </fieldset>
            <fieldset class="form-group">
             <label>Change Log</label>
             <input class="form-control" placeholder="Some cool new stuff" />
            </fieldset>
            <fieldset class="form-group">
             <label>Note</label>
             <input class="form-control" placeholder="Test some new function to see if it works" />
            </fieldset>
            <fieldset class="form-group">
             <label>User access</label>
             <br />
             <select>
               <option>asdffdas</option>
               <option>asfd</option>
               <option>asdfasdfasdfasd</option>
               <option>All</option>
             </select>
            </fieldset>
          <div class="btn btn-default pull-left" onClick={() => this.goBack()}>Back</div>
          <button action="submit" class="btn btn-primary pull-right">Next</button>
        </form>
      </div>
    )
  }
}
export default connect(null, formActions)(Form)
