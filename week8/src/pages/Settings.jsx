import { NavLink, Outlet, useLocation } from "react-router-dom";

function Settings() {
  const location = useLocation();
  const hideMenu = location.pathname !== "/settings";
  return (
    <div>
      {hideMenu === false && (
      <nav className="d-flex flex-column ms-5 mt-5">
        <ul className="d-flex flex-column gap-4">
          <li>
            <NavLink to="/settings/user" className="link-1">
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="currency" className="link-1">
              Product Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="theme" className="link-1">
              App Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    )}
    <Outlet />
    </div>
  );
}

export default Settings;
