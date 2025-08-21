import React from 'react'
import Header from '../Header'
import '../../../css/style.css'
import Footer from '../Footer'
const Main = ({ children }) => {
  return (
    <div>
      <Header/>
    <div className='children'>
        {children}
    </div>
    <Footer/>
    </div>
  )
}

export default Main;