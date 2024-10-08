import React from 'react'
import './LoveLetters.css'
import Img from '../../../assets/loveletters/loveletters.png'
import icon from '../../../assets/loveletters/lovelettersicon.png'
import { useState } from 'react'

const LoveLetters = () => {
    const [letter, setLetter] = useState([{},{}])
    return (
        <div className='LoveLetters'>

            <div className='HomeLLImgDiv'>
                <img src={Img} />
            </div>

            <div className='homeLLContent'>
                <div className='flex gap-[16px] w-full pl-8'>
                    <div className='font-heading LLText'>
                        Love Letters from some of our most <span className='font-subheading'>cherished customers</span>
                    </div>
                    <div className='iconLL'>
                        <img src={icon} />
                    </div>
                </div>

                <div className='flex gap-[4px] text-white pr-8'>
                    <div className='text-[72px] mt-[-48px] flex items-start'>"</div>

                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>

                    <div className='text-[72px] mb-[-72px] flex items-end'>"</div>
                </div>

                <div className='self-end pr-8 font-bodyone text-white underline'>JANE DOE</div>
            </div>
        </div>
    )
}

export default LoveLetters