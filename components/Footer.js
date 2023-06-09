import React from 'react'
import {GlobeIcon} from '@heroicons/react/solid'

function Footer() {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-200 text-sm text-gray-500'>
        <div className='px-8 py-3'>
            <p>Morocco</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-y-4 grid-flow-row-dense px-8 py-3'>
            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 '>
            <p className='h-5 mr-1 text-gray-700'>How Search works</p>
            </div>
<div className='flex justify-center space-x-9 whitespace-nowrap md:justify-self-start'>
    <p>About</p>
    <p>Advertising</p>
    <p>Buesiness</p>
    
</div>
<div className=' flex justify-center space-x-8 md:ml-auto'>
   <p>Privacy</p>
   <p>Terms</p>
   <p>Settings</p> 
</div>
        </div>
    </footer>
  )
}

export default Footer