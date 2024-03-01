import React from 'react'
import { IoStar } from "react-icons/io5";

const Review = () => {
  return (
    <div className='m-5'>
      <div className='flex flex-col gap-3'>
        <span className='font-semibold text-xl'>Rating</span>
        <div className='flex gap-3'>
          <IoStar className='text-orange-400 w-7 h-7' />
          <IoStar className='text-orange-400 w-7 h-7' />
          <IoStar className='text-orange-400 w-7 h-7' />
          <IoStar className='text-orange-400 w-7 h-7' />
          <IoStar className='text-orange-400 w-7 h-7' />
        </div>
      </div>
      <div className='flex flex-col gap-3 mt-6'>
        <span className='font-semibold text-xl'>Review</span>
        <div className='flex p-3 bg-[#F4F4F4] rounded mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet maxime, nobis dolor consequatur aperiam. Voluptatibus laudantium sequi sunt tenetur quia ratione, dolorum voluptatum. Non sint veritatis quos neque doloremque?
        </div>
      </div>
    </div>
  )
}

export default Review