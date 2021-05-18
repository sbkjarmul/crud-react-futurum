import React from 'react'
import Label from '../atoms/Label'

const Radius = ({setRadius}) => {

  const getRadius = (e) => {
    const radius = parseFloat(e.target.value);
    setRadius(radius);
  }

  return (
    <div>
      <Label formField="radius">Radius</Label>
      <input className="form__input" onChange={getRadius} type="number" name="radius" required />
    </div>
  )
}

export default Radius