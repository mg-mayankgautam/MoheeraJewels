import React, { useEffect } from 'react'
import main from '../../assets/about/aboutusmain.png'
import sub from '../../assets/about/aboutsub.png'
import line from '../../assets/about/aboutLine.png'
import './OurStory.css'
import { Link } from 'react-router-dom'

const OurStory = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='KnowMoreAboutUs'>

            <div className='px-[72px]'>
                <button className='text-white'>know more about us</button>
                <div className='text-[10px] text-white text-left px-4 mt-4'><Link to='/' className='pinkHover'>HOME</Link> / ABOUT US</div>
            </div>

            <div className='flex flex-col gap-4 items-center px-[72px]'>
                <div className='font-subheading'>
                    “Jewellery, to us, is a statement about how we perceive and interact with the world.”
                </div>
                <div className='w-full max-w-[1000px]'>
                    <img src={main} className='object-contain w-full max-h-[100%] max-w-[100%]' />
                </div>
                <div className='mx-auto px-[72px]'>
                    <img src={line} />
                </div>
            </div>


            <div className='AboutUsGrid'>

                <div className='flex flex-col text-[18px] text-white gap-4 text-left justify-self-center max-w-[450px]'>
                    <div>Across centuries of progress, our relationship with jewellery has evolved and continues to grow even today. With increasing access to lab diamonds, it is easier for one to be dynamic and versatile with their accessories – but with the right jeweller. </div>
                    <div>At Moheera, we see lab diamonds as an opportunity to create lifestyle products that integrate style and utility, perfect for everyday wear or special occasions. We are particularly excited about exploring bold and cruelty-free diamonds that make a statement without breaking the bank! </div>
                    <div>As a brand, we look forward to remaining continually relevant to the modern woman and man. Ultimately, we strive to redefine the traditional jeweller-client dynamic by building personal relationships and curating pieces that resonate deeply with each client.</div>
                </div>

                <div className='AboutUsImgContainer'>
                    <img src={sub} />
                </div>

            </div>

            <div className='flex flex-col items-center gap-2'>
                <div>
                    HIT US UP AND LET'S WORK TOGETHER TO <br />CREATE A STUNNING PIECE JUST FOR YOU!
                </div>
                <div className='font-subheading text-white mt-4'>
                    contact us or book a discovery call
                </div>
                <Link to='/contactus'><button className='text-white w-[160px]'>contact us</button></Link>
            </div>

        </div>
    )
}

export default OurStory