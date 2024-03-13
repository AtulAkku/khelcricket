import { useContext, useState, useEffect, createContext } from 'react';
import { googleLogout } from '@react-oauth/google';
import { toast } from 'react-toastify';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isGUser, setIsGUser] = useState(false);
    const [user, setUser] = useState('');
    const logIn = (userData, isGUser) => {
        setIsAuth(true);
        setUser(userData);
        setIsGUser(isGUser);
        sessionStorage.setItem('isAuth', true);
        sessionStorage.setItem('isGUser', isGUser);
        sessionStorage.setItem('userData', JSON.stringify(userData));
    }
    const logOut = () => {
        if(isGUser){
            googleLogout();
        }
        setIsAuth(false);
        setIsGUser(false);
        sessionStorage.clear();
        toast.warning('You have been Logged out', {
            position: 'top-center',
          });
    }
    useEffect(() => {
        const storedIsAuth = sessionStorage.getItem('isAuth');
        const storedIsGUser = sessionStorage.getItem('isGUser');
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        if (storedIsAuth === 'true') {
            setIsGUser(storedIsGUser);
            setIsAuth(true);
            setUser(userData);
        }
    }, [])
    return (
        <AuthContext.Provider value={{ isAuth, isGUser, user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};