import styles from "./ProductsTable.module.css";
import { ProductInCart } from "../product-in-cart";
import { useMemo } from "react";
import { Divider } from "@mui/material";
import { calcSubTotal } from "../../modules/order-calculations";

export const ProductsTable = ({
  products,
  isRemove = true,
  isItemOrdered = true,
}) => {
  const memoizedProducts = useMemo(() => {
    return products?.map((product, index) => (
      <tr key={index}>
        {console.log(product)}
        <td>
          <ProductInCart
            isItemOrdered={isItemOrdered}
            src={product.smallImageUrl}
            title={product.title}
            subtitle={product.shortSubtitle}
            quantity={product.quantity}
          />
        </td>
        <td>${product.price}</td>
        <td>{product.orderQuantity}</td>
        <td>
          <div className={styles.operations}>
            <span>${calcSubTotal([product])}</span>
            {isRemove && (
              <button type="button" className={styles.removeButton}>
                Remove
              </button>
            )}
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
      <tbody>
        <tr>
          <td colSpan={4}>
            <Divider />
          </td>
        </tr>
      </tbody>
      <tbody className={styles.mainBody}>{memoizedProducts}</tbody>
    </table>
  );
};
