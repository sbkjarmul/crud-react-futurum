import React from 'react'
import Label from '../atoms/Label'

const Town = ({setTown}) => {

  const getTown = (e) => {
    setTown(e.target.value);
  }

  return (
    <div>
       <Label formField="town">Town</Label>
        <select className="form__input" name="town" onChange={getTown}>
          <option value="Chicago">Chicago</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New yYork">New York</option>
          <option value="Austin">Austin</option>
          <option value="Miami">Miami</option>
        </select>
    </div>
  )
}

export default Town
