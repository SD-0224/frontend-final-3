import { Box } from "@mui/material"
import { List, ListItemButton, ListSubheader, ListItemText } from '@mui/material';

export const FooterList = ({ title, dataArr, type }) => {
    return (
        <Box>
            <List>
                <ListSubheader>
                    {title}
                </ListSubheader>
                <Box>
                    {
                        dataArr.map((data) => (
                            <ListItemButton href="#" target="_blank"  >
                                <ListItemText primary={data} />
                            </ListItemButton>
                        ))
                    }
                </Box>
            </List>
        </Box>
    )
}