import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `User #${id}`,
        description: 'Show specific user',
    }
}

const UserPage: FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            Page for user #{id}
        </div>
    )
};

export default UserPage;