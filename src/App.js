import './App.css';
import Footer from './komponente/footer';
import NavBar from './komponente/navbar';
import Pocetna from './komponente/pocetna';
import Login from './komponente/login';

import Register from './komponente/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const[token,setToken] = useState();

  function addToken(auth_token){
    setToken(auth_token);
}
  return (
    <div  >
        <BrowserRouter className="App">
        <NavBar></NavBar>
        <Pocetna></Pocetna>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  addToken={addToken} ></Login>}></Route>
            <Route path="/register" element={ <Register ></Register>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}
export default App;