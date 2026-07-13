import { createContext, useState } from "react"

const CurrencyContext = createContext()

function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD')

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyProvider }
export default CurrencyContext