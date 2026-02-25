import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-glass">
      <div className="nav-logo">
        🦠 <span>COVID&nbsp;Dashboard</span>
      </div>

      <div className="nav-actions">
        <NavLink to="/" className="nav-btn">
          Country Stats
        </NavLink>

        <NavLink to="/global" className="nav-btn">
          Global
        </NavLink>
      </div>
    </nav>
  );
}