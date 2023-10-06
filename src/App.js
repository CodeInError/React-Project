import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  // let name = "SaraSansar";
  let [mode, setMode] = useState('light');   // whether dark mode is enabled or not

  const enableDarkMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    // We are Using JSX Fregmentaion '<></>'
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} enableDarkMode ={enableDarkMode}/>
      {/* <Navbar /> */}
      <div className="container my-3">
          <TextForm heading="Enter The Text To Analyze Below" mode={mode} />
          {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
