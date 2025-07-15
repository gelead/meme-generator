import React from 'react'

const Die = (props) => {
  return (
    <button id='box' className='p-4 cursor-pointer w-15 bg-white shadow-lg text-2xl  font-bold h-15 rounded-md'>{props.value}</button>
  )
}

export default Die