
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'                       
import Contact from './pages/Contact'                       
import Categories from './pages/Categories'                       




const App = () => {
  return (
    <div className='w-full overflow-x-hidden bg-white'>
      <Navbar />
      <main className='pt-15'>
        <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/categories" element={<Categories/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/shop" element={<Shop/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/login" element={<Login/> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
