import styles from "./Header.module.css";
import { CustomInput } from "../../../components/custom-input";
import {
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from "react";

export const Header = () => {
  const linksArr = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];

  const [value, setValue] = useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>

    </>
  );
};
