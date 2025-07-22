import {Metadata} from "next";
import {ReactNode} from "react";
import {Container} from "@mui/material";

export const metadata: Metadata = {
    title: 'Cars',
    description: 'Show all cars',
}

type Props = { children: ReactNode }
const CarsLayout = ({children}: Props) => {
    return (
        <Container maxWidth="xl">
            {children}
        </Container>
    )
};

export default CarsLayout;