'use server';

import {postCar} from "@/services/cars.service";
import {ICar} from "@/models/ICar";
import {revalidatePath} from "next/cache";

export const createCar = async (formData: FormData) => {
    const car = {
        brand: formData.get('brand') || '',
        year: formData.get('year') || 0,
        price: formData.get('price') || 0,
    } as ICar;

    await postCar(car);
    revalidatePath('/');
};