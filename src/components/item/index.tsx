import { useState } from "react";
import { Styles } from "./styles";
import { Button } from "../button";

import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import { ItemForm } from "./form";

interface IProps {
    position: number;
}

export const Item = ({ position }: IProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleClickEdit = () => setIsEditing(true);
    const handleSubmit = () => setIsEditing(false);

    return (
        <Styles.Container>
            <strong>{position}</strong>
            {
                isEditing
                    ? (
                        <ItemForm onSubmit={handleSubmit} />
                    )
                    : (
                        <>
                            <p>Nickname</p>
                            <p>22</p>
                            <p>+55 21 91234-5678</p>
                            <Styles.GroupButtons>
                                <Button onClick={handleClickEdit}>
                                    <PencilIcon />
                                </Button>
                                <Button>
                                    <TrashIcon />
                                </Button>
                            </Styles.GroupButtons>
                        </>
                    )
            }
        </Styles.Container>
    )
}
