import React from 'react'
import mainImg from '../../assets/page1main.png'
import subImg from '../../assets/page1sub.png'
import watermark from '../../assets/watermark.png'
import video from '../../assets/home.mp4'
import video2 from '../../assets/home2.mp4'

const Main = () => {

    return (

        <div className='h-[calc(100vh-80px)] flex justify-center gap-0'>

            <div className='w-[45%] h-[100%] z-1 pointer-events-none bg-white'>
            <video width={600}
                autoPlay 
                loop 
                muted 
                className='object-cover h-[100%] w-[100%]'
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className='w-[45%] h-[100%] z-1 pointer-events-none bg-white'>
            <video width={600}
                autoPlay 
                loop 
                muted 
                className='object-cover h-[100%] w-[100%]'
            >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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