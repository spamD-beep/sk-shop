import React from 'react'
import '../../css/style.css'
const Nav = () => {
  return (
    <div div className='container-fluid navs'>
        <div className='row navrow'>
            <div className='col-3 navitem'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left-icon lucide-align-left"><path d="M15 12H3"/><path d="M17 18H3"/><path d="M21 6H3"/></svg>
        <div>SHOP BY CATEGORIES</div>
        <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </div>
        <div className='col-6 navbar'>
            <ul className=''>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
                <li><a>Home</a></li>
            </ul>
        </div>
        <div className='col-3 Fre-Inter'>
            <span>
            Free Intrenational Delivery
            </span>
        </div>
        </div>
    </div>
  )
}

export default Nav
