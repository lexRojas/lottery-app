import Login from "./pages/Login";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MillerApp from "./pages/MillerApp";
import UseEstado from "./context/UseEstado";

function App() {
  return (
    <div className="App">
     
     <UseEstado>
      <BrowserRouter>
      <HeaderBar />
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/app" element= {<MillerApp />} />
          <Route path="*" element= {<Login />} />
        </Routes>       
      </BrowserRouter>
      </UseEstado>
    </div>
  );
}

export default App;
