import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ProfileSidebar } from "../../components/profile-sidebar/ProfileSidebar";
import { UserInformation } from "./components/user-information/UserInformation";
import { MyOrders } from "./components/my-orders/MyOrders";
import { ItemsOrdered } from "./components/items-ordered/ItemsOrdered";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchApiData } from "../../modules/fetch-api-data/FetchApiData";
import { Routes, Route } from "react-router-dom";
import { TitleSection } from "./components/title-section";

export const UserProfile = () => {
  const [title, setTitle] = useState("Personal Information");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);
  const [orders, setOrders] = useState();
  const [orderData, setOrderData] = useState();
  const navigate = useNavigate();

  const titleSetter = (num) => {
    setTitle(buttonList[num].label);
  };

  const handleOrderClick = (OrderId, orderNumber) => {
    setSelectedOrderId(OrderId);
    setOrderNumber(orderNumber);
    navigate(`/user-profile/my-orders/order#${orderNumber}`);
  };

  const buttonList = [
    {
      label: "Personal Information",
    },
    {
      label: "Refer and Earn",
    },
    {
      label: "My Orders",
    },
    {
      label: "My Wishlist",
    },
    {
      label: "My Reviews",
    },
    {
      label: "My Address Book",
    },
    {
      label: "My Saved Cards",
    },
  ];

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedOrders = await fetchApiData("orders");
        setOrders(fetchedOrders);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataAsync();
  }, []);

  useEffect(() => {
    if (selectedOrderId) {
      setTitle(`Order#${orderNumber}`);
      const fetchDataAsync = async () => {
        try {
          const fetchedOrderItems = await fetchApiData(
            `orders/${selectedOrderId}`
          );
          setOrderData(fetchedOrderItems);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchDataAsync();
    }
  }, [selectedOrderId]);

  return (
    <Box
      sx={{
        padding: "24px 20px",
        "@media (max-width: 768px)": { "&": { padding: "16px" } },
      }}
    >
      <TitleSection {...{ title }} />
      <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
        <ProfileSidebar
          SidebarOptions={buttonList}
          titleSetter={titleSetter}
          {...{ setSelectedOrderId }}
        />
        <Outlet />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route
              path="my-orders"
              element={
                <MyOrders orders={orders} onOrderClick={handleOrderClick} />
              }
            />
            <Route
              path="my-orders/order"
              element={
                <ItemsOrdered {...{ orderData }} itemId={selectedOrderId} />
              }
            />
            <Route index element={<UserInformation />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};
