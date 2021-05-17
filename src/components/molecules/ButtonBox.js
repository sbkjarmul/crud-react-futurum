import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'

const ButtonBox = ({submitName}) => {
  return (
    <div className="form__button-box">
    <Link className="form__button form__button--cancel" to="/">Cancel</Link>
    <Button>{submitName}</Button>
  </div>
  )
}

export default ButtonBox
