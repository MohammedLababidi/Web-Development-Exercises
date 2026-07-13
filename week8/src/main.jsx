import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UserProfileProvider } from "./context/UserProfileContext.jsx";
import { CurrencyProvider } from "./context/CurrencyContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProfileProvider>
      <CurrencyProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CurrencyProvider>
    </UserProfileProvider>
  </BrowserRouter>,
);
