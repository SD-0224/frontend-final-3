import { useMemo } from "react";
import { Box } from "@mui/material";
import { List, ListSubheader, ListItemText } from "@mui/material";
import styles from "./FooterList.module.css";
import { Link } from "react-router-dom";

export const FooterList = ({ title, links, toRow }) => {
  const conditionalStyle = {
    flexDirection: toRow ? "row" : "column",
    alignItems: toRow ? "center" : "baseline",
    gap: toRow ? "4px" : "0px",
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const memoizedFooterLinks = useMemo(() => {
    return links?.map((data, index) => {
      const isHashLink = data.link.includes("/#");
      const elementId = data.link.split("/#").pop();

      return (
        <Link
          key={index}
          to={data.link}
          onClick={isHashLink ? (e) => handleScroll(e, elementId) : null}
          className={styles.footerListItem}
        >
          <ListItemText
            sx={{
              margin: 0,
              "& .MuiListItemText-primary": { fontSize: "14px" },
            }}
            primary={data.name}
          />
          {toRow && <span className={styles.verticalBar}>|</span>}
        </Link>
      );
    });
  }, [links, toRow]);

  return (
    <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
      <ListSubheader
        className={styles.footerListItem}
        sx={{
          color: "var(--white)",
          background: "var(--primary)",
          marginBottom: "8px",
          lineHeight: "18px",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {title}
      </ListSubheader>
      <Box
        className={styles.linksContainer}
        sx={{
          flexDirection: conditionalStyle.flexDirection,
          alignItems: conditionalStyle.alignItems,
          gap: conditionalStyle.gap,
        }}
      >
        {memoizedFooterLinks}
      </Box>
    </List>
  );
};
