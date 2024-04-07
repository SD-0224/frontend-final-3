import { Box } from "@mui/material"
import { List, ListItemButton, ListSubheader, ListItemText } from '@mui/material';

export const FooterList = ({ title, dataArr, type }) => {
    const styles = {
        lineHeight: "18px",
        fontSize: 14,
        fontWeight: 500,
        textTransform: "capitalize",
        paddingBlock: "0px"
    }
    return (
        <Box>
            <List>
                <ListSubheader style={styles} sx={{ color: "#fff", background: "transparent", marginBottom: "8px" }}>
                    {title}
                </ListSubheader>
                <Box>
                    {
                        dataArr.map((data) => (
                            <ListItemButton href="#" target="_blank" style={styles} sx={{ color: "#B6B6B6", paddingBlock: 0 }}>
                                <ListItemText sx={{ '& .MuiListItemText-primary': { fontSize: "14px" } }} primary={data} />
                            </ListItemButton>
                        ))
                    }
                </Box>
            </List>
        </Box>
    )
}