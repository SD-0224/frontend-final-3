import { Box, Typography } from "@mui/material";
import { OrdersGrid } from "./components/orders-grid/OrdersGrid";
import { OrdersTable } from "./components/orders-table/OrdersTable";
import styles from "./MyOrders.module.css";
import { TabNavigation } from "../../../../components/tab-navigation";
import { ItemsOrdered } from "../items-ordered/ItemsOrdered";
import { useState } from "react";

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

const orders = [
  {
    id: "#1713080945276",
    status: "unpaid",
    date: "September 5, 2020",
    price: "$218.00",
  },
  {
    id: "#1713080945502",
    status: "unpaid",
    date: "September 5, 2020",
    price: "$218.00",
  },
  {
    id: "#1713080945502",
    status: "unpaid",
    date: "September 5, 2020",
    price: "$218.00",
  },
];

export function MyOrders({ onOrderClick }) {
  const [orderCategory, setorderCategory] = useState("completed");

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
      <TabNavigation
        titles={["Completed", "Processing", "Cancelled"]}
        tabPadding="12px 16px"
        tabsPadding="12px 18px"
        handleTabClick={setorderCategory}
      />
      <Box className={styles.gridsContainer}>
        <OrdersGrid gridStyles={titlesGrid}>
          {titles.map((title) => {
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
              <OrdersTable
                key={order.id}
                {...{ ordertablegrid, order, onOrderClick }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
