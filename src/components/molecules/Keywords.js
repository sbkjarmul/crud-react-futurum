import React from 'react'
import Label from '../atoms/Label'

const Keywords = ({setKeywords, keywords}) => {

  const getKeywords = (e) => {
    setKeywords(e.target.value);
  }
  
  return (
    <div>
      <Label formField="keywords">Keywords</Label>
      <input className="form__input" onChange={getKeywords} value={keywords} type="text" name="keywords" required />
    </div>
  )
}

export default Keywords
