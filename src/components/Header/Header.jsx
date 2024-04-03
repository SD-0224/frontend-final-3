import styles from './Header.module.css';

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
                        linksArr.map((text) => (
                            <a href='#' className={styles.navigationLink}>{text}</a>
                        ))
                    }
                </div>
            </section>
            <section className={styles.opertaionsSection}>
                <div className={styles.searchOperations}>
                    {/* Here we will use icon */}
                    <input type='search' />
                </div>
                <div className={styles.userOperations}>
                    {/* Here we will use icons as Links or Buttons */}
                    {/* Here we will use icons as Links or Buttons */}
                    {/* Here we will use icons as Links or Buttons */}
                </div>
            </section>
        </header>
    )
}