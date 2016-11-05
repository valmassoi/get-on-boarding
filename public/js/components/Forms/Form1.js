import React from 'react'

const Form1 = ({ version, build, note, user } = fields) => {
  return (
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
)
}
export default Form1
