import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Currency from "./pages/Currency";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Theme from "./pages/Theme";
import UserProfile from "./pages/UserProfile";
import { useContext } from "react";
import UserProfileContext from "./context/UserProfileContext";
import ThemeContext from "./context/ThemeContext";




// ! add all the context providers in here 
function App() {
  const { user } = useContext(UserProfileContext);
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className="profile d-flex fw-bold">
        <p style={{ color: "orangered" }}>Username:</p>
        <p
          className="mb-0 ps-2 pe-4"
          style={{ color: darkTheme ? "white" : "blacl" }}
        >{`${user.name ? user.name : "---"}`}</p>
        <div className="line">|</div>
        <p className="ps-4" style={{ color: "orangered" }}>
          Email:
        </p>
        <p
          className="mb-0 ps-2"
          style={{ color: darkTheme ? "white" : "blacl" }}
        >{`${user.email ? user.email : "---"}`}</p>
      </div>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          //! fix the routes in here to be like this == /products/details/1
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="currency" element={<Currency />} />
            <Route path="theme" element={<Theme />} />
            <Route path="user" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
