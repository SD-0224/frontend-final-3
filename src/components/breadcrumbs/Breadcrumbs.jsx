import * as React from 'react';
import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { useLocation, Link } from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from './breadcrumbs.module.css';

export const Breadcrumbs = (props) => {
    const location = useLocation();
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((x) => x).map(item => item.replace("-", " "));
    let pathnamesHasItems = pathnames.length > 0;
    return (
        <>
            {
                pathnamesHasItems && <MUIBreadcrumbs aria-label="breadcrumb" separator={<ChevronRightRoundedIcon sx={{ color: "#171520" }} />} className={styles.breadcrumbs}>
                    <Link to={"/"}>Home</Link>
                    {
                        pathnames?.map(link => <Link to={link}>{link}</Link>)
                    }
                </MUIBreadcrumbs>
            }
        </>

    )
}
