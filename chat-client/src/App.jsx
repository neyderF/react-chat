import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import io from 'socket.io-client'
import Chat from './components/chat/Chat'
import Sidebar from './components/sidebar/Sidebar'

const socket = io('http://localhost:4000');

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const [receivedMessages, setReceivedMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', message)
    setMessage("")
  }


  useEffect(() => {

    const receiveMessage = (data) => {

      setReceivedMessages((receivedMessages) => [...receivedMessages, {
        message: data.message,
        from: data.from
      }])
    }
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])


  return (
    <div className="App ">
      <div className='flex flex-row '>
        <Sidebar />
        <Chat />
      </div>
{/* 
      <h1 className="text-3xl font-bold underline text-yellow-300 hover:text-red-500">
        Hello world!
      </h1>

      {receivedMessages.map((message, index) => (
        <div key={index}>
          <p>{message.from}</p>
          <p>{message.message}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>

        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
        <button type='submit'>
          Enviar
        </button>
      </form> */}
    </div>
  )
}

export default App
