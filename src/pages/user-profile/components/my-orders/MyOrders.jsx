import { Box, Typography } from "@mui/material";
import { OrdersGrid } from "./components/orders-grid/OrdersGrid";
import { OrdersTable } from "./components/orders-table/OrdersTable";
import styles from "./MyOrders.module.css";
import { TabNavigation } from "../../../../components/tab-navigation";

export function MyOrders() {
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

  const titles = ["", "Order ID", "Date", "Price", "Status"];

  const tabs = ["Completed", "Processing", "Cancelled"];

  const orders = [
    {
      id: "#1234756789",
      date: "September 5, 2020",
      price: "$100.50",
      status: "unpaid",
    },
    {
      id: "#1234756789",
      date: "September 5, 2020",
      price: "$218.50",
      status: "Paid",
    },
  ];

  return (
    <Box className={styles.myOrdersContainer}>
      <TabNavigation
        titles={tabs}
        tabPadding="12px 16px"
        tabsPadding="12px 18px"
      />
      <Box className={styles.gridsContainer}>
        <OrdersGrid gridStyles={titlesGrid}>
          {titles.map((title) => {
            return <Typography className={styles.titles}>{title}</Typography>;
          })}
        </OrdersGrid>

        <Box className={styles.orderTableContainer}>
          {orders.map((order, index) => {
            return <OrdersTable key={index} {...{ ordertablegrid, order }} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
