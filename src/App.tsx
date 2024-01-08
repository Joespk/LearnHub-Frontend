import { Route, Routes } from 'react-router-dom'
import Nav from './componets/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateContent from './pages/CreateContent'
import ContentDetail from './pages/ContentDetail'
import Register from './pages/Register'
import Header from './componets/Header'

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateContent" element={<CreateContent />} />
        <Route path="/content/:id" element={<ContentDetail />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
