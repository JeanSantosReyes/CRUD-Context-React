import { ITheme, IThemeValues } from "../interfaces/ITheme";

const light: IThemeValues = {
    name: "light",
    color: "#1c1c1c",
    background: "#fff",
    borderColor: "rgba(0,0,0,0.2)",
};

const dark: IThemeValues = {
    name: "dark",
    color: "#fff",
    background: "#1c1c1c",
    borderColor: "rgba(255,255,255,0.2)",
};

export const theme: ITheme = {
    light: {
        ...light,
        contrast: dark,
    },
    dark: {
        ...dark,
        contrast: light,
    },
};
