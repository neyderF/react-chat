import React from 'react'
import { BiDotsVertical } from 'react-icons/bi'
import Avatar from '../avatar/Avatar'


export default function ChatHeader() {



    return (<div className='flex items-center px-4 py-3 bg-light-color justify-between'>
        {/* <p className=''>N-CHAT</p> */}

        <Avatar uri="https://i.pravatar.cc/50" />
        <button className='bg-transparent outline-none' ><BiDotsVertical size={'22px'} /></button>

    </div>)
}