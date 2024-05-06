import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchApiData } from "../modules/fetch-api-data/FetchApiData";
import { Storage } from "../modules/sotrage";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        // Fetch users if not in localStorage
        if (!Storage.get('user')) {
            (async () => {
                try {
                    const fetchedUserData = await fetchApiData("users");
                    setUsers(fetchedUserData);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            })();
        }

        // Fetch products if not in localStorage
        if (!Storage.get('products')) {
            Storage.add("products", [])
        }
    }, []);

    const contextValue = useMemo(() => {
        // Store users in localStorage
        if (users) {
            Storage.add("user", users[0]);
        }

        // Return both users and products from localStorage
        return {
            user: Storage.get("user"),
            products: Storage.get("products")
        };
    }, [users]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);