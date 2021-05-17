import React from 'react'
import Label from '../atoms/Label'

const Town = () => {
  return (
    <div>
       <Label formField="town">Town</Label>
        <select className="form__input" name="town">
          <option value="chicago">Chicago</option>
          <option value="san-francisco">San Francisco</option>
          <option value="new-york">New York</option>
          <option value="austin">Austin</option>
          <option value="miami">Miami</option>
        </select>
    </div>
  )
}

export default Town
