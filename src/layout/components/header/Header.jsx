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
  ]

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
            <Heart />
            <Profile />
            <div className={styles.shoppingContainer} onClick={toggleDrawer(true)}>
              <div className={styles.dot}></div>
              <ShoppingBag />
            </div>
          </div>
        </section>
      </header>

      <CustomDrawer toggleDrawer={toggleDrawer} open={open} />

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
              onClick={data.value === "bag" ? toggleDrawer(true) : null}
              icon={<data.icon />}
            />
          ))
        }
      </BottomNavigation>
    </>
  );
};
