
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { UserProvider } from './UserContext'


function App() {


  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
