 import React,{Suspense} from 'react'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
 import About from './components/About'
 import Cart from './components/Cart'
 import Contact from './components/Contact'
 import Error from './components/Error' 
 import SingleProducts from './components/SingleProducts'
 import Header from './components/Header'
 import Footer from './components/Footer'
 const Products =React.lazy(()=>import('./components/Products'))
 const App = () => {
   return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>} />   
        <Route exact path='/products' element={ <Suspense fallback={'Please Wait'} ><Products/></Suspense> }/>   
        <Route path='/contact' element={<Contact/>}/>   
        <Route path='/singleproducts/:id' element={<SingleProducts/>}/>   
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='*' element={<Error/>} />   
      </Routes>
       <Footer/>
      </BrowserRouter>
   )
 }
 
 export default App