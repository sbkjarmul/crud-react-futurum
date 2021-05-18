import React from 'react'
import Label from '../atoms/Label'

const Keywords = ({setKeywords}) => {

  const getKeywords = (e) => {
    setKeywords(e.target.value);
  }
  
  return (
    <div>
      <Label formField="keywords">Keywords</Label>
      <input className="form__input" onChange={getKeywords} type="text" name="keywords" required />
    </div>
  )
}

export default Keywords
