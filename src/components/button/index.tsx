import { ReactNode } from "react";
import { Styles } from "./styles";

interface IProps {
    onClick?(): void;
    type?: "button" | "submit";
    children: ReactNode;
}

export const Button = ({ type = "button", children, ...rest }: IProps) => {
    return (
        <Styles.Container type={type} {...rest}>
            {children}
        </Styles.Container>
    )
}
