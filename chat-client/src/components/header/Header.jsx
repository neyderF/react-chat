
import React from 'react'
import { BiDotsVertical } from 'react-icons/bi';
import Avatar from '../avatar/Avatar';

export default function Header() {


    function notifyMe() {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }
      
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
          // If it's okay let's create a notification
          var notification = new Notification("Hi there!");
        }
      
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
              var notification = new Notification("Hi there!");
            }
          });
        }
      
        // At last, if the user has denied notifications, and you 
        // want to be respectful there is no need to bother them any more.
      }

    return (<div className='flex items-center px-4 py-3 bg-primary-color justify-between fixed w-1/4'>
        {/* <p className=''>N-CHAT</p> */}

        <Avatar uri="https://i.pravatar.cc/50"/>
        <button className='bg-transparent outline-none' onClick={()=>notifyMe()}><BiDotsVertical size={'22px'} /></button>

    </div>)
}