import React from 'react'
import './CartItem.css'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import menuItems from '../../utils/products.json'


const CartItem = ({ item }) => {

    const { removeFromCart, decreaseCartQuantity, increaseCartQuantity, getItemQuantity } = useShoppingCart();
    const cartItem = menuItems.find(i => i.id === item.id)
    if (cartItem == null) return null

    const quantity = getItemQuantity(item.id);

    console.log(quantity)

    return (
        <div className='CartItem'>
            <div className='cartItemImg'>
                <img src={require(`../../assets/${cartItem.image}`)} alt="" />
            </div>

            <div className='cartItemInfo'>
                <div className='flex justify-between'>
                    <div className=' text-2xl'>
                        {cartItem.name}
                    </div>
                    <div className='font-bold'>
                        $ {cartItem.price}
                    </div>
                </div>



                <div className='flex gap-8 items-center'>

                    <div className='flex gap-0 justify-center my-2'>

                        <button
                            onClick={() => decreaseCartQuantity(item.id)}
                            className='px-3 py-[2px] bg-[var(--primary)] text-white border border-[var(--primary)] flex items-start text-lg'
                        >
                            -
                        </button>

                        <div className='border-2 border-[var(--primary)] text-[var(--primary)] px-4 py-[2px]'>
                            {quantity}
                        </div>


                        <button
                            onClick={() => increaseCartQuantity(item.id)}
                            className='px-3 py-[2px] bg-[var(--primary)] text-white border border-[var(--primary)] flex items-start text-lg'
                        >
                            +
                        </button>

                    </div>

                    <div className=''>
                        <button onClick={() => removeFromCart(item.id)}
                            className='font-bold py-[4px] px-6 border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white text-sm self-center'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem