import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App mi_app">
      <header className="App-header">
        <NavBar /> 
        <ItemListContainer saludo={"Bienvenido a F!NE"}/>
      </header>
    </div>
      
  );
        
}

export default App;
