import React from 'react'
import aboutImg from '../../../assets/about/aboutimg.png'
import './About.css'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='About'>

            <div className='homeAboutContent'>
                <div className='font-heading aboutText'>
                    Lorem ipsum dolor <br/> sit amet, <br/>consectetuer <br/>adipiscing elit, sed
                </div>

                <Link to='/ourstory'>
                    <button className=''>
                        <span>KNOW MORE ABOUT US</span>
                    </button>
                </Link>
            </div>

            <div className='HomeAboutImgDiv'>
                <img src={aboutImg} />
            </div>

        </div>
    )
}

export default About