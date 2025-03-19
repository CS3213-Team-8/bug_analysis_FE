import { Box } from "@mui/material";
import { styled } from "@mui/system";

const GreyContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.light,
    borderRadius: "12px",
    border: '3px solid #414C5B',
    padding: "1rem",


}));

export default GreyContainer;