import './App.css';
import LoginFrom from './components/LogInFrom';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import {Routes,Route } from 'react-router-dom';
import modal from 'react-modal'
function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginFrom/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
