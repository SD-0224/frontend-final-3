import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('products'))) {
            fetch("https://backend-final-3.onrender.com/api/products")
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                });
        }
    }, []);

    const value = useMemo(() => {
        if (products !== null) {
            localStorage.setItem('products', JSON.stringify([products[0], products[1]]));
        }
        return JSON.parse(localStorage.getItem('products'))
    }, [products]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => useContext(ProductsContext);
