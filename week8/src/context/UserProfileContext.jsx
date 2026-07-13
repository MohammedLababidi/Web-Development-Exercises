import { createContext, useState } from "react"

const UserProfileContext = createContext()

export function UserProfileProvider({ children }) {
  const [user, setUser] = useState({name: '', email: ''})

  return (
    <UserProfileContext.Provider value={{user , setUser}}>
      {children}
    </UserProfileContext.Provider>
  )
}
 
export default UserProfileContext