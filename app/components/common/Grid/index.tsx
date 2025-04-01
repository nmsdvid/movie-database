import { Box } from "@mui/material";
import type { JSX } from "react";

interface GridProps {
    children: string | JSX.Element | JSX.Element[]
}


export const Grid: React.FC<GridProps> = ({ children }) => {
    return <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
        },
        gap: 3
    }}>{children}</Box>;
}