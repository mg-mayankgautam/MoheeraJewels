import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import icon from './assets/icons/cart.svg'
import { useShoppingCart } from './context/ShoppingCartContext';


const Layout = () => {

  const { cartQuantity } = useShoppingCart();

  return (

    <div className="App">

      <Nav />

      <Outlet />

      {cartQuantity > 0 ?
        <div className='px-8 fixed right-0 bottom-8  rounded-2xl flex justify-center items-center'>
          <Link to='/cart'>
            <img src={icon} className='h-8 object-contain w-full' />
          </Link>

          <div className='absolute bottom-[-10px] right-[20px] rounded-xl bg-[var(--secondary)] text-white custom-shadow h-6 w-6 flex items-center justify-center'>{cartQuantity}</div>
        </div>
        : null
      }

      {/* <Footer /> */}
    </div>

  )
}

export default Layout
