import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './Components/RegisterPage';
import Layout from './Components/Layout';
import Homepage from './Components/HomePage';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route index element = {<Homepage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
