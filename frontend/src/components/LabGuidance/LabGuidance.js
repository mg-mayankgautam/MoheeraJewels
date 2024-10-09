import React, { useEffect, useState } from 'react'
import './LabGuidance.css'
import ldg from '../../assets/ldg.png'
import { Link } from 'react-router-dom'

const LabGuidance = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='ldg'>

            <div className='px-[72px]'>
                <button className='text-white'>LAB DIAMOND GUIDANCE</button>
                <div className='text-[10px] text-white text-left px-4 mt-4'><Link to='/' className='pinkHover'>HOME</Link> / LAB DIAMOND GUIDANCE</div>
            </div>

            <div className='BA_head'>LAB DIAMOND GUIDANCE</div>

            <div className='text-left flex flex-col items-center gap-10 mt-10'>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        1. WHAT ARE LAB GROWN DIAMONDS?
                    </div>
                    <div className='text-white'>
                        Lab grown diamonds are created in controlled environments using sophisticated technology that mimics the natural processes responsible for mined diamonds. This results in diamonds of remarkable quality and beauty, displaying the same brilliance as mined diamonds, while avoiding the environmental and human impact of mining.
                    </div>
                </div>

                <div className='w-full'>
                    <img src={ldg} className='object-cover w-full h-full' />
                </div>


                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        2. IS THERE A DIFFERENCE BETWEEN LAB AND MINED DIAMONDS?
                    </div>
                    <div className='text-white'>
                        While both lab and mined diamonds are made of the same element – pure carbon – and share identical physical, chemical, and optical properties, the only distinction between them is their origin. Due to these shared properties, both types of diamonds exhibit the same fire, scintillation, and brightness. In fact, even trained gemologists require specialised equipment to detect minor differences between them. Without such equipment, distinguishing between them with the naked eye is impossible, regardless of industry expertise.
                    </div>
                </div>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        3. ARE LAB DIAMONDS REAL DIAMONDS?
                    </div>
                    <div className='text-white'>
                        <span className='text-[var(--primary)]'>Yes!</span>
                        <br /> Lab diamonds are real diamonds, as real as those mined from the earth. The only difference lies in their origin - one is created in a lab, while the other is extracted from the earth. Like mined diamonds, lab diamonds are composed of pure carbon and rank as a 10 on the Mohs scale of hardness. Once the rough diamond from the lab is ready, both lab and mined diamonds undergo the same processes of cutting, polishing, and grading.
                    </div>
                </div>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        4. WHY ARE PEOPLE SWITCHING TO LAB DIAMONDS?
                    </div>
                    <div className='text-white'>
                        By eliminating expensive and unethical mining practices, lab diamonds are typically priced 60-80% lower than mined diamonds, without compromising on the precision of cutting and polishing. This factor enables many consumers to enjoy ethical diamonds within a budget and without conflicts.
                    </div>
                </div>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        5. HAVE ANY CELEBRITIES AND BRANDS CHOSEN LAB DIAMONDS?
                    </div>
                    <div className='text-white'>
                        With the rising popularity of lab diamonds, luxury brands such as Prada, Balmain, Gucci, Breitling, and Tag Heuer have recently launched collections utilising lab diamonds. Celebrities including Drake, Zendaya, Rihanna, Emma Watson, Lady Gaga, and others have been spotted wearing lab diamonds on the red carpet and elsewhere.
                    </div>
                </div>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        6. ARE LAB DIAMONDS SYNTHETIC?
                    </div>
                    <div className='text-white'>
                        With the same mineral composition as mined diamonds, lab diamonds are not equivalent to simulants like cubic zirconia or moissanite, which are prone to chipping with use. Lab diamonds exhibit the same brilliance and durability as mined diamonds, without any of the shortcomings associated with simulants.
                    </div>
                </div>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        7. DO LAB DIAMONDS COME CERTIFIED?
                    </div>
                    <div className='text-white'>
                        Lab diamonds undergo the same rigorous grading procedures as mined diamonds at GIA and IGI, and come with an inscription on the girdle along with certification. We advise purchasing certified diamonds from your jeweller, which allows consumers to make informed decisions about the quality and value of the diamond based on the 4Cs – cut, colour, clarity, and carat weight.
                    </div>
                </div>

                <div className='LDG_Box'>
                    <div className='BA_head uppercase'>
                        8. WILL LAB DIAMONDS LOOK THE SAME OVER TIME?
                    </div>
                    <div className='text-white'>
                        Since lab diamonds have the same chemical and physical properties as mined diamonds, and measure 10 on the Mohs scale of hardness, lab diamonds will maintain their brilliance and quality for generations to come. It is definitely a sustainable, economical, and budget-friendly choice for clients looking for a timeless piece.
                    </div>
                </div>


            </div>

            <div className='flex flex-col items-center gap-2 mt-20'>
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

export default LabGuidance
