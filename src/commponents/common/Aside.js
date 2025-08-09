import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";


const Aside = () => {

    const aside=[
        {
            label:"Fashion",
            path:"/Fashion",
            children:[
                {
                    label:"Apparel",
                    path:"/Apparel",
                    children:[
                        {
                            label:"Smart Tablet",
                            path:"/smartTablet" 
                        },
                        {
                            label:"Crepe T-Shirt",
                            path:"/crepe-t-shirt"
                        },
                        {
                            label:"Leather Watch",
                            path:"/leatherWatch"
                        },
                        {
                            label:"Rolling Diamond",
                            path:"/rollingDiamond"
                        }
                    ]
                },
                {
                    label:"Outerwear",
                    path:"/Outerwear"
                },
                {
                    label:"Footwear",
                    path:"/Footwear"
                }
            ]
        },
        {
            label:"Jewelery",
            path:"/Jewelery"
        },
        {
            label:"Watches",
            path:"/watches"
        }
    ]
    const renderMenu=(items)=>{
        return(
            <ul>
      {
        items.map((item,index)=>{
            return(
        <li  key={index}><Link to={item.path}>{item.label}</Link>
        {item.children && (
            <>
                     <FaRegPlusSquare /> 
                     {renderMenu(item.children)}
         </>
        )}
        </li>
            )
        })
      }
      </ul>
        )
    }
  return (
    <div className='aside'>
    <div className='head'>
        <span style={{ fontWeight:"bold",color:"rgb(66, 66, 66);"}}>Shop By Categories</span>
        <IoClose style={{fontSize:"15pt"}} />
        </div>
      {renderMenu(aside)}
    </div>
  )
}

export default Aside
