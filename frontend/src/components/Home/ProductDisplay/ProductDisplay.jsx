import React from 'react'
import './ProductDisplay.css'
import menuList from '../../../utils/products.json'
import Product from '../../Collection/Product'


const ProductDisplay = () => {
    return (
        <div className='ProductDisplay'>
            <div className='flex gap-8'>
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
        </div>
    )
}

export default ProductDisplay