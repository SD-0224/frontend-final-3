import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import { FooterList } from "./components/footer-list";
import { Box } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "../../../components/icons";
import { CircleIconLink } from "./components/circle-icon-link";
import { CopyrightBox } from "./components/copyright";
import { LocationBox } from "./components/location";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    {
      text: "Skincare",
      link: "https://google.com",
    },
    {
      text: "Personal Care",
      link: "https://google.com",
    },
    {
      text: "Handbags",
      link: "https://google.com",
    },
    {
      text: "Apparels",
      link: "https://google.com",
    },
    {
      text: "Watches",
      link: "https://google.com",
    },
    {
      text: "Eye Wear",
      link: "https://google.com",
    },
    {
      text: "Jewellery",
      link: "https://google.com",
    },
  ];

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
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1000px)").matches);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Accordion defaultExpanded={isMobile} className={styles.accordion} sx={{ boxShadow: "unset", '&.Mui-expanded::before': { opacity: 1 } }}>
      {isMobile && (
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          More about CORA’L
        </AccordionSummary>
      )}

      <AccordionDetails className={styles.accordionDetails}>
        <Box className={styles.listsContainer}>
          <FooterList title={"Shop by Category"} links={links} />
        </Box>

        {/* Social media side */}

        <Box className={`${styles.listsContainer} ${styles.socialContainer}`}>
          <Box className={styles.socialList}>
            {socialList?.map((social, index) => (
              <CircleIconLink
                key={index}
                link={social.link}
                icon={<social.iconName borderSize={0} fillColor={"#1b4b66"} />}
              />
            ))}
          </Box>
          <LocationBox country={"United States"} />
          <CopyrightBox text={"Cora Leviene All Rights Reserved"} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
