import React, { useState } from 'react'
import './collection.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';

const Product = ({ item }) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(item.id);

    const [hover, setHover] = useState(false);
    const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);


    return (
        <>
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

                        <div>INR {item.price}</div>

                        {quantity === 0 ? (

                            <button
                                onClick={() => { increaseCartQuantity(item.id); setShowAddedToCartModal(true) }}
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


            {showAddedToCartModal ?
                <div className='AddedToCartModalContainer'>
                    <div className='AddedToCartModal'>
                        <div className='absolute top-[-12px] right-[6px] text-4xl flex items-center cursor-pointer'
                            onClick={() => setShowAddedToCartModal(false)}
                        >
                            ×
                        </div>

                        <div className='flex justify-center items-end gap-8'>
                            <div>
                                <div className='font-heading text-3xl uppercase'>{item.name}</div>
                                <div className='font-heading uppercase'>{item.modelno}</div>
                                <div className='font-subheading'>For INR {item.price}</div>
                            </div>

                            <div className='modal_imgDiv'>
                                <img src={require(`../../assets/${item.image}`)} />
                            </div>
                        </div>

                        <div className='text-[var(--secondary)] mt-8'>ADDED TO CART!</div>
                    </div>
                </div>
                : null}

        </>
    )
}

export default Product