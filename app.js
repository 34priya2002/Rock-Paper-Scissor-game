import React from "react";
import SignIn from "./components/signIn.jsx";
import SignUp from "./components/signUp.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard.jsx";
const App=()=> {
  return (
    <div>            
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard />}/>
             </Routes>
            </BrowserRouter>
            </div>

  );
};

export default App;
