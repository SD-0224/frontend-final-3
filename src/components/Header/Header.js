import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.navigationSection}>
                <a href="#" className={styles.logo}>
                    <img src={null} alt="Logo" />
                </a>
                <div className={styles.navigationLinks}>
                    <a href='#'>{"Handbags"}</a>
                    <a href='#'>{"Watches"}</a>
                    <a href='#'>{"Skincare"}</a>
                    <a href='#'>{"Jewellery"}</a>
                    <a href='#'>{"Apparels"}</a>
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