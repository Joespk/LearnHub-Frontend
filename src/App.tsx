import { Route, Routes } from 'react-router-dom'
import Nav from './componets/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateContent from './pages/CreateContent'
import ContentDetail from './pages/ContentDetail'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateContent" element={<CreateContent />} />
        <Route path="/content/:id" element={<ContentDetail />} />
      </Routes>
    </div>
  )
}

export default App
