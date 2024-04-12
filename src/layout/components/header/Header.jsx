import styles from "./Header.module.css";
import { CustomInput } from "../../../components/custom-input";
import {
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";

export const Header = () => {
  const linksArr = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];

  return (
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
  );
};
