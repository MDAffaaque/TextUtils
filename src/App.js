import "./App.css";
import Nabbar from "./components/Nabbar";
import TextForms from "./components/TextForms";
import About from "./About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
function App() {
  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#231937";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Nabbar mode={mode} toggleMode={toggleMode} aboutTxt="About" />
      <Alert alert={alert} />
      {/* <div className="container my-5">
        <TextForms
          showAlert={showAlert}
          heading="This is a special textForm"
          mode={mode}
        />
      </div> */}
      <Routes>
        <Route exact path="/"></Route>
        <Route exact path="/home" element={<div className="container my-5">
        <TextForms
          showAlert={showAlert}
          heading="This is a special textForm"
          mode={mode}
        />
      </div>}></Route>

        <Route exact path="/about" element={<About mode={mode} />}></Route>
      </Routes>
      
      {/* <About mode={mode} /> */}
    </>
  );
}

export default App;
