
import Layout from './Components/Layout'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import './index.css'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div className="app">


      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Layout>




    </div>
  )
}

export default App
