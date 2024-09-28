import React from 'react'
import './MenuItem.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';

const Product = ({ item }) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(item.id);
    // const quantity = 0;


    return (

        <div className='w-[300px] h-[200px] relative my-8'>
            <div className='h-[200px] w-[300px] custom-shadow'>
                <img src={require(`../../assets/${item.image}`)} alt="" className='object-cover object-center w-[100%] h-[100%]' />
            </div>

            <div className='flex flex-col items-center justify-center gap-1 p-2 pt-4 absolute top-0 left-0 right-0 bottom-0 z-1 custom-bg custom-shadow border border-white cursor-pointer text-white font-body opacity-0 hover:opacity-100'>

                <div className='font-subheading text-2xl'>
                    {item.name}
                </div>

                <div className='font-body mb-4'>
                    {item.price}
                </div>

                <div>
                    {quantity === 0 ? (

                        <button
                            onClick={() => increaseCartQuantity(item.id)}
                            className='border border-white px-4 py-1 pb-2 mt-2 flex'
                        >
                            + Add to Cart
                        </button>
                    ) :
                        <div className='flex gap-8 items-center'>

                            <div className='flex gap-0 justify-center my-2'>

                                <button
                                    onClick={() => decreaseCartQuantity(item.id)}
                                    className='px-3 py-[2px] bg-[var(--primary)] text-white border border-white flex items-start text-lg'
                                >
                                    -
                                </button>

                                <div className='border border-white text-white px-4 py-[2px]'>
                                    {quantity}
                                </div>


                                <button
                                    onClick={() => increaseCartQuantity(item.id)}
                                    className='px-3 py-[2px] bg-[var(--primary)] text-white border border-white flex items-start text-lg'
                                >
                                    +
                                </button>

                            </div>

                            <div className=''>
                                <button onClick={() => removeFromCart(item.id)}
                                    className='font-bold py-[4px] px-6 border border-white text-sm self-center'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>

    )
}

export default Product