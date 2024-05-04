import * as React from 'react';
import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { useLocation, Link } from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import styles from './breadcrumbs.module.css';

export const Breadcrumbs = ({...props}) => {
    const URL = useLocation();
    const pathNamesArray = getPathNamesFromUrl(URL);
    let pathnamesHasItems = pathNamesArray.length > 0;
    return (
        <>
            {
                pathnamesHasItems && <MUIBreadcrumbs {...props} aria-label="breadcrumb" separator={<ChevronRightRoundedIcon sx={{ color: "#171520" }} />} className={styles.breadcrumbs}>
                    <Link to={"/"}>Home</Link>
                    {
                        pathNamesArray?.map(link => <Link to={link.link}>{link.string}</Link>)
                    }
                </MUIBreadcrumbs>
            }
        </>

    )
};

const getPathNamesFromUrl = (URL) => {
    let pathnamesLinks = URL["pathname"].split("/").filter((x) => x);
    let pathnamesStrings = pathnamesLinks.map(item => item.replaceAll("-", " "));
    let pathNames = [];
    let urlString = "";
    if (URL.hash.length > 0) {
        pathnamesStrings[pathnamesStrings.length - 1] += URL.hash;
    }
    for (let i = 0; i < pathnamesLinks.length; i++) {
        urlString += "/" + pathnamesLinks[i];
        pathNames.push({ string: pathnamesStrings[i], link: urlString })
    }

    return pathNames;
}
