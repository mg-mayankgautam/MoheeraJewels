import React from 'react'
import './Contact.css'
import contactimg from '../../../assets/contactimg.png'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='ContactBox'>
            <div className='contactContent'>
                <div className='font-heading text-6xl'>
                    CONTACT
                </div>
                <div className='flex flex-col gap-4 font-body'>
                    <div>abc@gmail.com</div>
                    <div>+91 9999099990</div>
                </div>
            </div>

            <div className='contactImgDiv'>
                <img src={contactimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact