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
                <div className='flex flex-col gap-[72px] pl-6 items-center'>
                    <div className='font-heading CEGText'>
                        Begin your own <br />custom design journey <br />today by using
                    </div>

                    <Link to='/customengagementrings'>
                        <button className=''>
                            <span>Custom Engagement Rings</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div className='iconCEG'>
                <img src={icon} />
            </div>

        </div>
    )
}

export default BoxEngagement