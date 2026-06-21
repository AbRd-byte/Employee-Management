import React, { useState } from "react";
import "./Home.scss";
import { HiBars3 } from "react-icons/hi2";
import { FaUserGraduate } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`home-container ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="menu-btn" onClick={() => setCollapsed(!collapsed)}>
            <HiBars3 />
          </button>

          {!collapsed && <h2 className="sidebar-logo">Student Portal</h2>}
        </div>

        <nav>
          <ul>
            <li>
              <span className="icon">
                <FaUserGraduate />
              </span>
              <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                Course Details
              </span>
            </li>

            {/* <li>
              <span className="icon">
                <FaClipboardList />
              </span>

              <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                Registration
              </span>
            </li> */}

            <li>
              <span className="icon">
                <FaBuilding />
              </span>

              <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                Department
              </span>
            </li>
            <li>
              <Link
                to="/registration"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <span className="icon">
                  <FaClipboardList />
                </span>

                <span className={`menu-text ${collapsed ? "hide-text" : ""}`}>
                  Registration
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Right Section */}
      <div className="main-section">
        <main className="content">
          <h1>Student Management Dashboard</h1>

          <p>
            Manage student records, registrations and departments from one
            place.
          </p>

          <div className="card-container">
            <div className="card">
              <span className="icon">
                <FaUserGraduate />
              </span>
              <h3>Student Details</h3>

              <p>View and manage student records.</p>
            </div>

            <div className="card">
              <span className="icon">
                <FaClipboardList />
              </span>
              <h3>Registration</h3>

              <p>Add new student registrations.</p>
            </div>

            <div className="card">
              <span className="icon">
                <FaBuilding />
              </span>
              <h3>Department</h3>

              <p>Manage department information.</p>
            </div>
          </div>
        </main>

        <footer className="footer">
          © 2026 Student Management System | Developed with React & TypeScript
        </footer>
      </div>
    </div>
  );
};

export default Home;
