import React from 'react'
// import { Link, Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import icon from './assets/icons/cart.svg'
import { useShoppingCart } from './context/ShoppingCartContext';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import axios from 'axios';
import { useEffect } from 'react';

const Layout = () => {

  const { cartQuantity } = useShoppingCart();




  const { auth } = useAuth();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    // console.log('auth hai ki nahi',auth)
    const checkauthentication = async () => {
      try {

        const response = await axios.get('http://localhost:4700/refresh',);
        // console.log(response)
        const token = response.data.accessToken;
        // // Split the token and taken the second

        const base64Url = token?.split(".")[1];

        // // Replace "-" with "+"; "_" with "/"
        const base64 = base64Url?.replace("-", "+").replace("_", "/");

        const TokenDataWithoutToken = JSON.parse(window?.atob(base64));
        console.log('Response:', TokenDataWithoutToken);

        const Role = TokenDataWithoutToken.role

        const TokenData = { username: TokenDataWithoutToken.username, role: TokenDataWithoutToken.role, RawToken: token }

        try {
          if (Role) {
            console.log(Role, 'brkpnt 2')
            setAuth(TokenData);//isme role set nahi ho raha
            console.log(Role, 'brkpnt 3')
            // console.log(state.prev.pathname)
            navigate('/dashboard');
          }
          else {
            console.log(Role, 'role not found')
          }
        } catch (e) {
          console.log('e', e);
        }

      } catch (e) { console.log(e) }
    }

    if (!auth.role) checkauthentication();
  }, [])


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
