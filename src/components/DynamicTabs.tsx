import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

function TabPanel(props: { children?: React.ReactNode, index: number, value: number }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function DynamicTabs() {
    const [tabs, setTabs] = useState<string[]>(['Part Manager']);
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const addTab = (tabName: string) => {
        if (!tabs.includes(tabName)) {
            setTabs([...tabs, tabName]);
            setValue(tabs.length);
        }
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} aria-label="dynamic tabs example">
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab} />
                ))}
            </Tabs>
            {tabs.map((tab, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {tab} Content
                </TabPanel>
            ))}
            <button onClick={() => addTab('New Tab')}>Add New Tab</button>
        </Box>
    );
}