import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import {XIcon , MicrophoneIcon, SearchIcon} from '@heroicons/react/solid'
import Avatar from './Avatar'
import HeaderOption from './HeaderOption'

function Header() {
    const router = useRouter()
    const inputRef = useRef()
    const search = e => {
        e.preventDefault()
        const term = inputRef.current.value;
        if (!term) return 

        router.pudh(`/search?term=${term}`)
    }
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
        <Image
        src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        height={40}
        width={120}
        className='cursor-pointer'
        alt='google'
        onClick={()=> {router.push("/")}}
        />
        <form className='flex flex-grow px-6 py-3 mr-5 ml-10 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center' >
            <input type="text" ref= {inputRef} 
            className='flex-grow w-full focus:outline-none'/>
        <XIcon onClick={()=> (inputRef.current.value="")}
        className='h-7 text-gray-500 cursor-pointer transition duration-100 transf hover:scal-125 sm:mr-3'/>
            <MicrophoneIcon className ="mr-3 h-6 hidden sm:inline-flex text-gray-500 border-l-2 pl-4 border-gray-400"/>
            <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
            <button hidden  type ='submit' onClick={search}>search</button>
        </form>
        <Avatar className={'ml-auto'} url ={"https://yt3.ggpht.com/yti/AHyvSCCmd2DEBQjEgyNcKitfb24luDXAircW7ElKJg=s88-c-k-c0x00ffffff-no-rj-mo"}/>
        </div>

        {/* header option */}

        <HeaderOption/>
        
    </header>
  )
}

export default Header