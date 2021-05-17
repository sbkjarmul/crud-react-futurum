import React from 'react'
import Label from '../atoms/Label'

const Radius = () => {
  return (
    <div>
      <Label formField="radius">Radius</Label>
      <input className="form__input" type="number" name="radius" required />
    </div>
  )
}

export default Radius