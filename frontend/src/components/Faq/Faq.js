import React, { useEffect, useState } from 'react'
import './Faq.css'
import up from '../../assets/icons/up.png'
import down from '../../assets/icons/down.png'
import { Link } from 'react-router-dom'

const Faq = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {

        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
        // return i;
    }


    return (
        <div className='FAQs'>

            <div>
                <button className='text-white'>FAQ</button>
                <div className='text-[10px] text-white text-left px-4 mt-4'><Link to='/' className='pinkHover'>HOME</Link> / FREQUENTLY ASKED QUESTIONS</div>
            </div>

            <div className='BA_head'>FREQUENTLY ASKED QUESTIONS</div>

            <div className='text-left flex flex-col items-end'>

                {data.map((item, i) => (
                    <>
                        <div className='max-w-[1000px] w-full p-6 flex flex-col'>
                            
                            <div className='title'
                                onClick={() => toggle(i)} key={i}>
                                <div className='BA_head uppercase'>{item.question}</div>

                                {selected === i ? <span className='faqArrows'><img src={up} /> </span> : <span className='faqArrows'><img src={down} /> </span>}
                            </div>

                            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>

                        </div>

                        <div className='h-[0.5px] bg-white w-full'></div>
                    </>
                ))}

            </div>
        </div>
    )
}

export default Faq


const data = [
    {
        question: "Q1. Where do I get started for a custom design?",
        answer:
            "You can book a discovery call with us (redirect to scheduling call) or get in touch with us on WhatsApp to receive a price quotation for the design you have in mind. We believe that our bespoke process (redirect to process page) for custom designs sets us apart."
    },
    {
        question: "Q2. What is the delivery timeline?",
        answer:
            `If the product you're interested in is available in our inventory, we will ship it out within 48 hours. For custom orders, we take at least 21 business days to create a 3D model of the design, put it into production, and ensure it passes quality control before delivering it to you. Should you need support with the delivery timeline, please get in touch with us here (redirect). Although we recommend sufficient production time, especially for custom designs, we will do our utmost to expedite the process if your request is urgent.`
    },
    {
        question: "Q3. Do you use certified diamonds?",
        answer:
            "All our jewellery is certified by IGI or GIA, depending on client preference and turnaround time. We use pre-certified diamonds for jewellery with 1 carat and above. For jewellery with smaller diamonds, the product is sent for certification after production."
    },
    {
        question: "Q4. Will you be able to help me out with a surprise gift?",
        answer:
            "Yes, we would love to help you with a surprise gift. Get in touch with us to discuss your requirements, and we will ensure the gift is a memorable one."
    },
    {
        question: "Q5. How do I know what my ring size is?",
        answer:
            "We offer a ring size guide on our website. You can also visit a local jeweller to get your size measured, or contact us for assistance."
    }
];
