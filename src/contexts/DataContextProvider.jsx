import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchApiData } from "../modules/fetch-api-data/FetchApiData";
import { Storage } from "../modules/sotrage";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [products, setProducts] = useState(null);

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
            (async () => {
                try {
                    const fetchedProductData = await fetchApiData("products");
                    setProducts(fetchedProductData);
                } catch (error) {
                    console.error("Error fetching product data:", error);
                }
            })();
        }
    }, []);

    const contextValue = useMemo(() => {
        // Store users and products in localStorage
        if (users && products) {
            Storage.add("user", users[0]);
            Storage.add("products", [products[0], products[1]]);
        }

        // Return both users and products from localStorage
        return {
            user: Storage.get("user"),
            products: Storage.get("products")
        };
    }, [users, products]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);