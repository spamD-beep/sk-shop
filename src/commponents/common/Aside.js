import React from 'react'
import '../../css/style.css'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Aside = ({open,close}) => {

  const aside=[
    {
      label:"Fashion",
      path:"/fashion"
    },
    {
      label:"Jewelery",
      path:"/jewelery"
    },
    {
      label:"Watches",
      path:"/watches"
    },
    {
      label:"Outerwear",
      path:"/outerwear"
    },
    {
      label:"Cosmetics",
      path:"/cosmetics"
    },
    {
      label:"Accessories",
      path:"/asseccories"
    },
    {
      label:"Electronic",
      path:"/electronic"
    },
    {
      label:"Furniture",
      path:"/furniture"
    },
    {
      label:"Sunglasses",
      path:"/asseccories"
    },
    {
      label:"Rolling Diamond",
      path:"/rolling-diamond"
    },
    {
      label:"Xbox Controller",
      path:"/Xbox-Controller"
    },
    {
      label:"Leather Watches",
      path:"/Leather-Watches"
    },
    {
      label:"Smart Tablet",
      path:"/Xbox-Controller"
    },
    {
      label:"Purse",
      path:"/purse"
    },
    {
      label:"Sunglasses",
      path:"/sunglasses"
    },
  ]

  return (
    <aside className={`${open ? "closeAside":"aside"}`}>
        <div className='head'>
            <span>Shop By Categories</span>
            <IoClose onClick={close} style={{ fontSize:"15pt",color:"rgb(66,66,66)",cursor:"pointer" }} />
        </div>
        <ul>
          {aside.map((aside,index)=>(

          <li key={index}><Link to={aside.path}>{aside.label}</Link></li>
          ))}
        </ul>
    </aside>
  )
}

export default Aside
