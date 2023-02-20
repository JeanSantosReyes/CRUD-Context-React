import { theme as mockTheme } from "../../config/theme"
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";
import { Styles } from "./styles";

export const ToggleTheme = () => {

    const theme = mockTheme.light;

    return (
        <Styles.Container>
            <Styles.Bull>
                <Styles.Icon>
                    {theme.name === 'light' ? <SunIcon /> : <MoonIcon />}
                </Styles.Icon>
            </Styles.Bull>
        </Styles.Container>
    )
}
