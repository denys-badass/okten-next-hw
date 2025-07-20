import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Comments',
    description: 'Show all comments',
}

type Props = { children: ReactNode }
const CommentsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default CommentsLayout;