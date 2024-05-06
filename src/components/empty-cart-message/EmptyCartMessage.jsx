import { Typography } from "@mui/material"

export const EmptyCartMessage = () => {
    return <Typography variant="h1" sx={{ fontSize: "22px", fontWeight: 600, color: "var(--primary)", textAlign: "center" }}>There are no products in your cart!</Typography>
}