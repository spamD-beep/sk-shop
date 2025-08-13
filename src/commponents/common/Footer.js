import React from 'react'
import "../../css/style.css"
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturnBold } from "react-icons/pi";
import { TbCreditCardPay } from "react-icons/tb";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { CiChat1 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CgPaypal } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import Footer1 from "../../assets/img/footer1.png";
import Footer2 from "../../assets/img/footer2.png";
import Footer3 from "../../assets/img/footer3.png";
import Footer4 from "../../assets/img/footer4.png";
import Footer5 from "../../assets/img/footer5.png";
const Footer = () => {
  return (
    <div className='container-fluid' style={{background:"rgb(244, 241, 241)"}}>
    <div className='inform'>
        <div className='info'>
            <FaShippingFast className='hoverInfo'/>
            <span style={{fontSize:"15pt",fontWeight:"bold"}}>Free Shipping</span>
            <span style={{fontSize:"11pt"}}>For all Orders Over $100</span>
        </div>
        <div className='info'>
            <PiKeyReturnBold className='hoverInfo'/>
            <span style={{fontSize:"15pt",fontWeight:"bold"}}>30 Days Returns</span>
            <span style={{fontSize:"11pt"}}>For an Exchange Product</span>
        </div>
        <div className='info'>
            <TbCreditCardPay className='hoverInfo'/>
            <span style={{fontSize:"15pt",fontWeight:"bold"}}>Secured Payment</span>
            <span style={{fontSize:"11pt"}}>Payment Cards Accepted</span>
        </div>
        <div className='info'>
            <IoGiftSharp className='hoverInfo'/>
            <span style={{fontSize:"15pt",fontWeight:"bold"}}>Special Gifts</span>
            <span style={{fontSize:"11pt"}}>Our First Product Order</span>
        </div>
        <div className='info'>
            <BiSupport className='hoverInfo' />
            <span style={{fontSize:"15pt",fontWeight:"bold"}}>Support 24/7</span>
            <span style={{fontSize:"11pt"}}>Contact us Anytime</span>
        </div>
    </div>
    <div className='row p-4'>
        <div className='col-3 firstFooter'>
            <div style={{fontSize:"17pt",fontWeight:"bold"}}>Contact us</div>
            <div>
            <div style={{color:"rgb(80, 79, 79)",fontSize:"12pt"}}>Classyshop - Mega Super Store</div>
            <div style={{color:"rgb(80, 79, 79)",fontSize:"12pt"}}>507-Union Trade Centre France</div>
            </div>
            <div style={{color:"rgb(80, 79, 79)",fontSize:"12pt"}}>sales@yourcompany.com</div>
            <div style={{fontSize:"17pt",color:"red",fontWeight:"bold"}}>(+91) 9876-543-210</div>
            <div style={{fontSize:"15pt"}}>
            <div className='row' style={{display:"flex",alignItems:"center"}}>
            <div className='col-2'>
                <CiChat1 style={{color:"red",fontSize:"35pt",fontWeight:"bold"}}/>
                </div><div className='col-7' style={{color:"rgb(80, 79, 79)"}}>
                Online Chat <br/>
Get Expert Help
</div>
            </div>
            </div>
        </div>
        <div className='col-9'>
            <div className='row' style={{padding:"0px 20px"}}>
                <div className='col-3' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <div style={{fontSize:"18pt",fontWeight:"bold",marginBottom:"5px"}}>Products</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Prices drop</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>New products</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Best sales</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Contact us</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Sitemap</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Stores</div>
                </div>
                <div className='col-4' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <div style={{fontSize:"18pt",fontWeight:"bold",marginBottom:"5px"}}>Our company</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Delivery</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Legal Notice</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Terms and conditions of use</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>About us</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Secure payment</div>
                    <div className='secHoverFooter' style={{fontSize:"12pt"}}>Login</div>
                </div>
                <div className='col-5' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    <div style={{fontSize:"18pt",fontWeight:"bold",marginBottom:"5px"}}>Subscribe to newsletter</div>
                    <div style={{color:"rgb(80, 79, 79)",fontSize:"12pt"}}>Subscribe to our latest newsletter to get news about special discounts.</div>
                    <input type="text" placeholder='Your Email Adress' style={{padding:"10px"}}/>
                    <button style={{ width:"150px",padding:"10px 20px",background:"red",color:"white"}}>SUBSCRIBE</button>
                    <div style={{fontSize:"11pt",color:"rgb(80, 79, 79)"}}><input type="checkbox" style={{width:"20px"}}/>I agree to the terms and conditions and the privacy policy</div>
                </div>
            </div>
        </div>
    </div>
    <div className='row' style={{background:"white",padding:"20px 10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className='col-3 icon'>
            <div className='mediaIcon'>
            <FaFacebookF style={{fontSize:"15pt"}}/>
            </div>
            <div className='mediaIcon'>
            <FiYoutube style={{fontSize:"15pt"}}/>
            </div>
            <div className='mediaIcon'>
            <CgPaypal style={{fontSize:"15pt"}}/>
            </div>
            <div className='mediaIcon'>
            <FaInstagram style={{fontSize:"15pt"}}/>
            </div>
        </div>
        <div className='col-3'>
            <div style={{color:"rgb(80, 79, 79)"}}>© 2024 - Ecommerce Template</div>
        </div>
        <div className='col-2' style={{display:"flex"}}>
            <div><img src={Footer1}/></div>
            <div><img src={Footer2}/></div>
            <div><img src={Footer3}/></div>
            <div><img src={Footer4}/></div>
            <div><img src={Footer5}/></div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
