import { PageTitle } from "../../components/page-title/PageTitle";
import { ProductsTable } from "../../components/products-table";
import { Box } from "@mui/material";
import styles from "./MyCart.module.css";
import { OrderInfo } from "../../components/order-info/OrderInfo";
import { CustomButton } from "../../components/custom-button";
import {
  calcTotal,
  calcSubTotal,
  calcDiscount,
} from "../../modules/order-calculations";
import { Link } from "react-router-dom";

import { useDataContext } from "../../contexts";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { useResetPageScroll } from "../../hooks/reset-page-scroll";
import { EmptyCartMessage } from "../../components/empty-cart-message";

export const MyCart = () => {
  useResetPageScroll();

  const { products } = useDataContext();

  let isThereProducts = products?.length > 0;

  let subTotal = calcSubTotal(products);
  let discount = calcDiscount(products);
  let total = calcTotal(subTotal, discount);

  const orderDetails = [
    ["Sub Total", `$${subTotal}`],
    ["Discount", `-$${discount}`],
    ["Delivery Fee", "-$12.00"],
    ["Grand Total", `$${total}`],
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        marginBottom: "170px",
        "@media (max-width: 768px)": {
          "&": { marginBottom: "50px", padding: "12px" },
        },
      }}
    >
      <Breadcrumbs />
      <PageTitle title={"my cart"} />
      {
        isThereProducts ?
          <Box className={styles.grid}>
            <Box className={styles.tableContainer}>
              <ProductsTable products={products} />
            </Box>
            <Box className={styles.orderInfo}>
              <OrderInfo title={"Order Summary"} orderInfo={orderDetails} />
              <Box className={styles.operations}>
                <Link to="/checkout">
                  <CustomButton label={"Place Order"} style={{ width: "100%" }} />
                </Link>
                <Link to="/">
                  <CustomButton
                    label={"Continue Shopping"}
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Link>
              </Box>
            </Box>
          </Box> : <EmptyCartMessage />
      }
    </Box>
  );
};
