import React from 'react'
import Label from '../atoms/Label'

const Status = ({setStatus}) => {

  const getStatus = (e) => {
    if (e.target.value === 'on') {
      setStatus(true);
    }

    if (e.target.value === '') {
      setStatus(false);
    }
  }

  return (
    <div>
      <Label formField="status">Status</Label>
      <input type="checkbox" onChange={getStatus} name="status" />
    </div>
  )
}

export default Status