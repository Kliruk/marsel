import { IChildrens } from "../react/react-types";

export interface IAnimSclOpc {
    opacity?: number,
    scale?: number,
    duration?: number,
    ease?: string,
    initialOpacity?: number,
    initialScale?: number,
    uniqueClassName?: string,
}

export interface IAnimSclOpcAllParam extends IChildrens, IAnimSclOpc{}