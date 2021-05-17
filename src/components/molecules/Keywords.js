import React from 'react'
import Label from '../atoms/Label'

const Keywords = () => {
  return (
    <div>
      <Label formField="keywords">Keywords</Label>
      <input className="form__input" type="text" name="keywords" required />
    </div>
  )
}

export default Keywords
