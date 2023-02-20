import { Styles } from "./styles";

import { Button } from "../button";
import { Input } from "../input";

import { SaveIcon } from "../icons/save";
import { CloseIcon } from "../icons/close";

interface IProps {
    onSubmit(): void;
}

export const ItemForm = ({ onSubmit }: IProps) => {
    return (
        <>
            <Input
                name="nickname"
                placeholder="Nickname"
                onChangeText={console.log}
            />
            <Input
                name="age"
                placeholder="Age"
                type="number"
                onChangeText={console.log}
            />
            <Input
                name="whatsapp"
                placeholder="Whatsapp number"
                type="number"
                onChangeText={console.log}
            />
            <Styles.GroupButtons>
                <Button onClick={onSubmit}>
                    <SaveIcon />
                </Button>
                <Button onClick={onSubmit}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    )
}
