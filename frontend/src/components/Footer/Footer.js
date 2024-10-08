import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logodark.png'
import watermark from '../../assets/watermark.png'

const Footer = () => {
    return (
        <div className='Footer'>

            <div className='flex flex-col justify-between items-center'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='footerLogo'>
                        <img src={logo} />
                    </div>

                    <div className='font-bodyone text-[10px] text-left max-w-[150px]'>
                        Stay in the loop and never miss an update from Moheera. Follow us on instagram.
                    </div>
                </div>

                <div className='footerWatermark'>
                    <img src={watermark} />
                </div>
            </div>

            <div>
                <div className='footerMenu'>

                    <div>
                        <div className='footerHead'>Company</div>
                        <div className='footerItem'>
                            <Link to='/ourstory'>Know More about us</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to='/bookanappointment'>Book an Appointment</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to='customengagementrings'>Custom Engagement</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to='/bespokeprocess'>Bespoke Process</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to='/contactus'>Contact us</Link>
                        </div>

                        <div className='footerItem'>
                            <Link to='/'>Love letters</Link>
                        </div>
                    </div>

                    <div className='footerline'></div>

                    <div>
                        <div className='footerHead'>Legal</div>
                        <div className='footerItem'>
                            <Link to=''>Shipping Policy</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to=''>Return Policy</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to=''>Privacy</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to=''>Terms & Conditions</Link>
                        </div>
                    </div>

                    <div className='footerline'></div>


                    <div>
                        <div className='footerHead'>Customer Care</div>
                        <div className='footerItem'>
                            <Link to='/faqs'>FAQs</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to=''>Sizing Guide</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to=''>Jewellery Care</Link>
                        </div>
                        <div className='footerItem'>
                            <Link to='/labdiamondsguidance'>Lab Diamonds</Link>
                        </div>
                    </div>

                </div>

                <div className='flex gap-6 justify-end font-subheading mt-4'>
                    <div className='text-center'>
                        Follow us on <br /> <span className='font-body'>Instagram</span>
                    </div>
                    <div className='text-right'>
                        contact us on <br /> <span className='font-body'>moheerajewels@gmail.com</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer