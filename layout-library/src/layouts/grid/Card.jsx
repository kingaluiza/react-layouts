import React from 'react'

const Card = ({ image, title, subtitle, description, className }) => {
  return (
    <div className='mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md'>
    <div>
      <div>
        <img
          className='h-48 w-full object-cover'
          src={image}
          alt={title}
        />
      </div>
      <div className='p-8'>
        <div className='text-sm font-semibold tracking-wide text-indigo-500 uppercase'>{title}</div>
        <a href='#' className='mt-1 block text-lg leading-tight font-medium text-black hover:underline'>
          {subtitle}
        </a>
        <p className='mt-2 text-gray-500'>
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Card