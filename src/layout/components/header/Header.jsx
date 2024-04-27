import React from "react";
import styles from "./Header.module.css";
import { CustomInput } from "../../../components/custom-input";
import {
  SearchOutlined,
} from "@mui/icons-material";

import { ShoppingBag, Profile, Heart, Category, Home } from "../../../components/icons";

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { useState, useEffect } from "react";
import { CustomDrawer } from "./components/custom-drawer";
import { Link } from "react-router-dom";


export const Header = () => {
  const linksArr = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];

  const [isScrolled, setIsScrolled] = useState(false);

  const [value, setValue] = useState('recents');

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
  ];

  const FinancialDetails = [
    {
      title: "Subtotal",
      amount: 109.38,
      isTotal: false,
    },
    {
      title: "Tax",
      amount: 2.00,
      isTotal: false,
    },
    {
      title: "Total",
      amount: 111.38,
      isTotal: true,
    },
  ];

  const productsInCart = [
    {
      title: "Coach",
      subtitle: "Leather Coach Bag",
      price: 50,
      quantity: 5
    },
    {
      title: "Coach",
      subtitle: "Leather Coach Bag",
      price: 50,
      quantity: 5
    },
  ];

  return (
    <>
      <header className={styles.header} style={{ boxShadow: isScrolled ? "0px 0px 20px 0px rgba(0,0,0,0.1)" : "unset" }}>
        <section className={styles.navigationSection}>
          <Link to="/" className={styles.logo}>
            <img src={"./logo.png"} alt="Logo" width={100} />
          </Link>
          <div className={styles.navigationLinks}>
            {linksArr.map((text, index) => (
              <Link to="#" className={styles.navigationLink} key={index}>
                {text}
              </Link>
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
            <Heart />
            <Link to={'/user-profile'} className={styles.navigationLink}>
              <Profile />
            </Link>
            <div className={styles.shoppingContainer} onClick={toggleDrawer(true)}>
              <div className={styles.dot}></div>
              <ShoppingBag />
            </div>
          </div>
        </section>
      </header>

      <CustomDrawer toggleDrawer={toggleDrawer} open={open} FinancialDetailsArr={FinancialDetails} productsInCartArr={productsInCart} />

      <BottomNavigation className={styles.bottomNavigation} sx={{ backgroundColor: "var(--primary)" }} value={value} onChange={handleChange}>
        {
          bottomNavigationData?.map((data, index) => (
            <BottomNavigationAction
              key={index}
              sx={{
                color: "var(--light-text-color)",
                '& path': {
                  stroke: "var(--light-text-color)"
                },
                '&.Mui-selected ': {
                  color: "var(--white)",
                  '& path': {
                    stroke: "var(--white)"
                  }
                },
              }}
              label={data.label}
              value={data.value}
              onClick={data.value === "bag" ? toggleDrawer(true) : null}
              icon={<data.icon />}
            />
          ))
        }
      </BottomNavigation>
    </>
  );
};
