import { useContext} from "react"
import CurrencyContext from "../context/CurrencyContext"

function Currency() {
  const {currency, setCurrency} = useContext(CurrencyContext)
  return (
      <div className="d-flex flex-column">
      <h2 className="settings-title ms-4 mt-4 fw-bold">Settings:</h2>
      <p className="settings-text fs-5 fw-bold ms-4 mt-4">Product Settings</p>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="select mt-3 ms-4">
        <option value="USD">Dollar (USD)</option>
        <option value="SYP">Syrian Pound (SYP)</option>
      </select>
    </div>
  )
}

export default Currency