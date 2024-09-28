import React from 'react'
import Product from './Product'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import menuList from '../../utils/products.json'


const Products = () => {
    return (

        <div className='flex flex-wrap gap-8 justify-center'>

            {menuList.map((item, i) =>
                <Product item={item} key={i} />
            )}

        </div>

    )
}

export default Products

