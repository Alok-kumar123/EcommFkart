import React, { useState } from 'react'
import { createContext } from 'react';

export const DataContext=createContext(null);

const Dataprovider = ({children}) => {
    const [account,setAccount]=useState(''); 
  return (
     <DataContext.Provider value={{
          account,
          setAccount
     }}>
      {children}
     </DataContext.Provider>
  )
}

export default Dataprovider
