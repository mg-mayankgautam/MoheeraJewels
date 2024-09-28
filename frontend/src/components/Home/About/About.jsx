import React from 'react'
import aboutImg from '../../../assets/about/aboutimg.png'
import './About.css'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='About'>

            <div className='homeAboutContent'>
                <div className='font-heading aboutText'>
                    <span>Lorem ipsum dolor</span>
                    <span> sit amet, </span>
                    <span>consectetuer </span>
                    <span>adipiscing elit, sed</span>
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