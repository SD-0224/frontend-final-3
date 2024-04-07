import { Box } from "@mui/material"
import { List, ListItemButton, ListSubheader, ListItemText } from '@mui/material';
import styles from "./FooterList.module.css";

export const FooterList = ({ title, dataSource, type }) => {
    return (
        <Box sx={{ width: "fit-content" }}>
            <List>
                <ListSubheader className={styles.commenTextStyle} sx={{ color: "#fff", background: "transparent", marginBottom: "8px" }}>
                    {title}
                </ListSubheader>
                <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: type === "row" ? "row" : "column", alignItems: type === "row" ? "center" : "baseline", gap: type === "row" ? "4px" : "0px" }}>
                    {
                        dataSource.map((data) => (
                            <>
                                <ListItemButton href="#" target="_blank" className={styles.commenTextStyle} sx={{ color: "#B6B6B6", '& .MuiListItemText-root': { margin: 0 }, flex: "none" }}>
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