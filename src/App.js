import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from 'react';

function App() {
  let [mode, setMode] = useState('light');
  let [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert (null);
    }, 1500);
  }

  const enableDarkMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} enableDarkMode ={enableDarkMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert= {showAlert} heading="Enter The Text To Analyze Below"  mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
