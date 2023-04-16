import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>
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
          {/* Avatar */}
          </div>
      </header>
    </div>
  )
}
