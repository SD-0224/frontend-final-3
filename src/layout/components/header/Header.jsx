import React from "react";
import styles from "./Header.module.css";
import { CustomInput } from "../../../components/custom-input";
import {
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import { ShoppingBag, Profile, Category, Home } from "../../../components/icons";

import { BottomNavigation, BottomNavigationAction, Box, Divider } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import { useState, useEffect, useMemo } from "react";

import Drawer from '@mui/material/Drawer';
import { ProductInCart } from '../../../components/product-in-cart';
import { CustomButton } from '../../../components/custom-button';

export const Header = () => {
  const linksArr = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];

  const [isScrolled, setIsScrolled] = useState(false);

  const [value, setValue] = useState('recents');

  const [open, setOpen] = useState(false);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawerStyles = {
    zIndex: 99999,
    '& .MuiDrawer-paper': {
      padding: "20px 40px 10px",
      width: "420px",
      top: "80px",
      height: "fit-content",
      maxHeight: "calc(100vh - 80px)",
      overflow: "auto",
    },
    '@media (max-width: 768px)': {
      '& .MuiDrawer-paper': {
        padding: "8px",
        width: "260px",
        top: "60px",
        maxHeight: 'calc(100vh - 60px)',
      }
    }
  }

  const bottomNavigationData = [
    {
      icon: Home,
      label: "Home",
      value: "home"
    },
    {
      icon: Category,
      label: "Category",
      value: "category"
    },
    {
      icon: Profile,
      label: "Profile",
      value: "profile"
    },
    {
      icon: ShoppingBag,
      label: "Bag",
      value: "bag"
    },
  ]

  const memoizedProductsInCart = useMemo(() => {
    const productsInCart = [
      {
        title: "Coach",
        subtitle: "Leather Coach Bag",
        price: 50,
        quantityValue: 5
      },
      {
        title: "Coach",
        subtitle: "Leather Coach Bag",
        price: 50,
        quantityValue: 5
      },
    ];
  
    return productsInCart?.map((product, index) => (
      <React.Fragment key={index}>
        <ProductInCart 
          title={product.title} 
          subtitle={product.subtitle} 
          price={product.price} 
          quantityValue={product.quantityValue} 
        />
        <Divider sx={{ marginTop: "50px", marginBottom: "24px" }} />
      </React.Fragment>
    ));
  }, []);

  return (
    <>
      <header className={styles.header} style={{ boxShadow: isScrolled ? "0px 0px 20px 0px rgba(0,0,0,0.1)" : "unset" }}>
        <section className={styles.navigationSection}>
          <a href="#" className={styles.logo}>
            <img src={"./logo.png"} alt="Logo" width={100} />
          </a>
          <div className={styles.navigationLinks}>
            {linksArr.map((text, index) => (
              <a href="#" className={styles.navigationLink} key={index}>
                {text}
              </a>
            ))}
          </div>
        </section>
        <section className={styles.opertaionsSection}>
          <CustomInput
            id={"searchInput"}
            type={"search"}
            placeholder={"Search for products or brands....."}
            icon={<SearchOutlined />}
          />
          <div className={styles.userOperations}>
            <FavoriteBorder />
            <PersonOutline />
            <div className={styles.shoppingContainer}>
              <div className={styles.dot}></div>
              <ShoppingBagOutlined />
            </div>
          </div>
        </section>
      </header>
      <button onClick={toggleDrawer(true)}>Open drawer</button>

      <Drawer className={styles.drawer} open={open} onClose={toggleDrawer(false)} sx={drawerStyles} anchor={"right"}>
        <button className={styles.closeDrawer} onClick={toggleDrawer(false)}>
          <KeyboardBackspaceRoundedIcon />
          <span>Back</span>
        </button>

        {memoizedProductsInCart}

        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px", '@media (max-width: 600px)': { marginBottom: "12px" } }}>
          <Box className={styles.financialDetails}>
            <span>Subtotal:</span>
            <span>${"109.38"}</span>
          </Box>
          <Box className={styles.financialDetails}>
            <span>Tax:</span>
            <span>${"2.00"}</span>
          </Box>
          <Box className={`${styles.financialDetails} ${styles.total}`}>
            <span>Total:</span>
            <span>${"111.38"}</span>
          </Box>
        </Box>

        <Box sx={{ position: "relative", marginBottom: "24px", '@media (max-width: 600px)': { marginBottom: "12px" } }}>
          <CustomInput type={"text"} placeholder={"Apply Coupon Code"} style={{ width: "90%", margin: "auto" }} />
          <button type="button" className={styles.check}>CHECK</button>
        </Box>

        <CustomButton label={"Place Order"} />

        <button className={styles.continueShopping} onClick={toggleDrawer(false)}>
          <span>Continue Shopping</span>
        </button>
      </Drawer>

      <BottomNavigation className={styles.bottomNavigation} sx={{ backgroundColor: "#1b4b66" }} value={value} onChange={handleChange}>
        {
          bottomNavigationData?.map((data, index) => (
            <BottomNavigationAction
              key={index}
              sx={{
                color: "#B6B6B6",
                '& path': {
                  stroke: "#B6B6B6"
                },
                '&.Mui-selected ': {
                  color: "#fff",
                  '& path': {
                    stroke: "#fff"
                  }
                },
              }}
              label={data.label}
              value={data.value}
              icon={<data.icon />}
            />
          ))
        }
      </BottomNavigation>
    </>
  );
};
