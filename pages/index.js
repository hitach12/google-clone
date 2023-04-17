import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Avatar from '@/components/Avatar'
import {ViewGridIcon , MicrophoneIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '@/components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const inputRef = useRef(null)
  const router = useRouter()

  const search = e => {
    e.preventDefault()
    const term = inputRef.current.value
if(!term) return 
router.push(`/search?term=${term}`)
  }
  return (
    
    <div className='flex flex-col item ju h-screen'>
      <Head>
      <title>
       google clone   
      </title>
    </Head>
    
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
          <div className='flex space-x-4 items-center '>
          <p className='link'>About</p>
          <p className='link'>Store</p>
          </div>
          <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          
          
          {/* Icon */}

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full
           hover:bg-gray-100 cursor-pointer '/>
          <Avatar url ={"https://yt3.ggpht.com/yti/AHyvSCCmd2DEBQjEgyNcKitfb24luDXAircW7ElKJg=s88-c-k-c0x00ffffff-no-rj-mo"}/>
          </div>
      </header>


      {/* body */}

      <form 
      className='flex flex-col items-center mt-28 flex-grow w-4/5'
      >
         <Image src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
         height={300}
         width={400}
         alt='google'
         />

         <div className='flex w-full mt-5 hover:shadow-xl focus-within:shadow-lg max-w-md
         rounded-full border-gray-500 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500 '/>
          <input ref={inputRef} className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5'/>
         </div>

         <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search
          </button>
          <button className='btn' onClick={search}>i'm feeling lucky
          </button>
         </div>
      </form>

      <Footer/>
    </div>
  )
}
