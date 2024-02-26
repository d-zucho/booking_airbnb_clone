import './App.css'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        {/* <Header /> */}
      </Routes>
    </Layout>
  )
}

export default App
