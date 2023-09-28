import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Products from "./component/Products";
import ProductDetails from "./component/ProductDetails";
import Login from "./component/login.component";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails   />}></Route>
      </Routes>
    </div>
  );
}

export default App;