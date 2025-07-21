import {ICar} from "@/models/ICar";
import {Grid, Paper} from "@mui/material";

const CarsPage = async () => {
    const cars: ICar[] = await fetch('http://185.69.152.209/carsAPI/v1/cars').then(res => res.json());
    console.log(cars);

    return (

        <Grid container spacing={2}>
            {cars.map((car) => {
                return (
                    <Grid key={car.id} size={3}>
                        <Paper elevation={2}>
                            <p>{car.brand}</p>
                            <p>{car.year}</p>
                            <p>{car.price}</p>
                        </Paper>
                    </Grid>


                );
            })}
        </Grid>
    );
};

export default CarsPage;