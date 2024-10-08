import React from 'react'
import aboutImg from '../../assets/about/homeabout.png'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
    return (

        <div className='Contact'>
            <div className='ContactMain'>

                <div className='contactContent'>
                    <div className='max-w-[410px] contactContent !gap-[20px]'>
                        <div className='font-heading aboutText'>
                            HIT US UP FOR A DISCOVERY CALL
                        </div>

                        <div className='font-body aboutSubText mb-4'>
                            Got questions or just want to chat with us about diamonds? Book a discovery call - We're here to make your brilliance a reality!
                        </div>

                        <Link to='/ourstory'>
                            <button className=''>
                                BOOK AN APPOINTMENT
                            </button>
                        </Link>
                    </div>

                    <div className='max-w-[410px] w-full contactContent !gap-[20px] !items-start'>
                        <div className='font-heading aboutText'>
                            OR DIRECTLY REACH OUT!
                        </div>

                        <div className='font-body aboutSubText'>
                            +91 8978785151 <br />moheerajewels@gmail.com
                        </div>
                    </div>
                </div>

                <div className='HomeAboutImgDiv'>
                    <img src={aboutImg} />
                </div>

            </div>

            <div className='font-heading aboutText text-left max-w-[1030px] mx-auto mt-20 mb-10'>
                OR PUT IN YOUR DETAILS AND WE WILL REACH OUT TO YOU
            </div>


            <div className='BA_container max-w-[1030px] mx-auto'>

                <div>
                    <div className='BA_head'>PERSONAL INFORMATION</div>

                    <div className='personalInfo'>
                        <div className='relative'>
                            <div>FIRST NAME*</div>
                            <input className='input w-[90%] text-[var(--primary)] my-2 font-subheading'
                                placeholder='' />

                            {/* <div className='absolute top-[-16px] right-0 left-0 text-[var(--primary)] text-[10px]'>first name is required. please enter your first name*</div> */}
                        </div>

                        <div className='relative'>
                            <div>FIRST NAME*</div>
                            <input className='input w-[90%] text-[var(--primary)] my-2 font-subheading'
                                placeholder='' />

                            {/* <div className='absolute top-[-16px] right-0 left-0 text-[var(--primary)] text-[10px]'>first name is required. please enter your first name*</div> */}
                        </div>

                        <div className='relative'>
                            <div>FIRST NAME*</div>
                            <input className='input w-[90%] text-[var(--primary)] my-2 font-subheading'
                                placeholder='' />

                            {/* <div className='absolute top-[-16px] right-0 left-0 text-[var(--primary)] text-[10px]'>first name is required. please enter your first name*</div> */}
                        </div>

                        <div className='relative'>
                            <div>FIRST NAME*</div>
                            <input className='input w-[90%] text-[var(--primary)] my-2 font-subheading'
                                placeholder='' />

                            <div className='absolute top-[-16px] right-0 left-0 text-[var(--primary)] text-[10px]'>first name is required. please enter your first name*</div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className='BA_head'>MESSAGE</div>
                    <input className='input w-[100%] text-[var(--primary)] my-4 mx-auto font-subheading'
                        placeholder='' />
                </div>

                <div className='font-subheading text-[var(--primary)] text-center mt-8'>We typically take 24 -48 hours to respond.</div>

                <button className='w-[200px] mx-auto mb-[-80px] mt-6'>Submit</button>
            </div>
        </div>
    )
}

export default Contact