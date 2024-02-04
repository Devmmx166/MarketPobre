
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import WebPage from './pages/Products/WebPage'
import Product from './pages/Product/Product'



function App() {


  return (
    <div>    
    <Routes>      
      <Route path='/' element={ <Login/>}/> 
      <Route path='/Products' element={<WebPage/>}/>
      <Route path='/Product/:id' element={<Product/>}/>
    </Routes>   
  
    </div>
  )
}

export default App
