import { AuthProvider } from "./auth"


function ContextProvider({ children }) {
    return (
      <AuthProvider>
        {children}
      </AuthProvider>
    )
  }

  export default ContextProvider