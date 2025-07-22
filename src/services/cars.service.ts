'use server';

import {ICar} from "@/models/ICar";
import {redirect} from "next/navigation";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';


const getAllCars = async (): Promise<ICar[]> => {
    return await fetch(baseUrl + '/cars').then((res) => res.json());
};

const postCar= async (formData: FormData) => {
    const carData = Object.fromEntries(formData.entries());
    await fetch(baseUrl + '/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)});
    redirect('/cars');
}

export {
    getAllCars,
    postCar
}

