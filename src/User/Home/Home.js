import React from 'react'
import Slider from '../../commponents/common/slider/Slider'
import CatSlider from '../../commponents/common/catSlider/CatSlider'
import { FaShippingFast } from "react-icons/fa";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../../css/style.css"
import ProductSlider from '../../commponents/common/productSlider/ProductSlider';
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.jpg'
import banner4 from '../../assets/img/banner4.jpg'
import LatestProduct from '../../commponents/common/latestProduct/latesProduct';


const Home = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='slider'>
        <Slider/>
        <CatSlider/>
      </div>
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-4 leftSection'>
            <h3>Popular Products</h3>
            <p>Do not miss the current offers until theend of March.</p>
          </div>
          <div className='col-8 rightSec'>
             <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="FASHION" />
        <Tab label="ELECTRONICS" />
        <Tab label="BAGS" />
        <Tab label="FOOTWEAR" />
        <Tab label="GROCERIES" />
        <Tab label="BEAUTY" />
        <Tab label="WELLNESS" />
        <Tab label="JEWELERY" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
          </div>
        </div>
        <div className='row'>
          <ProductSlider/>
        </div>
      </section>
      <section classname="container-fluid">
        <div className='container'>
          <div className='col shipping d-flex justify-content-between'>
            <span className='span' style={{fontSize:"14pt",fontWeight:"bold"}}><FaShippingFast style={{fontSize:"23pt"}} /> FREE SHIPPING</span>
            <span className='span'>Free Delivery Now On Your First Order And Over $200</span>
            <span className='span' style={{fontSize:"14pt",fontWeight:"bold"}}>-ONLY $200*</span>
          </div>
        </div>
      </section>
     
      <section>
      <div className='row py-4'>
          <div className='col-4 leftSection'>
            <h3>Latest Products</h3>
        </div>
        <LatestProduct/>
        </div>
      </section>
      <section>
      <div className='row'>
          <div className='col-4 leftSection'>
            <h3>Featured Products</h3>
        </div>
        <LatestProduct/>
        </div>
      </section>
    </>
  )
}

export default Home
