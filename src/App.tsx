import { useRef, useState } from 'react'

import { Auth } from './components/Auth'
import Cookies from 'universal-cookie'
import { Chat } from './components/Chat';
const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState<string | null>(null);


  const roomInputRef = useRef<HTMLInputElement>(null);

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth}/>
      </>
    )
  }

  return (
    <div>
      {room ? (
        <Chat room={room}/>
      ):(
        <div>
          <h2>Enter Room Name</h2>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
      )}
    </div>
  )
}

export default App
