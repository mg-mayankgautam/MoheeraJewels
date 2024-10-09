import React, { useEffect } from 'react'
import './Bespoke.css'
import { Link } from 'react-router-dom'
import bespoke from '../../assets/bespoke/bespoke.png'
import one from '../../assets/bespoke/one.png'
import three from '../../assets/ceg/icon.png'
import four from '../../assets/ceg/customring.png'
import footer from '../../assets/bespoke/bespokefooter.png'

const Bespoke = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='Bespoke'>
            <div>
                <button className='text-white'>Bespoke process</button>
                <div className='text-[10px] text-white text-left px-4 mt-4'><Link to='/' className='pinkHover'>HOME</Link>/ BESPOKE PROCESS</div>
            </div>

            <div className='max-w-[1000px] self-center'>
                <img src={bespoke} className='object-contain max-h-[100%] max-w-[100%]' />
            </div>

            <div className='bespokeCard'>
                <div className='relative'>
                    <div className='bespokeHead'>1. DISCOVERY CALL</div>
                    <div className='bespokeText'>
                        Our first interaction during a discovery call will provide insight into the type of jewellery you are seeking. <span className='text-[var(--primary)]'>We will explore your story, design preferences, budget, and delivery timeline.</span> This is an excellent opportunity to have all your questions answered about lab diamonds and our process. When it comes to surprise gifts and engagement rings, we look forward to guiding you through a well-informed decision at every stage of our bespoke process.
                    </div>
                    <div className='flex flex-col items-start gap-2 absolute bottom-[-88px]'>
                        <div className='font-subheading text-white mt-4'>
                            contact us or book a discovery call
                        </div>
                        <Link to='/contactus'><button className='text-white w-[160px]'>contact us</button></Link>
                    </div>
                </div>

                <div className='bespokeCardImg'>
                    <img src={one} className='!object-cover' />
                </div>
            </div>

            <div className='bespokeCard Invert'>
                <div className='bespokeCardImg'></div>
                <div>
                    <div className='bespokeHead'>2. FIND YOUR STYLE</div>
                    <div className='bespokeText'>
                        We understand that articulating what you envision can sometimes be challenging.<span className='text-[var(--primary)]'> We recommend browsing through our existing collections or bringing online jewellery images for inspiration.</span> This will give us a good starting point to create a beautiful design for you. Depending on your preferences for carat weight, colour, clarity, and budget, we can collaboratively modify an existing design or develop a completely new one with you for you.
                    </div>
                </div>
            </div>

            <div className='bespokeCard'>
                <div>
                    <div className='bespokeHead'>3. DESIGN REVIEW</div>
                    <div className='bespokeText'>
                        <span className='text-[var(--primary)]'>Once we have all the design details, we create a 3D model of the design, which provides a comprehensive overview of your piece in terms of metal weight, total carat weight, the setting style, and its appearance from di erent angles.</span> This step is particularly crucial since it allows us to refine or modify the design before it enters production. In case you’re looking at fancy cuts, we’re definitely open to playing around with the ratios for a more unique design!
                    </div>
                </div>
                <div className='bespokeCardImg'>
                    <img src={three} />
                </div>
            </div>

            <div className='bespokeCard Invert'>
                <div className='bespokeCardImg'>
                    <img src={four} className='!object-cover' />
                </div>
                <div>
                    <div className='bespokeHead'>4. PRODUCTION</div>
                    <div className='bespokeText'>
                        <span className='text-[var(--primary)]'>The production phase takes between two to four weeks, depending on the level of intricacy in the design. All our diamonds feature excellent cuts and meticulous craftsmanship, aspects we never compromise on.</span> Transparency with our clients is paramount, so we source larger diamonds that come with independent certification and an inscription on the girdle, while pieces with smaller diamonds are certified post-production. If you require a shorter delivery timeline, please contact us, and we will do our best to accommodate your request.
                    </div>
                </div>
            </div>

            <div className='bespokeCard'>
                <div>
                    <div className='bespokeHead'>5. HANDOVER</div>
                    <div className='bespokeText'>
                        <div className='text-[var(--primary)] mb-1'>This is what reminds us why we’re in this business—watching you try on your piece for the first time and seeing your satisfaction truly makes our day. </div> <br />
                        We encourage you to maintain your jewellery piece regularly. Visit our <span className='text-[var(--primary)] font-subheading underline'>Jewellery Care</span> page for more information!
                    </div>
                </div>
                <div className='bespokeCardImg'>
                </div>
            </div>



            <div className='max-w-[1000px] self-center'>
                <img src={footer} className='object-contain max-h-[100%] max-w-[100%]' />
            </div>

            <div className='flex flex-col items-center gap-2 text-left'>
                <div>
                    HIT US UP AND LET'S WORK TOGETHER TO <br />CREATE A STUNNING PIECE JUST FOR YOU!
                </div>
                <div className='font-subheading text-white mt-4'>
                    contact us or book a discovery call
                </div>
                <Link to='/contactus'><button className='text-white w-[160px]'>contact us</button></Link>
            </div>

        </div>
    )
}

export default Bespoke