import React from 'react'
import Label from '../atoms/Label'
import '../../App.css'

const Status = ({setStatus, status}) => {

  const getStatus = (e) => {
    if (e.target.value === 'on') {
      setStatus(false);
    }

    if (e.target.value === 'off') {
      setStatus(true);
    }
  } 

  return (
    <div>
      <Label>Status</Label>
      <div className="form__radio-box">
        <div>
          <Label>On</Label>
          <input type="radio" className="form__radio" defaultChecked={status} onChange={getStatus} name="status" value="on"/>
        </div>
        <div>
          <Label>Off</Label>
          <input type="radio" className="form__radio" defaultChecked={!status} onChange={getStatus} name="status" value="off"/>
        </div>
      </div> 
    </div>
  )
}

export default Status