import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface TabData {
  label: string;
  path: string;
  component: React.ReactNode;
}

interface TabContextType {
  tabs: TabData[];
  activeTab: number;
  addTab: (label: string, path: string, component: React.ReactNode) => void;
  setActiveTab: (index: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};

interface TabProviderProps {
  children: ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const addTab = (label: string, path: string, component: React.ReactNode) => {
    setTabs((prevTabs) => [...prevTabs, { label, path, component }]);
    setActiveTab(tabs.length);
    navigate(path);
  };

  return (
    <TabContext.Provider value={{ tabs, activeTab, addTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};