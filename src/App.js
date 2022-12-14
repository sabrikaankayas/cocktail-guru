import { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import Detailed from "./components/Detailed/Detailed";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Random from "./components/Random/Random";
import Random2 from "./components/Random2/Random2";
function App() {


  return (
    <div className="App"> 
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Detailed/>}/>
    <Route path="/Random1" element={<Random/>}/>
    <Route path="/Random2" element={<Random2/>}/>
    </Routes>
    </div>
  );
}

export default App;
