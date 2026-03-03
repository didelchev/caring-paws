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

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authData?.accessToken,
        username: authData?.username,
        email: authData?.email,
        userId: authData?._id,       // ← exposed for ownership checks
        token: authData?.accessToken,
        changeAuthState,
        clearAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);