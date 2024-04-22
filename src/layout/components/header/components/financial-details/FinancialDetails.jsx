import styles from './FinancialDetails.module.css'
import { Box } from "@mui/material"

export const FinancialDetails = ({ title, amount, isTotal }) => {
    return (
        <Box className={`${styles.financialDetails} ${isTotal ? styles.total : null}`}>
            <span>{title}:</span>
            <span>${amount}</span>
        </Box>
    )
}