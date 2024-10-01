import React, { useEffect } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import Cart from '../Cart/Cart'
import icon from '../../assets/icons/cart.svg'
import Product from './Product'
import menuList from '../../utils/products.json'

const Collection = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const { cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartIsOpen, setCartIsOpen } = useShoppingCart();

  return (

    <>
      <div className='Collection'>


        <div className='flex gap-8 text-sm mb-8'>
          <button className='PD_shopBtns selected'>shop all products</button>
          <button className='PD_shopBtns'>shop rings</button>
          <button className='PD_shopBtns'>shop necklaces</button>
          <button className='PD_shopBtns'>shop earrings</button>
        </div>


        <div className='productCarousel'>

          {menuList.map((item, i) =>
            <Product item={item} key={i} />
          )}

        </div>


        <div className='flex flex-col items-center gap-2'>
          <div className='font-subheading text-white'>
            showing 4 out of 30 items
          </div>
          <button className='text-white w-[160px]'>load more</button>
        </div>


        <div className='font-heading text-white text-[48px] text-left'>
          See More
        </div>

      </div>

      {/* {cartIsOpen ?
        <Cart />
        :
        
      } */}
    </>
  )
}

export default Collection