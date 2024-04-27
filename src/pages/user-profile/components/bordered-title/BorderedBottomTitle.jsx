import { Divider } from "@mui/material"
import styles from './BorderedBottomTitle.module.css';

export const BorderedBottomTitle = ({ title }) => {
    return (
        <h1 className={styles.BorderedBottomTitle}>
            <spa>{title}</spa>
            <Divider />
        </h1>
    )
}