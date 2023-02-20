import { useState } from "react"
import { Styles } from "./styles";
import { v4 as uuidv4 } from "uuid";

import { Button } from "../button";
import { Item } from "../item";

export const ListItems = () => {

    const [items, setItems] = useState<string[]>([uuidv4()]);

    const handleClickCreate = () => {
        setItems((old) => [...old, uuidv4()])
    }

    return (
        <Styles.Container>
            <Button onClick={handleClickCreate}>Create new person</Button>
            {
                items.map((id, index) => (
                    <Item key={id} position={index} />
                ))
            }
        </Styles.Container>
    )
}
