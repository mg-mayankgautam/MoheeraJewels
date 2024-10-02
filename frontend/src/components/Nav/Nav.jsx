import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import icon from '../../assets/icons/navicon.png'
import cross from '../../assets/icons/crossicon.png'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart.svg'
import heart from '../../assets/icons/heart.svg'
import { Link, useLocation } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import './Nav.css'


const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navItemExpand, setNavItemExpand] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname])

  const closeNav = (e) => {
    if (e.target.classList.contains('NavContainer')) { 
      setIsNavOpen(false) 
    }
  }


  return (
    <>

      <div className='sticky top-0 flex grid grid-cols-3 items-center px-16 h-[80px] items-center justify-center font-body font-light bg-[var(--black)] text-sm z-10 font-body'>

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
          <Link to='/'><img src={search} className='w-4 max-w-[100%]' /></Link>
          <Link to='/cart'><img src={cart} className='w-4 max-w-[100%]' /></Link>
          <Link to='/'><img src={heart} className='w-4 max-w-[100%]' /></Link>
        </div>



        <div className={isNavOpen ? 'NavContainer navAnim1 active' : 'NavContainer navAnim1'}
          onClick={(e) => closeNav(e)}
        >
          <div className={isNavOpen ? 'NavMenu navAnim active' : 'NavMenu navAnim'}>

            <div>
              <div className='navHead'>SHOP</div>

              <div className='navItem'>
                <Link to='/collection'>SHOP BY CATEOGRY</Link>
              </div>
              <div className={navItemExpand ? 'navItem selected' : 'navItem'} onClick={() => setNavItemExpand(!navItemExpand)}>
                SHOP BY COLLECTION
              </div>

              <div className={navItemExpand ? 'navAnim active navItemExpand' : 'navAnim navItemExpand'}>
                <div className='navItem'>
                  <Link to='/collection'>on the move</Link>
                </div>
                <div className='navItem'>
                  <Link to='/collection'>essentials</Link>
                </div>
              </div>

              <div className='navItem'>
                <Link to='/collection'>NEW ARRIVALS</Link>
              </div>
            </div>

            <div>
              <div className='navHead'>DISCOVER</div>

              <div className='navItem'>
                <Link to='/ourstory'>about us</Link>
              </div>
              <div className='navItem'>
                <Link to='/bespokeprocess'>Bespoke Process</Link>
              </div>
              <div className='navItem'>
                <Link to='/'>Love letters</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Book an Appointment</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Contact</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Connect on Instagram</Link>
              </div>

            </div>


            <div>
              <div className='navHead'>Care</div>

              <div className='navItem'>
                <Link to=''>FAQs</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Size Guide</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Lab Diamond Guidance</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Privacy POlicy</Link>
              </div>
              <div className='navItem'>
                <Link to=''>Terms and Conditions</Link>
              </div>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Nav

//   < div className = { isNavOpen? 'NavMenu navAnim active': 'NavMenu navAnim' } >

// <div>
//   <div className='navHead'>SHOP</div>

//   <div className='navItem'>
//     <Link to='/collection'>SHOP BY CATEOGRY</Link>
//   </div>
//   <div className={navItemExpand ? 'navItem selected' : 'navItem'} onClick={() => setNavItemExpand(!navItemExpand)}>
//     SHOP BY COLLECTION
//   </div>

//   <div className={navItemExpand ? 'navAnim active navItemExpand' : 'navAnim navItemExpand'}>
//     <div className='navItem'>
//       <Link to='/collection'>on the move</Link>
//     </div>
//     <div className='navItem'>
//       <Link to='/collection'>essentials</Link>
//     </div>
//   </div>

//   <div className='navItem'>
//     <Link to='/collection'>NEW ARRIVALS</Link>
//   </div>
// </div>



// <div>
//   <div className='navHead'>DISCOVER</div>

//   <div className='navItem'>
//     <Link to='/ourstory'>about us</Link>
//   </div>
//   <div className='navItem'>
//     <Link to='/bespokeprocess'>Bespoke Process</Link>
//   </div>
//   <div className='navItem'>
//     <Link to='/'>Love letters</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Book an Appointment</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Contact</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Connect on Instagram</Link>
//   </div>

// </div>




// <div>
//   <div className='navHead'>Care</div>

//   <div className='navItem'>
//     <Link to=''>FAQs</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Size Guide</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Lab Diamond Guidance</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Privacy POlicy</Link>
//   </div>
//   <div className='navItem'>
//     <Link to=''>Terms and Conditions</Link>
//   </div>

// </div>

// </div >