import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImgNotFound from './components/ImgNotFound/ImgNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App mi_app">
      <BrowserRouter>
        <NavBar /> 
        {/*<ItemCount/>*/}
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId'element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<ImgNotFound/>}></Route>
        </Routes>
        <ItemListContainer saludo={"Bienvenido a F!NE"}/>
      </BrowserRouter>
    </div>
      
  );
        
}

export default App;