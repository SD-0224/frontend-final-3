import { Box } from "@mui/material"
import { List, ListItemButton, ListSubheader, ListItemText } from '@mui/material';
import styles from "./FooterList.module.css";

export const FooterList = ({ title, footerLinks, type }) => {
    const isRow = type == "row";

    const conditionalStyle = {
        flexDirection: isRow ? "row" : "column",
        alignItems: isRow ? "center" : "baseline",
        gap: isRow ? "4px" : "0px",
    }

    return (
        <Box sx={{ width: "fit-content" }}>
            <List>
                <ListSubheader className={styles.footerListItem} sx={{ color: "#fff", background: "transparent", marginBottom: "8px" }}>
                    {title}
                </ListSubheader>
                <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: conditionalStyle.flexDirection, alignItems: conditionalStyle.alignItems, gap: conditionalStyle.gap }}>
                    {
                        footerLinks?.map((data) => (
                            <>
                                <ListItemButton href="#" target="_blank" className={styles.footerListItem} sx={{ color: "#B6B6B6", '& .MuiListItemText-root': { margin: 0 }, flex: "none" }}>
                                    <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: "14px" } }} primary={data} />
                                </ListItemButton>
                                {
                                    isRow && <span>|</span>
                                }
                            </>
                        ))
                    }
                </Box>
            </List>
        </Box>
    )
}