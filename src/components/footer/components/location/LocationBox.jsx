import { Box } from "@mui/material";
import { Location } from "../../../icons";

export const LocationBox = ({ country }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "1px", color: "#fff" }}>
            <Location borderColor="#FFF" />
            <span>{country}</span>
        </Box>
    )
}