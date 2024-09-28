import React, { useEffect } from 'react'
import Products from './Products'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import Cart from '../Cart/Cart'
import icon from '../../assets/carticon.png'

const Collection = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartIsOpen, setCartIsOpen } = useShoppingCart();

  return (
    <div className='relative'>
      <div className='p-16 menu'>

        <div className='font-subheading text-3xl mb-8'>Our Collection</div>

        <Products />
      </div>

      {/* {cartIsOpen ?
        <Cart />
        :
        
      } */}
    </div>
  )
}

export default Collection