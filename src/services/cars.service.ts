import {ICar} from "@/models/ICar";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';

export const carsService = {
    getAllCars: async (): Promise<ICar[]> => {
        return await fetch(baseUrl + '/cars').then((res) => res.json());
    }
}