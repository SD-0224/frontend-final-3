import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
// import { Header } from "./components/header";
import Box from "@mui/material/Box";
import { StaticBanner } from "../components/static-banner";
import { CircleIconLink } from "../components/circle-icon-link";
import { RightArrow } from "../components/icons";
import { OrderInfo } from "../components/order-info";
import { SideBar } from "../components/profile-sidebar";
import { PaymentSection } from "../components/payment-section";
import { TabNavigation } from "../components/tab-navigation";
// import { PaymentComponent } from "../components/payment-section/components/payment-component";
// import { AccordionComponent } from "../components/accordion-component";
// import { Title } from "@mui/icons-material";
//import { CustomButton } from "../components/custom-button";
// import {
//   Category,
//   Facebook,
//   Heart,
//   Home,
//   Instagram,
//   Location,
//   Profile,
//   RightArrow,
//   RightChevron,
//   ShoppingBag,
//   Star,
//   Twitter,
//   Youtube,
// } from "../components/icons";
// import { BrandSection } from "../components/brand-section";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { CategoryCarousel } from "../components/carousel";

export const Layout = function () {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TabNavigation
        titles={[
          "Product Description",
          "Related Products",
          "Ratings and Reviews",
        ]}
      />

      {/* <Box marginTop={"10px"}>
        <OrderInfo
          title={"Order Details"}
          orderInfo={[
            ["Sub Total", "$119.69"],
            ["Discount", "$119.69"],
            ["Delivery Fee", "$119.69"],
            ["Grand Total", "$119.69"],
          ]}
        />
      </Box>
      <SideBar
        SidebarOptions={[
          "Personal Information",
          "Refer and Earn",
          "My Orders",
          "My Wishlist",
          "My Reviews",
          "My Address Book",
          "My Saved Cards",
        ]}
      /> */}

      {/* <AccordionComponent title={"Payments"} /> */}
      {/* <PaymentSection
        paymentMethods={[
          {
            title: "UPI",
            src: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          },
          {
            title: "Credit/Debit Card",
            src: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          },
        ]}
      /> */}
      {/* <Box width={"500px"} m={"10px"}>
        <CustomButton
          variant={"contained"}
          label={"Place Order"}
          startIcon={<RightArrow borderColor="#ffffff" />}
        />
      </Box>
      <Box width={"500px"}>
        <CustomButton
          variant={"outlined"}
          label={"Continue Shopping"}
          endIcon={<RightArrow borderColor="#1B4B66" />}
        />
      </Box> */}
      {/* <BrandSection
        brandImages={[
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
          "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
          "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
          "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
          "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
        ]}
      /> */}
      {/* <CategoryCarousel
        categories={[
          {
            homeImage:
              "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
            title:
              "Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk",
            subtitle: "Probably the most random thing you have ever seen!",
          },
          {
            homeImage:
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            title: "Carry Your Funk",
            subtitle:
              "Hello World! Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk Carry Your Funk",
          },
        ]}
      /> */}
      {/* <CircleIconLink
        icon={<RightArrow borderColor="#A53F64" />}
        backgroundColor="#F1F1F1"
      />
      <StaticBanner /> */}

      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};
