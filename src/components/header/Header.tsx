import {Box, Button, Paper} from "@mui/material";

export const Header = () => {
    return (
        <Paper elevation={3}>
            <Box height={'100px'} sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: 4}}>
                <Box>
                    <Button href={'/'}>Home</Button>
                </Box>
                <Box>
                    <Button href={'/cars'}>Show Cars</Button>
                </Box>
                <Box>
                    <Button href={'/cars/add'}>Add Car</Button>
                </Box>
            </Box>
        </Paper>

    );
};