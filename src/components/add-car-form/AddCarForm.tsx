"use client";

import Form from "next/form";
import {Box, Button, InputAdornment, TextField} from "@mui/material";
import {createCar} from "@/server-actions/cars.actions";
import {useForm} from "react-hook-form";
import {ICar} from "@/models/ICar";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/car.validator";

export const AddCarForm = () => {
    const {register, formState: {errors, isValid}} = useForm<ICar>({mode: "all", resolver: joiResolver(carValidator)});

    return (
        <Form action={createCar}>
            <Box width={'300px'} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2, p: 2}}>
                <TextField
                    fullWidth
                    error={!!errors.brand}
                    type={'text'}
                    {...register('brand')}
                    label={'Brand'}
                    helperText={errors.brand?.message}>
                </TextField>
                <TextField
                    fullWidth
                    error={!!errors.year}
                    type={'number'}
                    {...register('year')}
                    label={'Year'}
                    helperText={errors.year?.message}>
                </TextField>
                <TextField
                    fullWidth error={!!errors.price}
                    type={'number'}
                    {...register('price')}
                    label={'Price'}
                    helperText={errors.price?.message}
                    slotProps={{input: {startAdornment: <InputAdornment position={'start'}>$</InputAdornment>}}}>
                </TextField>
                <Button fullWidth variant={'contained'} type={'submit'} disabled={!isValid}>Add</Button>
            </Box>
        </Form>
    );
};