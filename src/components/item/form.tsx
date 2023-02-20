import { useState } from 'react';
import { Styles } from "./styles";
import { IItem } from "../../interfaces/IItem";

import { Button } from "../button";
import { Input } from "../input";

import { SaveIcon } from "../icons/save";
import { CloseIcon } from "../icons/close";

import { useContextHook } from '../../context/hook';

export const ItemForm = ({ ...item }: IItem) => {

    const { toggleIsEditing, editItem } = useContextHook();

    const [formState, setFormState] = useState(item);

    const { nickname = '', whatsapp = '', age = '', id } = formState || {};

    return (
        <>
            <Input
                name="nickname"
                placeholder="Nickname"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, nickname: v }))}
                value={nickname}
                autoFocus
            />
            <Input
                name="age"
                placeholder="Age"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, age: ~~v }))}
                value={age}
            />
            <Input
                name="whatsapp"
                placeholder="Whatsapp number"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, whatsapp: ~~v }))}
                value={whatsapp}
            />
            <Styles.GroupButtons>
                <Button onClick={() => editItem(formState)}>
                    <SaveIcon />
                </Button>
                <Button onClick={() => toggleIsEditing(id)}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    )
}
