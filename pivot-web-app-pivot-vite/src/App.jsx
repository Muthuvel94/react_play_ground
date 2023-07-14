import { useState } from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

function App() {
  const [isLogin, setLogin] = useState(false)

  if(!isLogin) {
    return (
      <Login/>
    )
  }
  else {
    return (
    <Home/>
    )
  }
}

export default App
