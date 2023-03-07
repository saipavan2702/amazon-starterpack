import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingCart} from 'react-icons/cg'

const Header = () => {
  return (
    <div className={css.head}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>Kay</span>
        </div>

        <div className={css.right}>
            <div className={css.menu}>
               <ul className={css.menu}>
                 <li>Menu</li>
                 <li>Brands</li>
                 <li>New</li>
                 <li>Sales</li>
               </ul>
            </div>

            <input type='text' className={css.search} placeholder='Your wish..'/>
            <CgShoppingCart className={css.cart}/>
            
        </div>
        
    </div>
  )
}

export default Header
