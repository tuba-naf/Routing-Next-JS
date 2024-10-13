'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'; 
function Footerpage() {
    const route= useRouter()
  return (
    <div>
      footer
    <br/>
    <button className="styled-button" onClick={()=>route.push('/')}>Home</button>
    </div>
  )
}

export default Footerpage
