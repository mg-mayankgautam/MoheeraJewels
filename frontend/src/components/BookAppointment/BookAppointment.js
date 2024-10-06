import React from 'react'
import down from '../../assets/icons/down.png'
import './BookAppointment.css'

const BookAppointment = () => {
    return (
        <div className='BookAppointment'>
            <div>
                <button className='text-white'>BOOK AN APPOINTMENT</button>
                <div className='text-[10px] text-white text-left px-4 mt-4'>HOME/ BOOK AN APPOINTMENT</div>
            </div>

            <div className='BA_head'>BOOK AN APPOINTMENT</div>

            <div className='BA_container'>
                <div>
                    <div className='BA_head'>1. SELECT A MODE OF APPOINTMENT</div>
                    <div className='flex'>
                        <div className='flex flex-col items-center justify-center gap-4 w-full h-20'>
                            <div className='pinkHover'>WALK IN</div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 w-full h-20'>
                            <div className='pinkHover'>VIRTUAL</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='BA_head'>2. PURPOSE OF YOUR VISIT</div>
                    <div className='flex justify-evenly gap-4 w-full mt-4'>
                        <div>
                            <div>
                                <input
                                    type="radio"
                                    name='isBureau'
                                    id='yes'
                                    value="Yes"
                                // onClick={(e) => handleIsBureau(e)}
                                // checked={lead.isBureau === "Yes"}
                                />
                                <label htmlFor="yes" className='ml-3 cursor-pointer'>PERSONALISED SHOPPING EXPERIENCE</label>
                            </div>

                            <div className='mt-10 flex flex-col'>
                                <div className='font-subheading text-xl border-b border-b-[1px] border-white py-2 mb-3 text-center flex items-center justify-evenly'>
                                    <div>specify your needs</div>
                                    <span className='faqArrows'><img src={down} /> </span>
                                </div>
                                <div className='flex flex-col gap-1 self-center'>
                                    <div className='pinkHover'>DISCOVER PRODUCTS</div>
                                    <div className='pinkHover'>CUSTOM ENGAGEMENT RING</div>
                                    <div className='pinkHover'>CUSTOM PRODUCT DESIGN</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <input
                                    type="radio"
                                    name='isBureau'
                                    id='yes'
                                    value="Yes"
                                // onClick={(e) => handleIsBureau(e)}
                                // checked={lead.isBureau === "Yes"}
                                />
                                <label htmlFor="yes" className='ml-3 cursor-pointer'>CUSTOMER CARE SERVICES</label>
                            </div>

                            <div className='mt-10 flex flex-col'>
                                <div className='font-subheading text-xl border-b border-b-[1px] border-white py-2 mb-3 text-center flex items-center justify-evenly'>
                                    <div>specify your needs</div>
                                    <span className='faqArrows'><img src={down} /> </span>
                                </div>
                                <div className='flex flex-col gap-1 self-center'>
                                    <div className='pinkHover'>EXCHANGE/ RETURN</div>
                                    <div className='pinkHover'>GETTING TO KNOW LAB DIAMONDS</div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='flex justify-evenly gap-4 mt-8 items-center'>
                        <div className='font-subheading'>do you have a price range in mind?</div>
                        <input className='input w-[50%] max-w-[250px]'
                            placeholder='INR' />
                    </div>
                </div>

                <div>
                    <div className='BA_head'>3. CHOOSE A DATE</div>
                </div>

                <div>
                    <div className='BA_head'>4. CHOOSE A TIME</div>
                    <div className='timeSlots my-4'>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                        <div className='pinkHover'>TIME SLOT 1</div>
                    </div>
                </div>

                <div>
                    <div className='BA_head'>5. PERSONAL INFORMATION</div>

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
                    <div className='BA_head'>6. ADDITIONAL INFORMATION/ ANYTHING YOU WOULD LIKE US TO KNOW</div>
                    <input className='input w-[100%] text-[var(--primary)] my-4 mx-auto font-subheading'
                        placeholder='' />
                </div>

                <button className='w-[200px] mx-auto mb-[-80px] mt-8'>Submit</button>
            </div>


            <div className='flex flex-col items-center gap-2 mt-20 text-left'>
                <div className='max-w-[300px]'>
                    THANK YOU FOR CONTACTING US. WE WILL BE IN TOUCH VIA EMAIL AND PHONE. FOR ANY URGENT REQUIRMENT PLEASE GO TO OUR CONTACT US PAGE.
                    <br />Additionally you can browse through our catalogue and pick out the ones you like for reference.
                </div>
                <button className='w-[160px] mt-4'>contact us</button>
            </div>

        </div>
    )
}

export default BookAppointment