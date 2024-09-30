import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useTabContext } from "../contexts/TabContext";

const TabLayout: React.FC = () => {
  const { tabs, activeTab, setActiveTab } = useTabContext();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box mt={2}>
        {tabs.length > 0 && tabs[activeTab]?.component}
      </Box>
    </Box>
  );
};

export default TabLayout;