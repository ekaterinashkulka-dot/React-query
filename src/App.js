import { Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ProductDetailes from "./Pages/ProductDetails";
import Phones from "./Pages/Phones";
import Laptops from "./Pages/Laptops";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Login/Profile";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            Головна
          </NavLink>
          <NavLink
            to="/about"
            end
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            Про нас
          </NavLink>
          <NavLink
            to="/products"
            end
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            Продукти
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path="phones" element={<Phones />} />
            <Route path="laptops" element={<Laptops />} />
          </Route>
          <Route
            path="/products/:id"
            element={<ProductDetailes isAuthenticated={isAuthenticated} />}
          />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
