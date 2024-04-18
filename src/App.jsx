import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'

export default function () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<SignIn />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/presentation" element={<About />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
