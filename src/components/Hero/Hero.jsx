import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={css.container}>

        {/*----------------------br------------------------------*/}
        <div className={css.sides}>
            <span className={css.text1}>Skin care cosmetics</span>
            <div className={css.text2}>
                <span>Classics</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>


        {/*----------------------br------------------------------*/}
        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt='' width={600}/>
            <div className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span> Best Signup offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>


        {/*----------------------br--------------------------------*/}
        <div className={css.sides}>
            <div className={css.traffic}>
                <span>100M</span>
                <span>Monthly traffic</span>
            </div>

            <div className={css.customers}>
                <span>1M</span>
                <span>Happy Customers!!</span>
            </div>
        </div>

    </div>
  )
}

export default Hero
