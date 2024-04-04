import styles from './Header.module.css';
import { CustomInput } from "../CustomInput/CustomInput";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const Header = () => {
    const linksArr = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];
    return (
        <header className={styles.header}>
            <section className={styles.navigationSection}>
                <a href="#" className={styles.logo}>
                    <img src={null} alt="Logo" />
                </a>
                <div className={styles.navigationLinks}>
                    {
                        linksArr.map((text, index) => (
                            <a href='#' className={styles.navigationLink} key={index}>{text}</a>
                        ))
                    }
                </div>
            </section>
            <section className={styles.opertaionsSection}>
                <CustomInput id={"searchInput"} placeholder={"Search for products or brands....."} />
                <div className={styles.userOperations}>
                    <PersonOutlineIcon />
                    <FavoriteBorderIcon />
                    <ShoppingBagOutlinedIcon />
                </div>
            </section>
        </header>
    )
}