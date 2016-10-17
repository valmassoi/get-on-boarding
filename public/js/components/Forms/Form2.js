import React from 'react'

const Form2 = () => {
  return (
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
  )
}
export default Form2
