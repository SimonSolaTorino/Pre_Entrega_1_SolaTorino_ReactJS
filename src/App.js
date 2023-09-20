import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImgNotFound from './components/ImgNotFound/ImgNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/context';

function App() {
  return (
    <div className="App mi_app">
      <BrowserRouter>
        <CartProvider>
          <NavBar /> 
          {/*<ItemCount/>*/}
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId'element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<ImgNotFound/>}></Route>
          </Routes>
          {/*<ItemListContainer saludo={"Bienvenido a F!NE"}/>*/}
        </CartProvider>
      </BrowserRouter>
    </div>
      
  );
   }

export default App;