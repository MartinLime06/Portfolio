import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer 
      position='top-center'
      autoClose={5000}
      pauseOnFocusLoss
      draggable
      theme='colored'
      />
      <Routes>
          <>
            <Route path="/" element={<Home />} />
          </>
      </Routes>
    </Router>
  );
};

export default App;
