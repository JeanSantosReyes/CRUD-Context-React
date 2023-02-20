import "styled-components";

import { ISelectedTheme } from "./interfaces/ITheme";

declare module "styled-components" {
    export interface DefaultTheme extends ISelectedTheme { }
}
