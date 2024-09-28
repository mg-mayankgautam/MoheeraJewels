import React, { useEffect } from 'react'
import './Bespoke.css'
import { Link } from 'react-router-dom'

const Bespoke = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='Bespoke'>
            <div className='font-subheading text-4xl'>
                Bespoke Process
            </div>

            <div className='bespokeCardsContainer'>
                <div className='bespokeCard'>
                    <div className='bespokeCardHead'>
                        Step One-<br />
                        Book a Discovery Call
                    </div>
                    <div className='bespokeCardText'>
                        Our first interaction during a discovery call will provide insight into the type of jewellery you are seeking. We will primarily explore your story, design preferences, budget, and delivery timeline. This is an excellent opportunity to have all your questions answered about lab diamonds and our process. When it comes to surprise gifts and engagement rings, we look forward to guiding you through a well-informed decision at every stage of our bespoke process.
                    </div>
                    <button className='text-sm font-bold py-3 px-6 border-2 border-white text-white'>
                        SCHEDULE A DISCOVERY CALL
                    </button>
                </div>

                <div className='bespokeCard2'>
                    <div className='bespokeCardHead'>
                        Step Two- <br />
                        Find Your Style
                    </div>
                    <div className='bespokeCardText'>
                        We understand that articulating what you envision can sometimes be challenging, so we recommend browsing through our existing collections or bringing online jewellery images for inspiration. This will give us a good starting point from which we can create a beautiful design for you. Depending on your preferences for carat weight, colour, clarity, and budget, we can collaboratively modify an existing design or develop a completely new one with you for you.
                    </div>
                </div>

                <div className='bespokeCard'>
                    <div className='bespokeCardHead'>
                        Step Three- <br />
                        Design Review
                    </div>
                    <div className='bespokeCardText'>
                        Once we have all the design details, we create a 3D model of the design, which provides a comprehensive overview of your piece in terms of metal weight, total carat weight, the setting style, and its appearance from different angles. This step is particularly crucial since it allows us to refine or modify the design before it enters production. In case you’re looking at fancy cuts, we’re definitely open to playing around with the ratios for a more unique design!
                    </div>
                </div>

                <div className='bespokeCard2'>
                    <div className='bespokeCardHead'>
                        Step Four- <br />
                        Production
                    </div>
                    <div className='bespokeCardText'>
                        The production phase takes between two to four weeks, depending on the level of intricacy in the design. All our diamonds feature excellent cuts and meticulous craftsmanship, aspects we never compromise on. Transparency with our clients is paramount, so we source larger diamonds that come with independent certification and an inscription on the girdle, while pieces with smaller diamonds are certified post-production. If you require a shorter delivery timeline, please contact us, and we will do our best to accommodate your request.
                    </div>
                </div>

                <div className='bespokeCard'>
                    <div className='bespokeCardHead'>
                        Step Five- <br />
                        Handover
                    </div>
                    <div className='bespokeCardText'>
                        This is what reminds us why we’re in this business—watching you try on your piece for the first time and seeing your satisfaction truly makes our day. We encourage you to maintain your jewellery piece regularly. Visit our Jewellery Care page for more information!
                    </div>
                    <Link to=''>
                        <button className='text-sm font-bold py-3 px-6 border-2 border-white text-white'>
                            CUSTOM ENGAGEMENT RINGS
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Bespoke