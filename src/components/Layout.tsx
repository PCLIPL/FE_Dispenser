import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!openTabs.includes(location.pathname)) {
      setOpenTabs([...openTabs, location.pathname]);
    }
  }, [location.pathname]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Box>
      <Tabs value={location.pathname} onChange={handleTabChange}>
        {openTabs.map((tab) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>
      <Box mt={2}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;