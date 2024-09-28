import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footerimg from '../../assets/footerimg.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='flex gap-20 px-20 py-12 items-center justify-start font-body font-light text-[#3E3E3E] text-sm bg-white text-left'>

                <div>
                    <div className='font-bold text-base text-black mb-2'>THE BRAND</div>
                    <div>
                        <Link to='/ourstory'>Our Story</Link>
                    </div>
                    <div>
                        <Link to='/bespokeprocess'>Bespoke Process</Link>
                    </div>
                    <div>
                        <Link to='/collection'>Collections</Link>
                    </div>
                    <div>
                        <Link to='customengagementrings'>Custom Engagement Rings</Link>
                    </div>
                    <div>
                        <Link to=''>Lab Diamonds Guidance</Link>
                    </div>
                    <div>
                        <Link to=''>Media</Link>
                    </div>
                </div>

                <div>
                    <div className='font-bold text-base text-black mb-2'>CUSTOMER CARE</div>
                    <div>
                        <Link to=''>FAQs</Link>
                    </div>
                    <div>
                        <Link to=''>Jewellery Care</Link>
                    </div>
                    <div>
                        <Link to=''>Size Guide</Link>
                    </div>
                    <div>
                        <Link to=''>Terms & Conditions</Link>
                    </div>
                    <div>
                        <Link to=''>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link to=''>Contact</Link>
                    </div>
                </div>


            </div>

            <div className='footerImg'>
                <img src={footerimg} />
            </div>
        </div>
    )
}

export default Footer