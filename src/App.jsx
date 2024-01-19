
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Products from './pages/Products/Products'


function App() {


  return (
    <div>
     <Header/>
    <Routes>      
      <Route  path='/' element={ <Products/> }/> 
    </Routes>
     
  
    </div>
  )
}

export default App
