import React, { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = usePersistedState("auth", {});

  const changeAuthState = (data) => {
    setAuthData(data);
  };

  const clearAuthState = () => {
    setAuthData({});
  };

  const logout = () => {
    setAuthData({})
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authData?.accessToken,
        username: authData?.username,
        email: authData?.email,
        userId: authData?._id,     
        token: authData?.accessToken,
        changeAuthState,
        clearAuthState,
        logout
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);