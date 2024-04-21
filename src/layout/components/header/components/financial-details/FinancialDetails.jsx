import styles from './FinancialDetails.module.css'
import { Box } from "@mui/material"

export const FinancialDetails = ({ title, amount, total }) => {
    return (
        <Box className={`${styles.financialDetails} ${total ? styles.total : null}`}>
            <span>{title}:</span>
            <span>${amount}</span>
        </Box>
    )
}