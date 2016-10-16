import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      isBadInput: '',
    }
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('handle submit')
    this.badAnimation()
  }

  badAnimation() {
    this.setState({ isBadInput: 'bad' })
    setTimeout(() => this.setState({ isBadInput: '' }), 1000)// HACK
  }

  render() {
    const { isBadInput } = this.state
    return (
      <div class={`form-container centered ${isBadInput}`}>
        <form onSubmit={(e) => this.onSubmit(e)}>
         <div class="card-header">Title of Page 1</div>
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
          <button class="btn btn-default pull-left">Back</button>
          <button action="submit" class="btn btn-primary pull-right">Next</button>
        </form>
      </div>
    )
  }
}

export default Form
