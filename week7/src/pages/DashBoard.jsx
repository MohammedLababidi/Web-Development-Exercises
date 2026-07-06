import { Outlet, NavLink } from "react-router-dom";

function DashBoard() {
  return (
    <div className="d-flex">
      <nav className="d-flex flex-column align-items-start gap-3 fs-5 border-end border-3 border-dark vh-100 p-3">
        <NavLink to="home" className={({isActive}) =>
        (isActive ? 'active' : '')
        }>Home</NavLink>
        <NavLink to="services" className={({isActive}) =>
        (isActive ? 'active' : '')
        }>Services</NavLink>
        <NavLink to="products" className={({isActive}) =>
        (isActive ? 'active' : '')
        }>Products</NavLink>
        <NavLink to="contact" className={({isActive}) =>
        (isActive ? 'active' : '')
        }>Contact</NavLink>
        <NavLink to="settings" className={({isActive}) =>
        (isActive ? 'active' : '')
        }>Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default DashBoard;
