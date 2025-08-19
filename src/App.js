import React from 'react'
import Home from './User/Home/Home'
import Dashboard from './Dashboard/dashboard/Dashboard'
import Products from './Dashboard/products/Products'
import Main from './commponents/common/Main/Main'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Fashion from './User/Fashion/Fashion'
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
import Electrons from './User/Electrons/Electrons'
import Bags from './User/Bags/Bags'
import Footwear from './User/Footwear/Footwear'
import Groceries from './User/Groceries/Groceries'
import Beauty from './User/Beauty/Beauty'
import Wellness from './User/Wellness/Wellness'
import Jewelery from './User/Jewelery/Jewelery'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Header><Dashboard/></Header>}/>
        <Route path='/HomeBannerSlider' element={<Header><HomeBanner/></Header>}/>
        <Route path='/AddHomeSlider' element={<Header><AddHomeSlider/></Header>}/>
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
        <Route path="/fashion" element={<Main><Category><Fashion/></Category></Main>} />
        <Route path="/electronics" element={<Main><Category><Electrons/></Category></Main>} />
        <Route path="/bags" element={<Main><Category><Bags/></Category></Main>} />
        <Route path="/footwear" element={<Main><Category><Footwear/></Category></Main>} />
        <Route path="/groceries" element={<Main><Category><Groceries/></Category></Main>} />
        <Route path="/beauty" element={<Main><Category><Beauty/></Category></Main>} />
        <Route path="/wellness" element={<Main><Category><Wellness/></Category></Main>} />
        <Route path="/jewelery" element={<Main><Category><Jewelery/></Category></Main>} />
        <Route path="/fashion" element={<Main><Category><Fashion/></Category></Main>} />
        <Route path="/fashion" element={<Main><Category><Fashion/></Category></Main>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
