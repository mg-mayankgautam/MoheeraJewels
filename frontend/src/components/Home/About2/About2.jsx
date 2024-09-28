import React from 'react'
import imgBg from '../../../assets/about2Bg.png'
import imgFront from '../../../assets/page1main.png'
import './About2.css'


const About2 = () => {
    return (
        <div className='About2'>
            <div className='HomeAboutImgContainer2'>
                <div className='HomeAbout_BgImgDiv2'>
                    <img src={imgBg} />
                </div>
                <div className='HomeAbout_FrontImgDiv2'>
                    <img src={imgFront} />
                </div>
            </div>

            <div className='HomeAboutContent2'>
                <div className='font-heading text-7xl'>
                    Things you should know...
                </div>
                <div className='font-subheading text-4xl'>
                    i have a thing for jewels
                </div>
                <div className='font-body max-w-[550px]'>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
            </div>
        </div>
    )
}

export default About2