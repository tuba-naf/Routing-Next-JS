'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'; 
function Navbarpage() {
    const route= useRouter()
  return (
    <div>
      navbar
    <br />
    <button className="styled-button" onClick={()=>route.push('/')}>Home</button>
    </div>
  )
}

export default Navbarpage
