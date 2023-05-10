import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
<h1>LISTA DE TAREAS</h1>
      </div>
        <div className='tareas-lista-principal'>
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
