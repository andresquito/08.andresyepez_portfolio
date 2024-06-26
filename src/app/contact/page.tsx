import React from 'react'
import Form from '../components/Form'

const page = () => {
  return (
    <div 
    style={{backgroundImage:"url(bg-3.jpg)"}}
    className='w-screen h-screen bg-cover bg-center flex items-center justify-center'    >
        <div
        style={{backgroundImage:'url(atombg-comp.webp)'}}
        className='w-[80%] h-[50%] md:h-[60%] relative bg-cover bg-center rounded-xl border border-white mt-40 md:mt-10'>
            <div className='absolute left-5 md:left-20 bottom-5 md:bottom-36 w-[70%] md:w-[30%] '>
                <Form/>
            </div>
        </div>
    </div>
    
    
  )
}

export default page