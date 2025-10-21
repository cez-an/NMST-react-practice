import React from 'react'
import img from '/photo/food.png'

function Card() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className=' w-[200px] bg-gray-400/30 h-[300px] rounded-3xl overflow-hidden shadow-2xl shadow-black/30'>
        
            <img className='object-cover' src={img} alt="food" />
        
        <div className='p-2'>
          <p>Thakollam Restaurant</p>
        </div>
    </div>
    </div>
    
  )
}

export default Card