import styles from './CircleIconLink.module.css';

export const CircleIconLink = ({ link, icon, ...props }) => {
    return (
        <a href={link} rel="noreferrer" className={styles.circleLink} target="_blank" {...props}>
            {icon}
        </a>
    )
}