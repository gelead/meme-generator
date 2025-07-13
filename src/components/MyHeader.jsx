import React from 'react'

const MyHeader = () => {
  return (
    <header className='border flex h-18 items-center gap-10 px-3 text-2xl bg-purple-700'>
      <img className='w-12 ml-4 rounded-full' src="src/assets/troll.jpg" alt="troll picture" />
      <h1 className='text-white'>Meme Generator</h1>
    </header>
  )
}

export default MyHeader