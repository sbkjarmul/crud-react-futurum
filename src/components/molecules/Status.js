import React from 'react'
import Label from '../atoms/Label'

const Status = () => {
  return (
    <div>
      <Label formField="status">Status</Label>
      <input type="checkbox" name="status" required/>
    </div>
  )
}

export default Status