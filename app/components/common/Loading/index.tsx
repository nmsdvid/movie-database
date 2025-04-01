import { Box, CircularProgress } from "@mui/material"
const NETFLIX_RED = '#E50914';
export const LoadingBar = () => {
    return <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress sx={{ color: NETFLIX_RED }} />
    </Box>
}