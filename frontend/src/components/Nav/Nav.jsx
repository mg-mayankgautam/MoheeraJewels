import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import icon from '../../assets/icons/navicon.png'
import cross from '../../assets/icons/crossicon.png'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import heart from '../../assets/icons/heart.svg'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'


const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>

      <div className='relative flex grid grid-cols-3 items-center px-16 h-[80px] items-center justify-center font-body font-light bg-[var(--black)] text-sm z-2 font-body'>

        <div className=''>
          {isNavOpen ?
            <img src={cross} className='w-4 max-w-[100%] cursor-pointer' onClick={() => setIsNavOpen(false)} />
            : <img src={icon} className='h-4 max-h-[100%] cursor-pointer' onClick={() => setIsNavOpen(true)} />
            }
        </div>

        <div className='flex justify-center items-center'>
          <Link to='/'><img src={logo} alt="logo" className='h-[56px] object-contain' /></Link>
        </div>

        <div className='flex justify-end items-center gap-12'>
          <Link to='/'><img src={search} className='w-4 max-w-[100%]'/></Link>
          <Link to='/cart'><img src={cart} className='w-4 max-w-[100%]'/></Link>
          <Link to='/'><img src={heart} className='w-4 max-w-[100%]'/></Link>
        </div>

      </div>


      <div className={isNavOpen? 'bg-[var(--black)] absolute top-[80px] left-0 right-0 py-6 px-16 flex flex-col items-start z-3 navAnim active custom-shadow font-body': 'bg-[var(--black)] absolute top-[80px] left-0 right-0 py-0 px-16 flex flex-col items-start z-1 navAnim font-body'}>
        <div>
          <Link to='/ourstory'>OUR STORY</Link>
        </div>

        <div>
          <Link to='/customengagementrings'>CUSTOM ENGAGEMENT RINGS</Link>
        </div>

        <div>
          <Link to='/collection'>COLLECTION</Link>
        </div>

        <div>
          <Link to='/bespokeprocess'>BESPOKE PROCESS</Link>
        </div>
      </div>

    </>
  )
}

export default Nav