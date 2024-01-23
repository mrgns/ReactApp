import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/navbar';
import Home from "./pages/home";
import AddProduct from "./products/addProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addProduct" element={<AddProduct />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
