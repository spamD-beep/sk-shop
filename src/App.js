import React from 'react'
import Home from './User/Home/Home'
import Main from './commponents/common/Main/Main'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main><Home/></Main>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
