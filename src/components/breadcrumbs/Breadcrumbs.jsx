import * as React from 'react';
import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { useLocation, Link } from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from './breadcrumbs.module.css';

export const Breadcrumbs = () => {
    const URL = useLocation();
    const pathNamesArray = getPathNamesFromUrl(URL);
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

const getPathNamesFromUrl = (URL) => {
    let pathnames = URL["pathname"].split("/").filter((x) => x).map(item => item.replace("-", " "));
    if (URL.hash.length > 0) {
        pathnames[pathnames.length - 1] += URL.hash;
    }
    return pathnames;
}
