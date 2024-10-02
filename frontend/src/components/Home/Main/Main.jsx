import React from 'react'
import watermark from '../../../assets/watermark.png'
import video from '../../../assets/home/home.mp4'
import video2 from '../../../assets/home/home2.mp4'
import img from '../../../assets/home/homeimg.png'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {

    return (

        <div className='homeMain'>

            <div className='MainVidDiv'>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className='video'
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absLinksDiv'>
                    <div className='absLink'><Link to='/collection'>Shop now</Link></div>
                </div>
            </div>

            <div className='MainVidDiv'>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className='video'
                >
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absLinksDiv'>
                    <div className='absLink'><Link to='/collection'>explore collection</Link></div>
                </div>
            </div>

            <div className='mainLinksAbsolute'>
                <div className='absImg'>
                    <img src={img}/>
                </div>
            </div>

        </div>

    )
}

export default Main

    // < div className = 'h-[100%] flex flex-col justify-between text-left pt-4 pb-12' >
    //         <img src={watermark} alt="" className='w-[80px]'/>

    //         <div>
    //             <div className='font-heading text-[48px] leading-[48px] tracking-wide uppercase'>
    //                 Contemporary <br />Designs Made With <br />Innovation
    //             </div>
    //             <div className='mt-6 font-body text-xs'>
    //                 The standard chunk of Lorem Ipsum used since the 1500s is <br />reproduced below for those interested. Sections 1.10.32 and <br />1.10.33 from 
    //             </div>
    //             <button className='mt-12 text-xs font-bold py-3 px-6 border-2 border-[var(--primary)]'>
    //                 KNOW MORE ABOUT US
    //             </button>
    //         </div>
    //     </div >

    //     <div className='h-[100%] pt-4'>
    //         <img src={mainImg} alt="" className='max-h-[100%] object-cover'/>
    //     </div>
        
    //     <div>
    //         <img src={subImg} alt="" />
    //     </div>