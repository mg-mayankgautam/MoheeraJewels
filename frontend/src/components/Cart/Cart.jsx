import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../CartItem/CartItem';
import menuItems from '../../utils/products.json'
import { Link, useParams } from 'react-router-dom';

const Cart = () => {

    const { id } = useParams();

    const { cartQuantity, cartIsOpen, setCartIsOpen, cartItems } = useShoppingCart();

    const [tableNum, setTableNum] = useState();

    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        setTotalPrice(() =>
            cartItems.reduce((total, cartItem) => {
                const item = menuItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
            }, 0)
        )
    }, [cartItems])


    const submitOrder = async (e) => {
        e.preventDefault();

        console.log(cartItems, totalPrice, tableNum, id)

        if (cartItems, totalPrice, tableNum) {

            try {


            }
            catch (err) { console.log(err); }
        }

    }

    return (

        // <div className='CartSlider'>
        <div className='Cart font-body'>

            <div className='bg-white p-8 pt-4 flex-grow custom-shadow'>

                <div className='closeCartBtn'>
                    <Link to='/collection'>Browse Collection</Link>
                </div>

                {cartItems.length > 0 ?
                    <>
                        <div className='font-subheading text-3xl'>
                            Shopping Cart
                        </div>

                        <div className='text-sm mt-1'>
                            the pieces you've liked
                        </div>

                        <div className='flex flex-col mt-8'>
                            {cartItems && cartItems.map((item, i) => (
                                <CartItem key={i} item={item} />
                            ))
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className='font-subheading text-3xl'>
                            Your Shopping Cart is Empty
                        </div>

                        <div className='text-lg mt-4'>
                            <Link to='/collection'>Shop Here</Link>
                        </div>

                    </>
                }

            </div>


            {cartItems.length > 0 ?
        
            <div className='PlaceOrderBtns'>

                <div className='flex gap-2 items-center text-lg'>
                    <div className='font-subheading font-bold'>SubTotal ({cartQuantity} items) :</div>
                    <div className='text-xl'>${totalPrice}</div>

                </div>


                <button onClick={(e) => submitOrder(e)} className='font-bold py-2 px-6 border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'>
                    Place Order
                </button>
            </div>

            :
            <div className='w-[300px]'>

            </div>
            }
        </div>
        // </div>
    )
}

export default Cart