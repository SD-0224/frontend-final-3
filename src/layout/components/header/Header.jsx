import styles from "./Header.module.css";
import { CustomInput } from "../../../components/custom-input";
import {
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import { ShoppingBag, Profile, Category, Home } from "../../../components/icons";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from "react";

export const Header = () => {
  const linksArr = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];

  const [value, setValue] = useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <header className={styles.header}>
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
