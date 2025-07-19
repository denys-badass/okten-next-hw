import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Users',
    description: 'Show all users',
}

type Props = { children: ReactNode }
const UsersLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default UsersLayout;