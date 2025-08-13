import React from 'react'
import Home from './User/Home/Home'
import Main from './commponents/common/Main/Main'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Fashion from './User/Fashion/Fashion'
import Category from './commponents/common/categoryAside/Category'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main><Home/></Main>} />
        <Route path="/fashion" element={<Main><Category><Fashion/></Category></Main>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
