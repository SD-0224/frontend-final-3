import { useState } from "react";
import { PageTitle } from "../../components/page-title/PageTitle";
import { Box } from "@mui/material";
import { ProfileSidebar } from "../../components/profile-sidebar/ProfileSidebar";
import { UserInformation } from "./components/user-information/UserInformation";
import { CustomButton } from "../../components/custom-button";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const UserProfile = () => {
    const [title, setTitle] = useState("Personal Information");

    const titleSetter = (num) => {
        setTitle(buttonList[num].label);
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
            component: null,
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
        }
        ,
        {
            label: "My Saved Cards",
            component: null,
        }
    ];

    return (
        <Box sx={{ padding: "20px 36px", '@media (max-width: 768px)': { "&": { padding: "16px" } } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <PageTitle title={title} />
                {title === "Personal Information" && <CustomButton startIcon={<LogoutOutlinedIcon />} label={"Logout"} variant="outlined" style={{ width: "fit-content" }} />}
            </Box>
            <ProfileSidebar SidebarOptions={buttonList} titleSetter={titleSetter} />
        </Box>
    )
}