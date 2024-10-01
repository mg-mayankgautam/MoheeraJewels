import React, { useState } from 'react'
import './collection.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';

const Product = ({ item }) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(item.id);

    const [hover, setHover] = useState(false);

    return (

        <div className='min-h-[320px]'
        onMouseEnter={e => setHover(true)}
        onMouseLeave={e => setHover(false)}
        >

            <div className='ProductDiv'>
                <div className='text-[11px]'>
                    {item.modelno}
                </div>

                <div className='PD_imgDiv'>
                    <img src={require(`../../assets/${item.image}`)} />
                </div>

                <div className='flex justify-between text-[14px] mt-4'>
                    <div>{item.name}</div>
                    <div className='flex justify-end gap-4'>
                        {item.carat.map(e =>
                            <div className='PD_carat'>{e}</div>
                        )}
                    </div>
                </div>

            </div>

            {!hover ?
                <div className='PD_desc'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                </div>
                :

                <div className='PD_actions'>

                    <div>{item.price} INR</div>

                    {quantity === 0 ? (

                        <button
                            onClick={() => increaseCartQuantity(item.id)}
                            className='PD_actionBtn'
                        >
                            + Add to Cart
                        </button>
                    ) :
                        <div className='flex gap-8 items-center'>

                            <div className='flex gap-0 justify-stretch'>

                                <button
                                    onClick={() => decreaseCartQuantity(item.id)}
                                    className='bg-white text-[var(--secondary)] border border-white flex items-center text-lg rounded-none h-[30px]'
                                >
                                    -
                                </button>

                                <div className='border border-white text-white px-4 rounded-none h-[30px]'>
                                    {quantity}
                                </div>


                                <button
                                    onClick={() => increaseCartQuantity(item.id)}
                                    className='bg-white text-[var(--secondary)] border border-white flex items-center text-lg rounded-none h-[30px]'
                                >
                                    +
                                </button>

                            </div>

                            {/* <div className=''> */}
                            <button onClick={() => removeFromCart(item.id)}
                                className='PD_actionBtn'>
                                Delete
                            </button>
                            {/* </div> */}
                        </div>
                    }
                </div>
            }
        </div>

    )
}

export default Product