import React from 'react'
import Home from './User/Home/Home'
import Main from './commponents/common/Main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fashion from './User/Fashion/Fashion'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main><Home/></Main>} />
        <Route path="/fashion" element={<Main><Fashion/></Main>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
