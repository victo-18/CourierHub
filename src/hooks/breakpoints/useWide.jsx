import { useMediaQuery, useTheme } from "@mui/material"

export default function useWide() {
    const theme = useTheme();
    const isWide = useMediaQuery(theme.breakpoints.up('sm'))

    return isWide;
}