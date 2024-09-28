import React, { useEffect } from 'react'
import './CustomEngRings.css'
import img from '../../../assets/customring.png'

const CustomEngRings = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='CustomEngRings'>
            <div className='CER_Header'>
                <div className='CER_HeaderText'>
                    <div>
                        <div className='font-subheading text-4xl'>
                            Custom Engagement Rings
                        </div>
                        <button className='mt-6 text-xs font-bold py-3 px-6 border-2 border-[var(--primary)] bg-[var(--primary)] text-white'>
                            Start The Process
                        </button>
                    </div>
                </div>

                <div className='CER_imgDiv'>
                    <img src={img} />
                </div>
            </div>

            <div className='font-body max-w-[900px] px-16'>
                Moheera stands for creating an experience around the jewellery piece, not just delivering it. If you are a couple searching for the perfect engagement ring, we are excited to offer a private session to explain the 4Cs and various engagement ring settings, allowing you to explore different designs until you find the one that suits you best. We look forward to working closely with you from start to finish, creating your dream ring that is as beautiful as it is meaningful.
            </div>

            <div>
                <div className='font-subheading text-3xl'>
                    Start The Process
                </div>

                <div className='formContainer'>
                    <div className='formWrap'>
                        <div className="formRow">
                            <label>Your First Name</label>
                            <input
                                type="text"
                            />
                        </div>

                        <div className="formRow">
                            <label>Your Last Name</label>
                            <input
                                type="text"
                            />
                        </div>

                        <div className="formRow">
                            <label>Email</label>
                            <input
                                type="text"
                            />
                        </div>

                        <div className="formRow">
                            <label>Phone Number (optional)</label>
                            <input
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="formRow">
                        <label>Centre Stone Type</label>
                        <select>
                            <option>Lab Diamond</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="formRow">
                        <label>Message</label>
                        <textarea />
                    </div>

                    <button className='mt-6 text-xs font-bold py-3 px-6 border-2 border-[var(--primary)] bg-[var(--primary)] text-white self-center'>
                        SUBMIT
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CustomEngRings