import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  // let name = "SaraSansar";
  return (
    // We are Using JSX Fregmentaion '<></>'
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar /> */}
      <div className="container my-3">
          {/* <TextForm heading="Enter The Text To Analyze Below" /> */}
          <About></About>
      </div>
    </>
  );
}

export default App;
