import { Box, Typography } from "@mui/material";
import { OrdersGrid } from "./components/orders-grid/OrdersGrid";
import { OrdersTable } from "./components/orders-table/OrdersTable";
import styles from "./MyOrders.module.css";
import { TabNavigation } from "../../../../components/tab-navigation";

export function MyOrders({ titles, tabs, orders }) {
  const titlesGrid = {
    paddingRight: { xs: "0", md: "67px" },
    paddingLeft: { xs: "0", md: "24px" },
    borderBottom: "1px solid #0000001F",
  };

  const ordertablegrid = {
    padding: { xs: "19px 5px", md: "19px 24px" },
    backgroundColor: "var(--grey)",
    borderRadius: "8px",
    border: 0,
  };

  return (
    <Box className={styles.myOrdersContainer}>
      <TabNavigation
        titles={tabs}
        tabPadding="12px 16px"
        tabsPadding="12px 18px"
      />
      <Box className={styles.gridsContainer}>
        <OrdersGrid gridStyles={titlesGrid}>
          {titles.map((title, index) => {
            return (
              <Typography key={title} className={styles.titles}>
                {title}
              </Typography>
            );
          })}
        </OrdersGrid>

        <Box className={styles.orderTableContainer}>
          {orders.map((order) => {
            return (
              <OrdersTable key={order.id} {...{ ordertablegrid, order }} />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
