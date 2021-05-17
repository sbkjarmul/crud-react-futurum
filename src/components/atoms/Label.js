import React from 'react'

const Label = ({ formField, children }) => {
  return (
      <label className="form__label" for={formField} >{children}</label>
  )
}

export default Label
