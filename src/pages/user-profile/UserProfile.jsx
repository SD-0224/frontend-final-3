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
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../components/fetch-url/FetchUrl";

export const UserProfile = () => {
  const [title, setTitle] = useState("Personal Information");
  const [selectedOrderId, setselectedOrderId] = useState(null);
  const navigate = useNavigate();
  const [orders, setOrders] = useState();

  const titleSetter = (num) => {
    setTitle(buttonList[num].label);
  };

  const handleOrderClick = (OrderId) => {
    setselectedOrderId(OrderId);
    navigate(`/user-profile?id=${OrderId}`);
  };

  const buttonList = [
    {
      label: "Personal Information",
      component: <UserInformation />,
    },
    {
      label: "Refer and Earn",
      component: null,
    },
    {
      label: "My Orders",
      component: selectedOrderId ? (
        <ItemsOrdered itemId={selectedOrderId} />
      ) : (
        <MyOrders orders={orders} onOrderClick={handleOrderClick} />
      ),
    },
    {
      label: "My Wishlist",
      component: null,
    },
    {
      label: "My Reviews",
      component: null,
    },
    {
      label: "My Address Book",
      component: null,
    },
    {
      label: "My Saved Cards",
      component: null,
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
    if (selectedOrderId) setTitle(`Order${selectedOrderId}`);
    else navigate(`/user-profile`);
  }, [selectedOrderId]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setselectedOrderId(urlParams.get("id"));
  }, [window.location.search]);

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
      <ProfileSidebar
        SidebarOptions={buttonList}
        titleSetter={titleSetter}
        {...{ setselectedOrderId }}
      />
    </Box>
  );
};
