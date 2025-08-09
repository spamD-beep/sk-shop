import React from 'react'
import Header from '../Header'
import '../../../css/style.css'
const Main = ({ children }) => {
  return (
    <div>
      <Header/>
    <div className='children'>
        {children}
    </div>

    </div>
  )
}

export default Main;