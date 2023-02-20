export interface IThemeValues {
    background: string;
    color: string;
    borderColor: string;
    name: string;
}

export interface ISelectedTheme extends IThemeValues {
    contrast: IThemeValues;
}

export interface ITheme {
    light: ISelectedTheme;
    dark: ISelectedTheme;
}
