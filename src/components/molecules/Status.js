import React from 'react'
import Label from '../atoms/Label'
import '../../App.css'

const Status = ({ setStatus, status }) => {

  const getStatus = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'on') {
      setStatus(true);
    }

    if (e.target.value === 'off') {
      setStatus(false);
    }
  } 

  return (
    <div>
      <Label>Status</Label>
      <div className="form__radio-box">
        <div>
          <Label>On</Label>
          <input 
            type="radio" 
            className="form__radio" 
            defaultChecked={status} 
            onChange={getStatus} 
            name="status" 
            value="on"/>
        </div>
        <div>
          <Label>Off</Label>
          <input 
            type="radio" 
            className="form__radio" 
            defaultChecked={!status} 
            onChange={getStatus} 
            name="status" 
            value="off"/>
        </div>
      </div> 
    </div>
  )
}

export default Status