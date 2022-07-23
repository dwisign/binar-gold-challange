import './App.css'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Single from './pages/Single'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="archive" element={<Archive />} />
        <Route path="single" element={<Single />} />
      </Routes>
    </div>
  )
}

export default App;
