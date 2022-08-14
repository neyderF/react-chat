import React from 'react'


export default function Avatar({ text = null, uri = null }) {


    if (text === null && uri == null) {
        return <p>?</p>
    }

    if (uri !== null) {
        return (<div className='rounded-full bg-red-500 w-10 h-10 flex items-center justify-center'><img className='rounded-full' src={uri} alt="avatar" /></div>)
    }

    return (<div className='rounded-full bg-red-500 w-10 h-10 flex items-center justify-center'><p className=''>{text}</p></div>)

}