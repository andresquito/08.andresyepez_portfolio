import React from 'react'

const Form = () => {
  return (
    
    <form 
    //Send email 45:00
    action="https://getform.io/f/jbwxgkwa"
    method='POST'
    className=''>
        <h2 className='text-2xl text-white font-bold mb-5'>Contact me</h2>
        <div className='mb-3'>
            <input 
            type="text"
            placeholder='Your name'
            name='name'
            className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 border-0 rounded shadow' />            
        </div>
        <div className='mb-3'>
            <input 
            type="email"
            placeholder='Your email'
            name='email'
            className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 border-0 rounded shadow' />            
        </div>
        <div className='mb-3'>
            <textarea             
            placeholder='Your message'
            name='message'
            className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 border-0 rounded shadow' />            
        </div>
        <button type='submit' className='bg-blue-500 mb-10 rounded-lg px-3 py-2 text-white text-sm uppercase font-bold w-[100px] h-[40px]  hover:bg-blue-400 '>
            Send
        </button>

    </form>

  )
}

export default Form