import { Route, Routes } from 'react-router-dom'
import Nav from './componets/Nav'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
