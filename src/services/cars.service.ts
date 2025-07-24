import {ICar} from "@/models/ICar";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';

const getAllCars = async (): Promise<ICar[]> => {
    return await fetch(baseUrl + '/cars').then((res) => res.json());
};

const postCar= async (carData: ICar) => {
    await fetch(baseUrl + '/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)});
}

export {
    getAllCars,
    postCar
}

