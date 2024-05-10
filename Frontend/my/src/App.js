
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <h2>...... Welcome ......</h2>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>


      </Routes>
    </div>
  );
}

export default App;
