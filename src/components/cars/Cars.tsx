import {ICar} from "@/models/ICar";
import {carsService} from "@/services/cars.service";
import {Box, Grid, Paper, Typography} from "@mui/material";

export const Cars = async () => {
    const cars: ICar[] = await carsService.getAllCars();

    return (
        <Box sx={{p: 4, height: '100vh' }}>
            <Grid container spacing={2}>
                {cars.map(car => {
                    return (
                        <Grid key={car.id} size={4}>
                            <Paper elevation={4} sx={{p: 2, textAlign: 'center'}} >
                                <Typography variant={'h4'}>{car.brand}</Typography>
                                <Typography>{car.year}</Typography>
                                <Typography>{car.price}</Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};