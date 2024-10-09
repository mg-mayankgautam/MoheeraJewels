import React, { useEffect } from 'react'
import './LoveLetters.css'
import Img from '../../../assets/loveletters/loveletters.png'
import icon from '../../../assets/loveletters/lovelettersicon.png'
import { useState } from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const LoveLetters = () => {
    const [letters, setLetters] = useState([])

    useEffect(() => {

        const getloveletters = async () => {
            try {
                const data = await axios.get('http://localhost:4700/loveletters/get')

                console.log(data.data);
                setLetters(data.data);
            }
            catch (error) { console.log('There was an error getting the love letters!', error); }
        }

        getloveletters();

    }, [])



    return (
        <div className='LoveLetters'>

            <div className='HomeLLImgDiv'>
                <img src={Img} />
            </div>

            <div className='homeLLContent'>
                <div className='flex gap-[16px] w-full pl-8'>
                    <div className='font-heading LLText'>
                        Love Letters from some of our most <span className='font-subheading'>cherished customers</span>
                    </div>
                    <div className='iconLL'>
                        <img src={icon} />
                    </div>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    navigation={false}
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
                    {letters && letters.length > 0 && letters.map((letter, i) =>
                        <SwiperSlide key={i}>
                            <div className='flex gap-[4px] text-white max-w-[500px]'>
                                <div className='text-[72px] mt-[-32px] flex items-start'>“</div>

                                <div className='mt-[32px]'>{letter.message}</div>

                                <div className='text-[72px] mb-[-72px] flex items-end'>”</div>
                            </div>

                            <div className='text-right pr-8 font-bodyone text-white underline w-full max-w-[500px] uppercase'>{letter.name}</div>
                        </SwiperSlide>
                    )}

                    {/* <div class="swiper-button-prev custom-prev"></div>
                    <div class="swiper-button-next custom-next"></div> */}

                </Swiper>
            </div>
        </div>
    )
}

export default LoveLetters