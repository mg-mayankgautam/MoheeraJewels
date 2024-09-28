import React from 'react'
import './BoxEngagement.css'
import Img from '../../../assets/ceg/customring.png'
import icon from '../../../assets/ceg/icon.png'
import { Link } from 'react-router-dom'

const BoxEngagement = () => {
    return (
        <div className='CEG'>

            <div className='HomeCEGImgDiv'>
                <img src={Img} />
            </div>

            <div className='homeCEGContent'>
                <div className='font-heading CEGText'>
                    <span>Begin your own</span>
                    <span> custom design jour</span>
                    <span>-ney today by using</span>
                    {/* <span>adipiscing elit, sed</span> */}
                </div>

                <Link to='/customengagementrings'>
                    <button className=''>
                        <span>Custom Engagement Rings</span>
                    </button>
                </Link>
            </div>

            <div className='iconCEG'>
                <img src={icon} />
            </div>

        </div>
    )
}

export default BoxEngagement