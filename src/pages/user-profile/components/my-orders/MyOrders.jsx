import { Box, Typography } from "@mui/material";
import { OrdersGrid } from "./components/orders-grid/OrdersGrid";
import { OrdersTable } from "./components/orders-table/OrdersTable";
import styles from "./MyOrders.module.css";
import { TabNavigation } from "../../../../components/tab-navigation";
import { useEffect, useState, useRef } from "react";

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

export function MyOrders({ orders, onOrderClick }) {
  const [orderCategory, setorderCategory] = useState("completed");
  const [displayedOrders, setDisplayedOrders] = useState(20);
  const orderTableRef = useRef(null);

  const handleScroll = () => {
    const container = orderTableRef.current;
    if (container) {
      const scrollPosition = container.scrollTop + container.clientHeight;
      const tableHeight = container.scrollHeight;

      if (Math.floor(scrollPosition) === tableHeight) {
        fetchMoreOrders();
      }
    }
  };

  useEffect(() => {
    const container = orderTableRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [orders]);

  const fetchMoreOrders = async () => {
    try {
      setDisplayedOrders((prevDisplayedOrders) => prevDisplayedOrders + 20);
    } catch (error) {
      console.error("Failed to fetch more orders:", error);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"40px"}
      marginBottom={"269px"}
    >
      <TabNavigation
        titles={["Completed", "Processing", "Cancelled"]}
        tabPadding="12px 16px"
        tabsPadding="12px 18px"
        handleTabClick={setorderCategory}
      />
      <Box className={styles.tableContainer}>
        <Box className={styles.gridsContainer}>
          <OrdersGrid gridStyles={titlesGrid}>
            {titles?.map((title) => {
              return (
                <Typography key={title} className={styles.titles}>
                  {title}
                </Typography>
              );
            })}
          </OrdersGrid>

          <Box
            className={styles.orderTableContainer}
            ref={orderTableRef} // Set ref to the orderTableContainer
          >
            {orders?.slice(0, displayedOrders)?.map((order) => {
              return (
                <Box>
                  <OrdersTable
                    key={order.id}
                    {...{ ordertablegrid, order, onOrderClick }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
