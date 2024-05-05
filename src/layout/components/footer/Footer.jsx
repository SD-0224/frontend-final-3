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
import { CircleIconLink } from "../../../components/circle-icon-link";
import { CopyrightBox } from "./components/copyright";
import { LocationBox } from "./components/location";
import styles from "./Footer.module.css";
import { fetchApiData } from "../../../modules/fetch-api-data";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [categories, setCategories] = useState([]);

  const shopByProducts = [
    {
      name: "Featured",
    },
    {
      name: "Brands",
    },
    {
      name: "Trendy",
    },
  ];

  const socialList = [
    {
      iconName: Facebook,
      link: "https://www.facebook.com",
    },
    {
      iconName: Instagram,
      link: "https://www.instagram.com",
    },
    {
      iconName: Twitter,
      link: "https://twitter.com",
    },
    {
      iconName: Youtube,
      link: "https://www.youtube.com",
    },
  ];

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedCategories = await fetchApiData("categories");
        setCategories(fetchedCategories);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataAsync();
  }, []);

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
    <Accordion
      defaultExpanded={isMobile}
      className={styles.accordion}
      sx={{ boxShadow: "unset", "&.Mui-expanded::before": { opacity: 1 } }}
    >
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
          <FooterList title={"Shop by Category"} links={categories} />
          <FooterList title={"Shop by products"} links={shopByProducts} />
        </Box>

        {/* Social media side */}

        <Box className={`${styles.listsContainer} ${styles.socialContainer}`}>
          <Box className={styles.socialList}>
            {socialList?.map((social, index) => (
              <CircleIconLink
                key={index}
                link={social.link}
                icon={
                  <social.iconName
                    borderSize={0}
                    fillColor={"var(--primary)"}
                  />
                }
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
