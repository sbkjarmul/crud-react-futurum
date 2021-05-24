import React, { useContext } from 'react'
import '../../App.css'
import { GlobalContext } from '../../context/GlobalContext'

const Loader = () => {
  const { isLoader } = useContext(GlobalContext);

  const hideLoader = () => {
    if ( isLoader ) {
      return 'loader'
    }

    return 'loader loader--off'
  }

  return (
    <div className={ hideLoader() }></div>
  )
}

export default Loader