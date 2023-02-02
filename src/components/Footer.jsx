import React from 'react'
import like from './assets/likeButton.png'

function Footer() {
  return (
    <div className='p-2 my-5 justify-center items-center text-center bg-neutral-300'>
        <p className='text-[14px]'>Developed by Amrita University & CDAC Mumbai. Funded by MeitY (Ministry of Electronics & Information Technology)</p>
        <ul className='flex justify-center items-center text-center'>
            <li className='p-3 text-[12px]'>English</li>
            <li className='p-3 text-[12px]'>हिंदी</li>
            <li className='p-3 text-[12px]'>മലയാളം</li>
            <li className='p-3 text-[12px]'>मराठी</li>
        </ul>
        <div className='flex items-center justify-center'>
            <button className='flex bg-blue-500 text-[11px] font-bold rounded-md px-2 py-1 text-white'><img src={like} className='pr-2' alt="Like logo" />Follow</button>
            <p className='text-[11px] pl-2'>7.3K people are following this.<br />Be the first of your friends to</p>
        </div>
    </div>
  )
}

export default Footer