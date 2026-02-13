import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/firstPage'
import YesPage from './pages/yesPage'
import NoPage from './pages/noPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App
