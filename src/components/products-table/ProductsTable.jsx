import styles from "./ProductsTable.module.css";
import { ProductInCart } from "../product-in-cart";
import { useMemo } from "react";
import { calcSubTotal } from "../../modules/order-calculations";

export const ProductsTable = ({
  products,
  showRemoveButton = true,
  isItemOrdered = true,
}) => {
  const memoizedProducts = useMemo(() => {
    return products?.map((product, index) => (
      <tr key={index}>
        <td>
          <ProductInCart
            drawer={false}
            isItemOrdered={isItemOrdered}
            src={product.smallImageUrl}
            title={product.title}
            subtitle={product.shortSubtitle}
            quantity={product.quantity}
          />
        </td>
        <td>{product.price}</td>
        <td>{product.orderQuantity || product.quantity}</td>
        <td>
          <div className={styles.operations}>
            <span>${calcSubTotal([product])}</span>
            {showRemoveButton && (
              <button type="button" className={styles.removeButton}>
                Remove
              </button>
            )}
          </div>
        </td>
      </tr>
    ));
  }, [isItemOrdered, showRemoveButton, products]);

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
      <tbody className={styles.mainBody}>{memoizedProducts}</tbody>
    </table>
  );
};
