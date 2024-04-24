import styles from './PageTitle.module.css';

export const PageTitle = ({ title }) => {
    return (
        <h1 className={styles.title}>{title}</h1>
    )
}