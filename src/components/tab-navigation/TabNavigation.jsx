import { useState } from "react";
import { styled } from "@mui/system";
import {
  Tabs,
  Tab as BaseTab,
  tabClasses,
  TabsList as BaseTabsList,
} from "@mui/base";

export function TabNavigation({
  titles,
  tabPadding = "6px 18px",
  tabsPadding = "8px 16px",
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        onChange={handleChange}
        defaultValue={0}
        aria-label="Tabs Navigations"
        selectionFollowsFocus
      >
        <TabsList padding={tabsPadding}>
          {titles.map((title, index) => (
            <Tab value={index} padding={tabPadding}>
              {title}
            </Tab>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

const Tab = styled(BaseTab)`
  color: var(--low-emphasis-text-color);
  cursor: pointer;
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  background-color: transparent;
  padding: ${({ padding }) => padding};
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  line-height: 20px;

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

const TabsList = styled(BaseTabsList)(
  ({ theme, padding }) => `
  background-color: var(--grey);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
  gap:24px;
  padding:${padding};
  `
);
