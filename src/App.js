import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Register, Error, Dashboard} from './pages'
function App() {
  return (
    <BrowserRouter >

    <Routes>
     <Route path="/" element={ <Dashboard />} />
     <Route path="/register" element={ <Register />} />
     <Route path="/landing" element={<Landing />} />
     <Route path="/error" element={ <Error />} />
 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
