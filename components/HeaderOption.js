import React from 'react'
import {DotsVerticalIcon , MapIcon , NewspaperIcon , PhotographIcon , PlayIcon , SearchIcon} from '@heroicons/react/outline'
import Option from './Option'

function HeaderOption() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm mg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
    {/* // left */}
    <div className='flex space-x-6'>
    <Option Icon = {SearchIcon} title='All' selected/>
    <Option Icon = {PhotographIcon} title='Images' />
    <Option Icon = {PlayIcon} title='Videos' />
    <Option Icon = {NewspaperIcon} title='News' />
    <Option Icon = {MapIcon} title='Maps' />
    <Option Icon = {DotsVerticalIcon} title='More' />




    </div>

    {/* // rights */}
    <div className='flex space-x-4'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
   
    </div>
    </div>
  )
}

export default HeaderOption