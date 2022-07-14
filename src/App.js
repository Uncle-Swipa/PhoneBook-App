import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './Components/RegisterPage';
import Layout from './Components/Layout';
import Homepage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import AllContacts from './Components/AllContactPage';
import SingleContactPage from './Components/SingleContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route index element = {<Homepage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/all-contact' element={<AllContacts />} />
            <Route path='/single-page/:id' element={<SingleContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
