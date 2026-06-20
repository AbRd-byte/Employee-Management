import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";
import About from "./pages/AboutUs/About";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <header className="top-navbar">
        <div className="logo">🎓 Student Portal</div>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Employees
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
