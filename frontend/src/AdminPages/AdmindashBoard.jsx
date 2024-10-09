// import { set } from 'mongoose';
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const AdmindashBoard = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const postLoveLetter = async () => {

    console.log(name, message);

    try {
      if (name && message) {
        const response = await axios.post('http://localhost:4700/loveletters/post', {
          name: name,
          message: message
        });
        console.log(response.data);
        setName('')
        setMessage('')
      }

    } catch (error) {
      console.error('There was an error posting the love letter!', error);
    }

  };

  return (
    <div className='px-[72px] py-8 pb-[80px] flex flex-col gap-10 min-h-[calc(100vh-80px)]'>

      <div className='font-heading text-[48px]'>DASHBOARD</div>

      <div className='flex flex-col gap-20'>

        <div className='w-full max-w-[300px] text-left text-white'>
          <div className='font-subheading text-3xl mb-6'>add love letter</div>

          <div className='flex flex-col gap-6 w-full'>

            <div className='relative'>

              <div>YOUR NAME *</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
                placeholder='name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
              {/* <div className='absolute top-[-16px] right-0 left-0 text-[var(--primary)] text-[10px]'>first name is required. please enter your first name*</div> */}
            </div>

            <div className='relative'>
              <div>YOUR MESSAGE *</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
                placeholder='message'
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
              />
              {/* <div className='absolute top-[-16px] right-0 left-0 text-[var(--primary)] text-[10px]'>first name is required. please enter your first name*</div> */}
            </div>

            <button className='mt-4' onClick={() => { postLoveLetter() }}>SUBMIT</button>

          </div>
        </div>


        <div className='w-full text-left text-white flex flex-col gap-10'>
          <div className='font-subheading text-3xl mb-6'>add products (not functional rn)</div>


          <div className='flex gap-[5%] w-full'>

            <div className='w-full'>
              <div>Add Product Category</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
              <button>Add Category</button>
            </div>

            <div className='w-full'>
              <div>Select Product Category</div>
              <select className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              >
                <option>Rings</option>
              </select>
              <button>Go</button>
            </div>

          </div>



          <div className='flex gap-[5%] w-full'>

            <div className='w-full'>
              <div>Add Product Sub-Category</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
              <button>Add Sub-Category</button>
            </div>

            <div className='w-full'>
              <div>Select Product Sub-Category</div>
              <select className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              >
                <option>Bands</option>
              </select>
              <button>Go</button>
            </div>

          </div>



          <div className='grid grid-cols-2 gap-[5%] w-full mt-8 mb-24'>

            <div className='w-full'>
              <div>Product Name</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Product Code</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Product Image</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Custom Options</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Prices</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>About the Product</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Product Breakdown</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Diamond & Metal Information</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Payment & Shipping Details</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='w-full'>
              <div>Gold Rate</div>
              <input className='input w-[100%] text-[var(--primary)] my-2 font-subheading'
                type="text"
              // placeholder='name'
              // value={name}
              // onChange={(e) => { setName(e.target.value) }}
              />
            </div>


          </div>

          <button>Add product</button>

        </div>

      </div>

    </div>
  )
}

export default AdmindashBoard