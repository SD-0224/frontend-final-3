import { Divider } from "@mui/material"
import styles from './BorderedBottomTitle.module.css';

export const BorderedBottomTitle = ({ title, ...props }) => {
    return (
        <h1 className={styles.BorderedBottomTitle} {...props}>
            <span>{title}</span>
            <Divider sx={{ marginTop: "5px" }} />
        </h1>
    )
}