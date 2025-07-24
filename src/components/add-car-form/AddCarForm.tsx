import Form from "next/form";
import {Box, Button, TextField} from "@mui/material";
import {createCar} from "@/server-actions/cars.actions";

export const AddCarForm = () => {
    return (
        <Form action={createCar}>
            <Box width={'300px'} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2, p: 2}}>
                <TextField fullWidth name={'brand'} label={'Brand'}></TextField>
                <TextField fullWidth name={'year'} type={'number'} label={'Year'}></TextField>
                <TextField fullWidth name={'price'} type={'number'} label={'Price'}></TextField>
                <Button fullWidth variant={'contained'} type={'submit'}>Add</Button>
            </Box>
        </Form>
    );
};