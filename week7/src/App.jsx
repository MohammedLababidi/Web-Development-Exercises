import { Route , Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";
import Notifications from "./pages/Notifications";
import Accability from "./pages/Accability";
import Theme from "./pages/Theme";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({isLoggedIn , children}) {
    if(!isLoggedIn) {
        return <Navigate to='/login' />
    }
    return children
    
}

function App() {
    const [isLoggedIn , setIsLoggedIn] = useState(() => {
        return localStorage.getItem('auth') === 'true'
    })
    return (
        <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DashBoard />
                </ProtectedRoute>} >
            <Route path="home" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="settings" element={<Settings />} >
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="Notifications" element={<Notifications />} />
            <Route path="Accability" element={<Accability />} />
            <Route path="Theme" element={<Theme />} />

            </Route>
            </Route>
        </Routes>
        
    )
}

export default App