import { Styles } from "./styles";
import { Button } from "../button";

import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import { ItemForm } from "./form";
import { useContextHook } from '../../context/hook';
import { IItem } from "../../interfaces/IItem";

interface IProps extends IItem {
    position: number;
}

export const Item = ({ position, nickname, whatsapp, age, id, isEditing = false }: IProps) => {

    const { deleteItem, toggleIsEditing } = useContextHook();

    return (
        <Styles.Container>
            <strong>{position}</strong>
            {
                isEditing
                    ? (
                        <ItemForm
                            {...{
                                nickname,
                                whatsapp,
                                age,
                                id,
                                isEditing,
                            }}
                        />
                    )
                    : (
                        <>
                            <p>{nickname ?? <i>Insert name</i>}</p>
                            <p>{age ?? <i>Insert age</i>}</p>
                            <p>{whatsapp ?? <i>Insert phone</i>}</p>

                            <Styles.GroupButtons>
                                <Button onClick={() => toggleIsEditing(id)}>
                                    <PencilIcon />
                                </Button>
                                <Button onClick={() => deleteItem(id)}>
                                    <TrashIcon />
                                </Button>
                            </Styles.GroupButtons>
                        </>
                    )
            }
        </Styles.Container>
    )
}
