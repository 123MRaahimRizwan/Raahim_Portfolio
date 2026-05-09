import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 flex items-center justify-center w-full'>
      <p className='text-white text-center'>Muhammad Raahim Rizwan &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  )
}

export default Footer