// import logo from './logo.svg';

import './App.css';
import LogInFrom from './components/LogInFrom';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
    
       <LogInFrom/>
      <Routes>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
