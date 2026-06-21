import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";
import About from "./pages/AboutUs/About";
import "./App.scss";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <BrowserRouter basename="/Employee-Management">
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

          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Register
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
