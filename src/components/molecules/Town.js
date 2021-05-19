import React from 'react'
import Label from '../atoms/Label'

const Town = ({setTown, town}) => {

  const getTown = (e) => {
    setTown(e.target.value);
  }

  return (
    <div>
       <Label formField="town">Town</Label>
        <select className="form__input" name="town" value={town} onChange={getTown}>
          <option value="Chicago">Chicago</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New York">New York</option>
          <option value="Austin">Austin</option>
          <option value="Miami">Miami</option>
        </select>
    </div>
  )
}

export default Town
