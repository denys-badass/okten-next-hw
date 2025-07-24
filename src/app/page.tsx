import {Box, Container} from "@mui/material";
import {AddCarForm} from "@/components/add-car-form/AddCarForm";
import {Cars} from "@/components/cars/Cars";

export default function Home() {
  return (
    <Container maxWidth={'xl'} sx={{p: 4, textAlign: "center"}}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 4}}>
            <AddCarForm/>
            <Box>
                <Cars/>
            </Box>
        </Box>
    </Container>
  );
}
