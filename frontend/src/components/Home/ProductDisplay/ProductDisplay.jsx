import React from 'react'
import './ProductDisplay.css'
import p1 from '../../../assets/product1.png'
import p2 from '../../../assets/product2.png'
import p3 from '../../../assets/product3.png'
import p4 from '../../../assets/product4.png'

const ProductDisplay = () => {
    return (
        <div className='ProductDisplay'>
            <div className='flex gap-8'>
                <button>shop all products</button>
                <button className='bg-white'>shop rings</button>
                <button className='bg-white'>shop necklaces</button>
                <button className='bg-white'>shop earrings</button>
            </div>

            <div className='productCarousel'>
                <div className='productDisplay_ImgDiv'>
                    <img src={p1} />
                </div>
                <div className='productDisplay_ImgDiv'>
                    <img src={p2} />
                </div>
                <div className='productDisplay_ImgDiv'>
                    <img src={p3} />
                </div>
                <div className='productDisplay_ImgDiv'>
                    <img src={p4} />
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay