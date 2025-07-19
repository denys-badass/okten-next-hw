import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Post #${id}`,
        description: 'Show specific post',
    }
}

const PostPage: FC<Props> = async ({ params }) => {
    const {id} = await params;
    return (
        <div>
            Page for post #{id}
        </div>
    );
};

export default PostPage;
