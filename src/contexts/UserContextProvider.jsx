import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('user'))) {
            fetch("https://backend-final-3.onrender.com/api/users")
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                });
        }
    }, []);

    const value = useMemo(() => {
        if (user !== null) {
            localStorage.setItem('user', JSON.stringify([user[0]]));
        }
        const storedUser = JSON.parse(localStorage.getItem('user'));
        return storedUser ? storedUser[0] : null; // Handle case where storedUser is null
    }, [user]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);
