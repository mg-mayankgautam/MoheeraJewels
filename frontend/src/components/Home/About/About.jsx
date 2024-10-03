import React from 'react'
import aboutImg from '../../../assets/about/homeabout.png'
import './About.css'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='About'>

            <div className='homeAboutContent'>
                <div className='font-heading aboutText'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                </div>

                <div className='font-body aboutSubText'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                </div>

                <Link to='/ourstory'>
                    <button className='text-sm'>
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