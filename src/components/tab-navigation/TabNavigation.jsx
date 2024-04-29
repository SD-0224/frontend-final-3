import { useState } from "react";
import { styled } from "@mui/system";
import { Tabs, TabsList, Tab as BaseTab, tabClasses } from "@mui/base";
import styles from "./TabNavigation.module.css";

const Tab = styled(BaseTab)`
  &:hover {
    background-color: #1b4b6611;
  }

  &:focus {
    color: #fff;
  }

  &.${tabClasses.selected} {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export function TabNavigation({
  titles,
  tabPadding = "6px 18px",
  tabsPadding = "8px 16px",
  handleTabClick,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTabClick(titles[newValue]);
  };

  return (
    <Tabs
      onChange={handleChange}
      defaultValue={0}
      aria-label="Tabs Navigations"
      selectionFollowsFocus
    >
      <TabsList style={{ padding: tabsPadding }} className={styles.tabList}>
        {titles.map((title, index) => (
          <Tab
            value={index}
            style={{ padding: tabPadding }}
            className={styles.tab}
          >
            {title}
          </Tab>
        ))}
      </TabsList>
    </Tabs>
  );
}
