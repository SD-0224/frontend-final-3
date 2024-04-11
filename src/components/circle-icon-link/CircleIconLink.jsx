import { Children } from 'react';
import styles from './CircleIconLink.module.css';

export const CircleIconLink = ({ link, icon }) => {
    return (
        <a href={link} className={styles.circleLink} target="_blank">
            {icon}
        </a>
    )
}