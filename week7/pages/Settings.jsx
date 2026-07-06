import { Outlet, NavLink, useLocation } from "react-router-dom";

function Settings() {
  const location = useLocation();
  const hideMenu = location.pathname !== "/dashboard/settings";
  return (
    <div>
      <h1 className="ms-3">Settings Page</h1>
      {hideMenu === false && (
        <nav className="d-flex flex-column align-items-start gap-3 fs-5 p-3">
          <NavLink to="UserProfile">UserProfile</NavLink>
          <NavLink to="Notifications">Notifications</NavLink>
          <NavLink to="Accability">Accability</NavLink>
          <NavLink to="Theme">Theme</NavLink>
        </nav>
      )}

      <Outlet />
    </div>
  );
}

export default Settings;
