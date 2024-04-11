import { Box } from "@mui/material";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
export const Copyright = ({ text }) => {
    const currentYear = new Date().getFullYear();
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "2px", color: "#B6B6B6" }}>
            <CopyrightOutlinedIcon />
            {currentYear}
            <span>|</span>
            <span>{text}</span>
        </Box>
    )
}