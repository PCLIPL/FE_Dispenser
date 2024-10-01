import React, { ReactNode } from "react";
import { ThemedLayoutV2, Layout as RefineLayout } from "@refinedev/mui"; // Renaming to avoid conflict
// import Layout from "./Layout"; // Your custom Layout

interface CombinedLayoutProps {
    Header: React.FC; // Ensure that Header is a functional component (React.FC)
    children: ReactNode;
}

export const CombinedLayout: React.FC<CombinedLayoutProps> = ({ Header, children }) => {
    return (
        <ThemedLayoutV2 Header={Header}>
            <div> 
                {children}
            </div>
        </ThemedLayoutV2>
    );
};
