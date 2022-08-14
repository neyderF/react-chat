import React, { useState } from 'react'
import Avatar from '../avatar/Avatar'
import Header from '../header/Header'


export default function Sidebar() {

    const [recentChats, setRecentChats] = useState([{
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },

    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },
    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 10
    },

    {
        id: 1,
        name: "Juan Perez",
        avatarUri: "",
        lastMessage: {
            message: "se me olvidó la tarea",
            state: "readed",
            date: "2022-12-16"
        },
        unreadedMessages: 15
    },


    ])


    return (<div className='w-1/4 relative h-screen'>

        <div className='flex flex-col overflow-y-auto h-screen'>
            <Header />
            <p className='px-2 py-4 text-xs bg-secondary-color mt-16'>Coversaciones recientes</p>
            {recentChats.map((chat, index) => (

                <ChatItem key={index} chat={chat} />
            ))}

        </div>
    </div>)
}


const ChatItem = ({ chat }) => {

    return (
        <div className='flex flex-row p-2 bg-secondary-color items-center'>
            <Avatar uri="https://i.pravatar.cc/50"/>

            <div className='flex flex-col ml-2 flex-grow'>
                <div className='flex flex-row justify-between '>
                    <p className='font-semibold'>{chat.name}</p>
                    <p className='font-light text-sm'>{chat.lastMessage.date}</p>
                </div>
                <div className='flex flex-row justify-between items-end'>
                    <p className='font-light text-sm'>{chat.lastMessage.message}</p>
                    <p className='font-semibold'>{chat.unreadedMessages}</p>
                </div>
            </div>
        </div>
    );

}