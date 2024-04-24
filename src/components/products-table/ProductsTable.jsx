import styles from './ProductsTable.module.css'
import { ProductInCart } from '../product-in-cart';
import { useMemo } from 'react';
import { Divider } from '@mui/material';
import { Padding } from '@mui/icons-material';

export const ProductsTable = ({ products }) => {

    const memoizedProducts = useMemo(() => {
        return products?.map((product, index) => (
            <tr key={index}>
                <td><ProductInCart drawer={false} title={product.title} subtitle={product.subtitle} quantity={product.quantity} /></td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                    <div className={styles.operations}>
                        <span>${product.price}</span>
                        <button type="button" className={styles.removeButton}>Remove</button>
                    </div>
                </td>
            </tr>
        ));
    }, [products]);

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tr>
                <td colSpan={4}>
                    <Divider />
                </td>
            </tr>
            <tbody>
                {memoizedProducts}
            </tbody>
        </table>
    )
}