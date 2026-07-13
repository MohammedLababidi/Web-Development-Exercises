import { NavLink, Outlet } from "react-router-dom"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Sidebar() {
  const { darkTheme} = useContext(ThemeContext)
  return (
    <div className={darkTheme ? 'dark' : 'light'}>
    <div className="d-flex">
        <nav className="sidebar col-lg-2 d-flex flex-column p-3 gap-5">
            <NavLink to="/" className={({isActive}) => (isActive ? 'active-1' : 'link-1')}>Home</NavLink>
            <NavLink to="products" className={({isActive}) => (isActive ? 'active-1' : 'link-1')}>Products</NavLink>
            <NavLink to="settings" className={({isActive}) => (isActive ? 'active-1' : 'link-1')}>Settings</NavLink>
        </nav>
        <Outlet />
    </div>
    </div>
  )
}

export default Sidebar