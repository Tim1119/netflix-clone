import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {

        const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true)

            }else handleShow(false)
            return ()=>{
                window.removeEventListener("scroll")
            }
        })
    })


  return (
    <div className={`${show && "bg-black"} transition-all duration-[0.5s] ease-in flex items-center fixed  top-0 h-[60px] z-10 justify-between w-full p-[20px]`}>
        <img src="https://rb.gy/ulxxee"  className='w-[80px] cursor-pointer object-contain' alt="netflix-logo"  />
        <img src="https://rb.gy/g1pwyx" className='w-[26px] cursor-pointer object-contain' alt="nav-icon"  />
    </div>
  )
}

export default Navbar