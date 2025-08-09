
import React,{ useState } from 'react'
import '../../css/style.css'
import { Link } from 'react-router-dom'
import { MdOutlineRocketLaunch } from "react-icons/md";
import Aside from './Aside';

const Nav = () => {

   const [open,setOpen]=useState(true);
   const openAside=()=>{
    setOpen(prev =>!prev )
   }
   const closeAside=()=>{
    setOpen(prev=>!prev)
   }
    const nav = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Fashion",
            path: "/fashion"
        },
        {
            label: "Electronics",
            path: "/electronics"
        },
        {
            label: "Bags",
            path: "/bags"
        },
        {
            label: "Footwear",
            path: "/footwear"
        },
        {
            label: "Groceries",
            path: "/groceries"
        },
        {
            label: "Beauty",
            path: "/beauty"
        },
        {
            label: "Wellness",
            path: "/wellness"
        },
        {
            label: "Jewelery",
            path: "/jewelery"
        }
    ]

    return (
        <div div className='container-fluid navs'>
            <Aside open={open} close={closeAside}/>

            <div className='row navrow'>
                <div className='col-2 navitem'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left-icon lucide-align-left"><path d="M15 12H3" /><path d="M17 18H3" /><path d="M21 6H3" /></svg>
                    <div>CATEGORIES</div>
                    <svg onClick={openAside} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <div className='col-7 navbar'>
                    <ul className=''>
                        {nav.map((nav,index) => (
                            
                            <li key={index}><Link to={nav.path}>{nav.label}</Link></li>
                            
                        ))}
                    </ul>
                </div>
                <div className='col-3 Fre-Inter'>
                    <span>
                        <MdOutlineRocketLaunch style={{fontSize:"12pt",marginRight:"5px"}} />
                        Free Intrenational Delivery
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Nav;
