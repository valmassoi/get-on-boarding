import React from 'react'

const Form1 = () => {
  return (
    <div>
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
</div>
)
}
export default Form1
