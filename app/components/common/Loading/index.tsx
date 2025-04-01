import { Box, CircularProgress } from "@mui/material"


export const LoadingBar = () => {
    return <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress sx={{ color: 'primary.main' }} />
    </Box>
}