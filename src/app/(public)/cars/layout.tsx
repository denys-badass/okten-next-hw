import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Cars',
    description: 'Show all cars',
}

type Props = { children: ReactNode }
const CarsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default CarsLayout;