import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Label from '../atoms/Label'
import Button from '../atoms/Button'

const Form = () => {
  return (
    <div>
      <form className="form">
        <Label formField="campaign-name">Name</Label>
        <input className="form__input" type="text" name="campaign-name" required />
        
        <Label formField="keywords">Keywords</Label>
        <input className="form__input" type="text" name="keywords" required />

        <Label formField="bid-amount">Bid amount</Label>
        <input className="form__input" type="number" name="bid-amount" min="100" placeholder="100" required />

        <Label formField="campaign-fund">Campaign fund</Label>
        <input className="form__input" type="text" name="campaign-fund" required />

        <Label formField="status">Status</Label>
        <input type="checkbox" name="status" required/>

        <Label formField="town">Town</Label>
        <select className="form__input" name="town">
          <option value="chicago">Chicago</option>
          <option value="san-francisco">San Francisco</option>
          <option value="new-york">New York</option>
          <option value="austin">Austin</option>
          <option value="miami">Miami</option>
        </select>

        <Label formField="radius">Radius</Label>
        <input className="form__input" type="number" name="radius" required />

        <div className="form__button-box">
          <Link className="form__button form__button--cancel" to="/">Cancel</Link>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
