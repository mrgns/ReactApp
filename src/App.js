import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/navbar';
import Home from "./pages/home";
import AddProduct from "./products/addProduct";
import EditProducts from "./products/editProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProducts from "./products/viewProduct";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addProduct" element={<AddProduct />}/>
          <Route exact path="editProduct/:id" element={<EditProducts/>}/>
          <Route exact path="viewProduct/:id" element={<ViewProducts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
