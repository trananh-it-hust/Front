import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [islogin, setislogin] = useState(false);
  const login = async (userData, token, bool) => {
    setUser(userData);
    setislogin(true);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setUser(null);
    setislogin(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, islogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
