import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { FooterList } from './components/footer-list/FooterList';
import { Box } from "@mui/material";
import { Facebook, Instagram, Twitter, Youtube, Location } from '../icons';
import { CircleIconLink } from '../circle-icon-link';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
export const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
    const currentYear = new Date().getFullYear();

    const conditionalStyles = {
        padding: isMobile ? "0px" : "30px 60px",
        paddingBlock: "25px",
        paddingInline: "16px",
        gap: isMobile ? "24px" : "60px",
        width: isMobile ? "100%" : "fit-content",
        marginTop: isMobile ? "28px" : "0px",
        borderTop: isMobile ? 1 : null,
        borderColor: "#3E6F73",
        alignItems: isMobile ? "baseline" : "end",
    }

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
        {
            text: "Watches",
            link: "https://google.com"
        },
        {
            text: "Eye Wear",
            link: "https://google.com"
        },
        {
            text: "Jewellery",
            link: "https://google.com"
        },
    ]

    const socialList = [
        {
            iconName: Facebook,
            link: "#",
        },
        {
            iconName: Instagram,
            link: "#",
        },
        {
            iconName: Twitter,
            link: "#",
        },
        {
            iconName: Youtube,
            link: "#",
        }
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

            <AccordionDetails sx={{
                background: "#1B4B66", color: "#fff", padding: conditionalStyles.padding, display: "flex", flexWrap: "wrap", justifyContent: "space-between"
            }}>

                <Box sx={{
                    display: "flex", gap: conditionalStyles.gap, flexWrap: "wrap", width: conditionalStyles.width,
                    paddingBlock: conditionalStyles.paddingBlock, paddingInline: conditionalStyles.paddingInline
                }}>
                    <FooterList title={"Shop by Category"} links={links} />
                </Box>

                {/* Social media side */}

                <Box sx={{
                    display: "flex", flexDirection: "column", fontSize: "14px", alignItems: conditionalStyles.alignItems,
                    gap: "8px", width: conditionalStyles.width, marginTop: conditionalStyles.marginTop,
                    paddingBlock: conditionalStyles.paddingBlock, paddingInline: conditionalStyles.paddingInline,
                    borderTop: conditionalStyles.borderTop, borderColor: conditionalStyles.borderColor
                }}>
                    <Box sx={{ display: "flex", gap: "16px", marginBottom: "14px", }}>
                        {
                            socialList?.map((social, index) => (
                                <CircleIconLink key={index} link={social.link} icon={<social.iconName borderSize={0} fillColor={'#1b4b66'} />} />
                            ))
                        }
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "1px", color: "#fff" }}>
                        <Location borderColor="#FFF" />
                        <span>United States</span>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "2px", color: "#B6B6B6" }}>
                        <CopyrightOutlinedIcon />
                        {currentYear}
                        <span>|</span>
                        <span>Cora Leviene All Rights Reserved</span>
                    </Box>
                </Box>

            </AccordionDetails>
        </Accordion>
    );
}
