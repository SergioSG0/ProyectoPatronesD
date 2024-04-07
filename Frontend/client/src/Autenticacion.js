// Autenticacion.js
import { useState, useEffect, useCallback } from 'react';

const Autenticacion = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    clearTimeout(logoutTimer);
  }, [logoutTimer]);

  const resetLogoutTimer = useCallback(() => {
    clearTimeout(logoutTimer);
    const timer = setTimeout(() => {
      handleLogout();
    }, 6000); // 60000 milliseconds = 1 minute (adjust as needed)
    setLogoutTimer(timer);
  }, [logoutTimer, handleLogout]);

  useEffect(() => {
    const authInfo = localStorage.getItem('isAuthenticated');
    if (authInfo) {
      setIsAuthenticated(true);
      resetLogoutTimer();
    }
  }, [resetLogoutTimer, handleLogout]); // Se agregó handleLogout como dependencia

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    resetLogoutTimer();
  };

  return { isAuthenticated, handleLogin, handleLogout };
};

export default Autenticacion;