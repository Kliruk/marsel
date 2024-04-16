import { IAnimOpcBack } from "../anim/anim-opc-back";

export interface ICustomParagraph extends IAnimOpcBack{
    children: string,
    headerType: "h1" | "h2" | "h3" | "h4",
}
