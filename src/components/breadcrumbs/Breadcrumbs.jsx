import * as React from 'react';
import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { useLocation, Link } from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from './breadcrumbs.module.css';

export const Breadcrumbs = () => {
    const pathNameString = useLocation().pathname;
    const pathNamesArray = getPathNamesFromUrl(pathNameString);
    let pathnamesHasItems = pathNamesArray.length > 0;
    return (
        <>
            {
                pathnamesHasItems && <MUIBreadcrumbs aria-label="breadcrumb" separator={<ChevronRightRoundedIcon sx={{ color: "#171520" }} />} className={styles.breadcrumbs}>
                    <Link to={"/"}>Home</Link>
                    {
                        pathNamesArray?.map(link => <Link to={link}>{link}</Link>)
                    }
                </MUIBreadcrumbs>
            }
        </>

    )
};

const getPathNamesFromUrl = (pathnames) => {
    return pathnames.split("/").filter((x) => x).map(item => item.replace("-", " "));
}
