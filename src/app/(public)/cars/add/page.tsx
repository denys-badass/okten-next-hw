import {AddCarForm} from "@/components/add-car-form/AddCarForm";
import {Box} from "@mui/material";

const AddCarPage =  () => {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "75vh" }}>
            <AddCarForm />
        </Box>
    );
}

export default AddCarPage;