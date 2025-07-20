import { Metadata } from "next/types";
import { FC } from "react";

type Props = {
    params: {id: string};
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'Comment #' + id,
        description: 'Show specific comment'
    };
}

const CommentsPage: FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            Page for comment #{id}
        </div>
    );
};

export default CommentsPage;