import { Box, Typography } from "@mui/material";
import { OrdersGrid } from "./components/orders-grid/OrdersGrid";
import { OrdersTable } from "./components/orders-table/OrdersTable";
import styles from "./MyOrders.module.css";
import { TabNavigation } from "../../../../components/tab-navigation";
import { useEffect, useState, useRef } from "react";
import {
  calcDiscount,
  calcSubTotal,
  calcTotal,
} from "../../../../modules/order-calculations";

const titlesGrid = {
  paddingRight: { xs: "0", md: "67px" },
  paddingLeft: { xs: "0", md: "24px" },
  borderBottom: "1px solid #0000001F",
};

const orderTableGrid = {
  padding: { xs: "19px 5px", md: "19px 24px" },
  backgroundColor: "var(--grey)",
  borderRadius: "8px",
  border: 0,
};

const titles = ["", "Order ID", "Date", "Price", "Status"];

export function MyOrders({ orders, onOrderClick }) {
  const [orderCategory, setorderCategory] = useState("completed");
  const [displayedOrders, setDisplayedOrders] = useState(20);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const orderTableRef = useRef(null);

  const calcOrderTotal = (products) => {
    let subTotal = calcSubTotal(products);
    let discount = calcDiscount(products);
    let total = calcTotal(subTotal, discount);
    return "$" + total;
  };

  useEffect(() => {
    if (orderCategory) {
      const filtered = orders?.filter(
        (order) => order.category === orderCategory.toLowerCase()
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders);
    }
  }, [orderCategory, orders]);

  const handleScroll = () => {
    const container = orderTableRef.current;
    if (container) {
      const scrollPosition = container.scrollTop + container.clientHeight;
      const tableHeight = container.scrollHeight;
      if (Math.abs(scrollPosition - tableHeight) <= 20) {
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
      marginBottom={{ lg: "269px", sm: "100px" }}

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

          <Box className={styles.orderTableContainer} ref={orderTableRef}>
            {filteredOrders?.slice(0, displayedOrders)?.map((order) => {
              return (
                <Box>
                  <OrdersTable
                    key={order.id}
                    {...{ orderTableGrid, order, onOrderClick }}
                    total={calcOrderTotal(order.products)}
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
