
import { Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div >
      <h1>E-cart</h1>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        

      </Routes>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
