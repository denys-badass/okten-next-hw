import {ICar} from "@/models/ICar";
import {getAllCars} from "@/services/cars.service";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export const Cars = async () => {
    const cars: ICar[] = await getAllCars();

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label={"Cars"}>
                <TableHead >
                    <TableRow sx={{bgcolor: '#CFD8DC'}}>
                        <TableCell>Brand</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cars.map((car) => (
                        <TableRow key={car.id}>
                            <TableCell>{car.brand}</TableCell>
                            <TableCell>{car.year}</TableCell>
                            <TableCell>{car.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};