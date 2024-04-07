import { Box } from "@mui/material"
import { List, ListItemButton, ListSubheader, ListItemText } from '@mui/material';

export const FooterList = ({ title, dataArr, type }) => {
    const styles = {
        lineHeight: "18px",
        fontSize: 14,
        fontWeight: 500,
        textTransform: "capitalize",
        paddingInline: "0px",
        paddingBlock: "4px",
    }
    return (
        <Box sx={{ width: "fit-content" }}>
            <List>
                <ListSubheader style={styles} sx={{ color: "#fff", background: "transparent", marginBottom: "8px" }}>
                    {title}
                </ListSubheader>
                <Box sx={{ display: "flex", flexDirection: type === "row" ? "row" : "column", flexWrap: "wrap" }}>
                    {
                        dataArr.map((data) => (
                            <>
                                <ListItemButton href="#" target="_blank" style={styles} sx={{ color: "#B6B6B6", '& .MuiListItemText-root': { margin: 0 }, flex: "none" }}>
                                    <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: "14px" } }} primary={data} />
                                </ListItemButton>
                                {
                                    type === "row" && <span>|</span>
                                }
                            </>
                        ))
                    }
                </Box>
            </List>
        </Box>
    )
}