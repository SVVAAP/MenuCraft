"use client;"
import React from 'react'
import  Sort  from "../assets/sort.png";
import Notification from "../assets/Notification.png"
import Image from "next/image";

function navbar() {
  return (
    <div className='bg-slate-50 rounded-lg m-2 mx-4 flex justify-between p-10'>
<Image src={Sort} alt="sort" ></Image>
<div>
    <h1>rest Name</h1>
</div>
<Image src={Notification} alt="notification" ></Image>
    </div>
  )
}

export default navbar
