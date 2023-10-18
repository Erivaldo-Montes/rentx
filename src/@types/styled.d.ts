import "styled-components/native";
import { theme } from "../theme/index";

type THEME = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends THEME {}
}
