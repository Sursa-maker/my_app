import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null); 

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  } 

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    if (cls === 'primary') {
      document.getElementById('one').className = "btn btn-primary"  ;
      document.getElementById('two').className = "btn btn-success";
      document.getElementById('three').className = "btn btn-success";
      document.getElementById('four').className = "btn btn-success";
      document.getElementById('five').className = "btn btn-success";
    }
    if (cls === 'success') {
      document.getElementById('one').className = "btn btn-primary";
      document.getElementById('two').className = "btn btn-primary";
      document.getElementById('three').className = "btn btn-primary";
      document.getElementById('four').className = "btn btn-primary";
      document.getElementById('five').className = "btn btn-primary";
    }
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    } 
  }

  return (
  <>
    {/* <Router> 👈 Wrap everything inside Router */}
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={ */}
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          {/* } />
        </Routes> */}
      </div>
    {/* {/* </Router> */}
  </>  
  
  );
}

export default App;
