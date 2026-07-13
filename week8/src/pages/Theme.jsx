import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Theme() {
  const {darkTheme, setDarkTheme} = useContext(ThemeContext)
  return (
      <div className="d-flex flex-column">
      <h2 className="settings-title ms-4 mt-4 fw-bold">Settings:</h2>
      <p className="settings-text fs-5 fw-bold ms-4 mt-4">Theme Settings</p>
      <select value={darkTheme ? 'dark' : 'light'} onChange={(e) => setDarkTheme(e.target.value === 'dark')} className="select mt-3 ms-4">
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  )
}

export default Theme