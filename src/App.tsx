import { Route, Routes } from 'react-router-dom'
import Nav from './componets/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateContent from './pages/CreateContent'
import ContentDetail from './pages/ContentDetail'
import EditDetail from './pages/EditDetail'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateContent" element={<CreateContent />} />
        <Route path="/content/:id" element={<ContentDetail />} />
        <Route path="/edit/:id" element={<EditDetail />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
