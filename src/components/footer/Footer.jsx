import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { FooterList } from '../footer-list/FooterList';
import { Box } from "@mui/material";

export const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
    const links = [
        {
            text: "Skincare",
            link: "https://google.com"
        },
        {
            text: "Personal Care",
            link: "https://google.com"
        },
        {
            text: "Handbags",
            link: "https://google.com"
        },
        {
            text: "Apparels",
            link: "https://google.com"
        },
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <Accordion defaultExpanded={isMobile} sx={{
            width: "100%",
            margin: isMobile ? "0 !important" : "unset",
            marginBottom: isMobile ? "unset !important" : "0",
            marginTop: isMobile ? "auto !important" : "0",
            boxShadow: "unset"
        }}>
            {
                isMobile &&
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    More about CORA’L
                </AccordionSummary>
            }
            <AccordionDetails sx={{ background: "#1B4B66", color: "#fff" }}>
                <Box sx={{ display: "flex", gap: isMobile ? "24px" : "60px", flexWrap: "wrap"}}>
                    <FooterList title={"Shop by Category"} footerLinks={links} />
                    <FooterList toRow={isMobile} type={"row"} title={"Shop by Category"} footerLinks={links} />
                </Box>
            </AccordionDetails>
        </Accordion>
    );
}
