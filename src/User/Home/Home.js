import React from 'react'
import Slider from '../../commponents/common/slider/Slider'
import CatSlider from '../../commponents/common/catSlider/CatSlider'
import { FaShippingFast } from "react-icons/fa";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "../../css/style.css"
import ProductSlider from '../../commponents/common/productSlider/ProductSlider';
import LatestProduct from '../../commponents/common/latestProduct/latesProduct';
import BannerSlider from '../../commponents/common/bannerSlider/BannerSlider';
import SecondBanner from '../../commponents/common/secondBanner/SecondBanner';
import BeautySlider from '../../commponents/common/beautySlider/BeautySlider';
import FootwearSlider from '../../commponents/common/footwear/FootwearSlider';
import JewelerySlider from '../../commponents/common/jewelery/JewelerySlider';
import ElectronSlider from '../../commponents/common/electronsSlider/ElectronSlider';
import WellnessSlider from '../../commponents/common/wellnessSlider/WellnessSlider';
import BagSlider from '../../commponents/common/bagSlider/BagSlider';
import FeaturedSlider from '../../commponents/common/FeaturedProduct/FeaturedProduct';


const Home = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='slider' style={{background:"#e4e3e399"}}>
        <Slider/>
        <CatSlider/>
      </div>
      <section className='container-fluid'>
        <div className='row py-4'>
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
        <BannerSlider/>
      </section>
      <section>
      <div className='row py-4'>
          <div className='col-4 py-4 leftSection'>
            <h3>Latest Products</h3>
        </div>
        <LatestProduct/>
        </div>
      </section>
      <section>
      <div className='row'>
          <div className='col-4 py-4 leftSection'>
            <h3>Featured Products</h3>
        </div>
        <FeaturedSlider/>
        </div>
      </section>
      <section>
        <SecondBanner/>
      </section>
      <section>
      <div className='col-4 py-4 leftSection'>
            <h3>Beauty</h3>
        </div>
        <BeautySlider/>
      </section>
      <section>
      <div className='col-4 py-4 leftSection'>
            <h3>Footwear</h3>
        </div>
        <FootwearSlider/>
      </section>
      <section>
      <div className='col-4 py-4 leftSection'>
            <h3>Jewelery</h3>
        </div>
        <JewelerySlider/>
      </section>
      <section>
      <div className='col-4 py-4 leftSection'>
            <h3>Electrons</h3>
        </div>
        <ElectronSlider/>
      </section>
      <section>
      <div className='col-4 py-4 leftSection'>
            <h3>Wellness</h3>
        </div>
        <WellnessSlider/>
      </section>
      <section>
      <div className='col-4 py-4 leftSection'>
            <h3>Bags</h3>
        </div>
        <BagSlider/>
      </section>
    </>
  )
}

export default Home;
