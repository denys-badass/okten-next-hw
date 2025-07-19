import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Posts',
    description: 'Show all posts',
}

type Props = { children: ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default PostsLayout;