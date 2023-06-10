import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="d-flex d-flex-column align-center">
      <div className="container">
        <div className="d-flex d-space-between">
          <div className="d-flex align-center navbar">
            <div className="title">
              <h1>BookStore CMS</h1>
            </div>
            <div className="menu">
              <ul className="d-flex liststyle">
                <li>
                  <NavLink className="navbar-link" to="/">
                    BOOKS
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/categories">
                    CATEGORIES
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile">
            <CgProfile className="icon" />
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
