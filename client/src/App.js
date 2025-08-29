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
import Signin from './commponents/Signin'
import Signup from './commponents/Signup'
import Account from './User/Account/Account'
import ProtectedRoute from './commponents/ProtectedRoute'
import OtpVerify from './commponents/VerifyOtp'
import Checkout from './commponents/Checkout'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/verify-otp" element={<OtpVerify/>}/>
      <Route path="/my-account" element={
        <ProtectedRoute allowedRoles={["user","Admin"]}>
        <Main><Account/></Main>
        </ProtectedRoute>
        }/>
      <Route path="/checkout" element={
        <ProtectedRoute allowedRoles={["user","Admin"]}>
        <Main><Checkout/></Main>
        </ProtectedRoute>
        }/>
        <Route path='/dashboard' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><Dashboard/></Header>
          </ProtectedRoute>
          }/>
        <Route path='/HomeBannerSlider' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><HomeBanner/></Header>
          </ProtectedRoute>
          }/>
        <Route path='/AddHomeSlider' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><AddHomeSlider/></Header>
            </ProtectedRoute>
          }/>
          
        <Route path='/AddHomeSlider/:id' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><AddHomeSlider/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/AddProducts' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><AddProduct/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/Products' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><Products/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/Category' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><Categorys/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/AddCategory' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><AddCategory/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/SubCategory' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><SubCategory/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/AddSubCategory' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><AddSubCategory/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/User' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><User/></Header>
            </ProtectedRoute>
          }/>
        <Route path='/Orders' element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <Header><Orders/></Header>
            </ProtectedRoute>
          }/>
        <Route path="/" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><Home/></Main>
            </ProtectedRoute>
          } />
        <Route path="/order-tracking" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><OrderTrack/></Main>
            </ProtectedRoute>
          } />
        <Route path="/help-center" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><HelpCenter/></Main>
            </ProtectedRoute>
          } />
        <Route path="/my-list" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><MyList/></Main>
            </ProtectedRoute>
          } />
        <Route path="/adress" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><Address/></Main>
            </ProtectedRoute>
          } />
        <Route path="/:category" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><Category/></Main>
            </ProtectedRoute>
          } />
        <Route path="/:category/:subcategory" element={
          <ProtectedRoute allowedRoles={["Admin","user"]}>
          <Main><Category/></Main>
            </ProtectedRoute>
          } />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
