import React from 'react'
import Home from './User/Home/Home'
import Dashboard from './Dashboard/dashboard/Dashboard'
import Products from './Dashboard/products/Products'
import Main from './commponents/common/Main/Main'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Category from './commponents/common/categoryAside/Category'
import Header from './DashboardCommponents/Header/Header'
import AddProduct from './Dashboard/AddProduct/AddProduct'
import HomeBanner from './Dashboard/HomeBanner/HomeBanner'
import AddHomeSlider from './Dashboard/AddHomeSlider/AddHomeSlider'
import Categorys from './Dashboard/Category/Category'
import AddCategory from './Dashboard/AddCategory/AddCategory'
import SubCategory from './Dashboard/SubCategory/SubCategory'
import AddSubCategory from './Dashboard/AddSubCategory/AddSubCategory'
import User from './Dashboard/User/User'
import Orders from './Dashboard/Orders/Orders'
import OrderTrack from './User/orderTrack/OrderTrack'
import HelpCenter from './User/helpCenter/HelpCenter'
import MyList from './User/myList/MyList'
import Address from './User/Adress/Adress'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Header><Dashboard/></Header>}/>
        <Route path='/HomeBannerSlider' element={<Header><HomeBanner/></Header>}/>
        <Route path='/AddHomeSlider' element={<Header><AddHomeSlider/></Header>}/>
        <Route path='/AddHomeSlider/:id' element={<Header><AddHomeSlider/></Header>}/>
        <Route path='/AddProducts' element={<Header><AddProduct/></Header>}/>
        <Route path='/Products' element={<Header><Products/></Header>}/>
        <Route path='/Category' element={<Header><Categorys/></Header>}/>
        <Route path='/AddCategory' element={<Header><AddCategory/></Header>}/>
        <Route path='/SubCategory' element={<Header><SubCategory/></Header>}/>
        <Route path='/AddSubCategory' element={<Header><AddSubCategory/></Header>}/>
        <Route path='/User' element={<Header><User/></Header>}/>
        <Route path='/Orders' element={<Header><Orders/></Header>}/>
        <Route path="/" element={<Main><Home/></Main>} />
        <Route path="/order-tracking" element={<Main><OrderTrack/></Main>} />
        <Route path="/help-center" element={<Main><HelpCenter/></Main>} />
        <Route path="/my-list" element={<Main><MyList/></Main>} />
        <Route path="/adress" element={<Main><Address/></Main>} />
        <Route path="/:category" element={<Main><Category/></Main>} />
        <Route path="/:category/:subcategory" element={<Main><Category/></Main>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
