import { useContext } from "react"
import { login, register, logout } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext"

export const useLogin = () => {

        const {changeAuthState} = useAuthContext()

        const loginHandler = async(email,password) => {
               const result = await login(email,password)

               changeAuthState(result)

               return result
                
            
        }
    return loginHandler
}

export const useRegister = () => {
    const {changeAuthState} = useAuthContext()


    const   registerHandler = async (username, email,password) => {
        const result = await register(username,email, password)

        changeAuthState(result)

        return result
    }

    return registerHandler

}

export const useLogout = () => {
    const {logout: localLogout} = useAuthContext();

    const logoutHandler = async () => {
        try {
          await logout();
          localLogout();
         } catch (error) {
          console.error("Failed to log out:", error);
        }
      };
    
      return logoutHandler;
    };