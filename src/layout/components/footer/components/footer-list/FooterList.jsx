import { useMemo } from "react";
import { Box } from "@mui/material";
import { List, ListSubheader, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import styles from "./FooterList.module.css";

export const FooterList = ({ title, links, toRow }) => {

    const conditionalStyle = {
        flexDirection: toRow ? "row" : "column",
        alignItems: toRow ? "center" : "baseline",
        gap: toRow ? "4px" : "0px",
    }

    const memoizedFooterLinks = useMemo(() => {
        return links?.map((data) => (
            <>
                <Link to={data.link} target="_blank" className={styles.footerListItem}>
                    <ListItemText sx={{ margin: 0, '& .MuiListItemText-primary': { fontSize: "14px" } }} primary={data.text} />
                </Link>
                {
                    toRow && <span className={styles.verticalBar}>|</span>
                }
            </>
        ));
    }, [links, toRow]);

    return (
        <Box>
            <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
                <ListSubheader className={styles.footerListItem} sx={{ color: "#fff", background: "#1b4b66", marginBottom: "8px", lineHeight: "18px", paddingLeft: 0, paddingRight: 0 }}>
                    {title}
                </ListSubheader>
                <Box className={styles.linksContainer} sx={{ flexDirection: conditionalStyle.flexDirection, alignItems: conditionalStyle.alignItems, gap: conditionalStyle.gap }}>
                    {memoizedFooterLinks}
                </Box>
            </List>
        </Box>
    )
}