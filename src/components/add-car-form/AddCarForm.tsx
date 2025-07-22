import Form from "next/form";
import {Box, Button, TextField} from "@mui/material";

export const AddCarForm = () => {
    return (
        <Form action={'/cars'}>
            <Box width={'300px'} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2, p: 2}}>
                <TextField fullWidth name={'make'} label={'Brand'}></TextField>
                <TextField fullWidth name={'make'} type={'number'} label={'Year'}></TextField>
                <TextField fullWidth name={'make'} type={'number'} label={'Price'}></TextField>
                <Button fullWidth variant={'contained'} type={'submit'}>Add</Button>
            </Box>
        </Form>
    );
};