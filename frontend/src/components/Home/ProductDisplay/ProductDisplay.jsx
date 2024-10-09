import React from 'react'
import './ProductDisplay.css'
import menuList from '../../../utils/products.json'
import Product from '../../Collection/Product'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const ProductDisplay = () => {
    return (
        <div className='ProductDisplay'>
            <div className='flex gap-8'>
                <Link to='/collection'><button className='PD_shopBtns selected'>shop all products</button></Link>
                <Link to='/collection'><button className='PD_shopBtns'>shop rings</button></Link>
                <Link to='/collection'><button className='PD_shopBtns'>shop necklaces</button></Link>
                <Link to='/collection'><button className='PD_shopBtns'>shop earrings</button></Link>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true
                // }}
                speed={1000}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                // breakpoints={{
                //     250: {
                //         slidesPerView: 1,
                //         spaceBetween: 5,
                //     },
                //     800: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,
                //     },
                // }}
                centeredSlides={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {menuList.map((item, i) =>

                    <SwiperSlide key={i}>
                        <Product item={item} key={i} />
                    </SwiperSlide>
                )}

            </Swiper>

            {/* <div className='productCarousel'>

                

            </div> */}
        </div>
    )
}

export default ProductDisplay