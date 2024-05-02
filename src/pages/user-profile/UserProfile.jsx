import { useEffect, useState } from "react";
import { PageTitle } from "../../components/page-title/PageTitle";
import { Box } from "@mui/material";
import { ProfileSidebar } from "../../components/profile-sidebar/ProfileSidebar";
import { UserInformation } from "./components/user-information/UserInformation";
import { CustomButton } from "../../components/custom-button";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { MyOrders } from "./components/my-orders/MyOrders";
import { ItemsOrdered } from "./components/items-ordered/ItemsOrdered";
import { CustomInput } from "../../components/custom-input";
import { LeftChevron } from "../../components/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchData } from "../../components/fetch-url/FetchUrl";
import { Routes, Route } from "react-router-dom";

export const UserProfile = () => {
  const [title, setTitle] = useState("Personal Information");
  const [selectedOrderId, setselectedOrderId] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null);
  const navigate = useNavigate();
  const [orders, setOrders] = useState();
  const [orderData, setOrderData] = useState();

  const titleSetter = (num) => {
    setTitle(buttonList[num].label);
  };

  const handleOrderClick = (OrderId, orderNumber) => {
    setselectedOrderId(OrderId);
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
        const fetchedData = await fetchData("orders");
        setOrders(fetchedData);
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
          const fetchedData = await fetchData(`orders/${selectedOrderId}`);
          setOrderData(fetchedData);
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
        padding: "20px 36px",
        "@media (max-width: 768px)": { "&": { padding: "16px" } },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PageTitle title={title} />
        {title === "Personal Information" && (
          <CustomButton
            startIcon={<LogoutOutlinedIcon />}
            label={"Logout"}
            variant="outlined"
            style={{ width: "fit-content" }}
          />
        )}
        {title === "My Orders" && (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"right"}
            gap={"8px"}
            maxWidth={"360px"}
            width={{ sm: "auto", md: "360px" }}
            marginBottom={"12px"}
            paddingInlineEnd={"16px"}
          >
            <LeftChevron />
            <CustomInput
              placeholder={"Search"}
              type={"search"}
              style={{ flex: "1 1 auto" }}
            />
          </Box>
        )}
      </Box>
      <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
        <ProfileSidebar
          SidebarOptions={buttonList}
          titleSetter={titleSetter}
          {...{ setselectedOrderId }}
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
