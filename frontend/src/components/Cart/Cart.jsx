import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../CartItem/CartItem';
import menuItems from '../../utils/products.json'
import { Link, useParams } from 'react-router-dom';
import icon from '../../assets/icons/cart.svg'

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
        <>
            <div className='CartSlider'>
                <div className='Cart font-body'>

                    <div>

                        <div className='closeCartBtn' onClick={() => setCartIsOpen(false)}>×</div>

                        <div className='cartIcon mb-2'><img src={icon} /></div>
                        <div className='font-heading text-[32px] text-[var(--secondary)] text-center'>
                            CART ({cartQuantity})
                        </div>

                        {cartItems.length > 0 ?
                            <div className='flex flex-col mt-2 cartItemsList'>
                                {cartItems && cartItems.map((item, i) => (
                                    <CartItem key={i} item={item} />
                                ))
                                }
                            </div>
                            :
                            <div className='font-subheading text-xl text-[var(--secondary)]'>
                                Your Shopping Cart is Empty
                            </div>
                        }

                    </div>

                    <div className='PlaceOrderBtns'>
                        {cartItems.length > 0 ?
                            <>
                                <div className='flex justify-between gap-4'>
                                    <div>SUBTOTAL</div>
                                    <div>INR {totalPrice}</div>
                                </div>

                                <button onClick={(e) => submitOrder(e)}
                                    className='cart_actionBtn'>
                                    checkout
                                </button>
                            </>

                            :
                            <Link to='/collection'>
                                <button className='cart_actionBtn'>
                                    explore collection
                                </button>
                            </Link>
                        }
                    </div>



                </div>
            </div >

        </>
    )
}

export default Cart