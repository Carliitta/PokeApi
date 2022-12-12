import './App.css';
import Inicio from './componentes/jsx/Inicio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Principal from './componentes/jsx/Principal';
import Detalle from './componentes/jsx/Detalle';
import CrearPoke from './componentes/jsx/CrearPoke';
function App() {
  return (
    <BrowserRouter>
    <Switch> 
      <Route exact path ='/create' component ={CrearPoke}/>
      <Route exact path ='/' component ={Inicio}/>
      <Route exact path ='/home' component ={Principal}/>
      <Route exact path ='/:id' component ={Detalle}/>
    </Switch>  
  </BrowserRouter>

  );
}

export default App;
