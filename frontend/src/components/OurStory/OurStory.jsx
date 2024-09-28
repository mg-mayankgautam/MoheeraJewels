import React, { useEffect } from 'react'
import imgBg from '../../assets/product1.png'
import imgFront from '../../assets/page1sub.png'
import './OurStory.css'

const OurStory = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='AboutUsPage'>
            <div className='HomeAboutImgContainer'>
                <div className='HomeAbout_BgImgDiv'>
                    <img src={imgBg} />
                </div>
                <div className='HomeAbout_FrontImgDiv'>
                    <img src={imgFront} />
                </div>
            </div>

            <div className='HomeAboutContent'>
                <div className='font-subheading text-2xl'>
                    Moheera Jewels
                </div>
                <div className='font-heading text-6xl'>
                    OUR STORY
                </div>
                <div className='font-body'>
                    Jewellery, to us, is a statement about how we perceive and interact with the world. Across centuries of progress, our relationship with jewellery has evolved and continues to grow even today. With increasing access to lab diamonds, it is easier for one to be dynamic and versatile with their accessories – but with the right jeweller. <br /><br />
                    At Moheera, we see lab diamonds as an opportunity to create lifestyle products that integrate style and utility, perfect for everyday wear or special occasions. We are particularly excited about exploring bold and cruelty-free diamonds that make a statement without breaking the bank!<br /><br />
                    As a brand, we look forward to remaining continually relevant to the modern woman and man. Ultimately, we strive to redefine the traditional jeweller-client dynamic by building personal relationships and curating pieces that resonate deeply with each client.<br /><br />
                    Hit us up and let's work together to create a stunning piece just for you!
                </div>
                <button className='mt-4 text-xs font-bold py-3 px-6 border-2 border-[var(--primary)] self-start'>
                    BOOK A DISCOVERY CALL
                </button>
            </div>
        </div>
    )
}

export default OurStory