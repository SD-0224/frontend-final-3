import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Box from "@mui/material/Box";
// import { TabNavigation } from "../components/tab-navigation";
import { AboutCategory } from "../pages/about/components/about-category";
// import { About } from "../pages/about";
import { CategoryCarousel } from "../components/carousel/Carousel";
import { OrderInfo } from "../components/order-info";
import { AddressForm } from "../components/address-form";
import { MyCart } from "../pages/my-cart";
import { UserProfile } from "../pages/user-profile";
// import { UserProfile } from "../pages/user-profile/UserProfile";
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
      <Header />
      <UserProfile />
      {/* <About /> */}
      {/* <SideBar
        SidebarOptions={[
          "Personal Information",
          "Refer and Earn",
          "My Orders",
          "My Wishlist",
          "Mt Reviews",
          "My Address Book",
          "My Saved Cards",
        ]}
      /> */}
      {/* <UserProfile /> */}
      {/* <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <OrderInfo
            title={"Order "}
            orderInfo={[
              ["Sub Total", "$119.69"],
              ["Discount", "$119.69"],
              ["Delivery Fee", "$119.69"],
              ["Grand Total", "$119.69"],
            ]}
          />
        </Box>
        <Box>
          <OrderInfo
            title={"Order "}
            orderInfo={[
              ["payment", "$119.69"],
              ["Discount", " Total"],
            ]}
          />
        </Box>
      </Box> */}
      {/* <AboutCategory
        description={
          "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. "
        }
        src={
          "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
        }
        imgPosition="right"
      /> */}
      {/* <About /> */}
      {/* <Box margin={"10px"}>
        <CategoryCarousel
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
        />
      </Box> */}
      {/* <PaymentBottom /> */}
      {/* <TabNavigation
        titles={[
          "Product Description",
          "Related Products",
          "Ratings and Reviews",
        ]}
      /> */}

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
            src: "",
          },
          {
            title: "Credit/Debit Card",
            src: "",
          },
          {
            title: "Credit/ Card",
            src: "",
          },
        ]}
        paymentDetail={[
          {
            title: "UPI",
            src: "",
          },
          {
            title: "Credit/Debit Card",
            src: "",
          },
          {
            title: "Credit/ Card",
            src: "",
          },
        ]}
      /> */}
      {/* <PaymentBottom
        paymentDetail={[
          {
            title: "UPI",
            src: "",
          },
          {
            title: "Credit/Debit Card",
            src: "",
          },
          {
            title: "Credit/ Card",
            src: "",
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
      {/* <CustomInput /> */}

      {/* <AddressForm
        title={"Add New Address"}
        addressFormEntries={[
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
          {
            id: "nameInput",
            type: "text",
            placeholder: "Enter Name",
            label: "Full Name",
          },
        ]}
      /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};
