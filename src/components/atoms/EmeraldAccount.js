import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import '../../App.css' 

const EmeraldAccount = () => {
  const { accountFunds } = useContext(GlobalContext);

  return (
    <div className="emerald-account">
      Emerald Account: <span className="emerald-account__fund">${ accountFunds }</span>
    </div>
  )
}

export default EmeraldAccount;
