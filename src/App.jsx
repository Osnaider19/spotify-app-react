import './App.css'

import { Routes , Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Login } from './page/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
