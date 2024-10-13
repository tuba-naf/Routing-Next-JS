"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'; 
function Page() {
    const Route= useRouter()
  return (
    <div className="button-container" >
    <br/>
    <button className="styled-button" onClick={()=>Route.push('/navbar')}>Navbar</button>
    <br/>
    <button className="styled-button"onClick={()=>Route.push('/about')}>About</button>
    <br/>
    <button className="styled-button" onClick={()=>Route.push('/contact')}>Contact</button>
    <br/>
    <button className="styled-button" onClick={()=>Route.push('/footer')}>Footer</button>
    </div>
  )
}

export default Page