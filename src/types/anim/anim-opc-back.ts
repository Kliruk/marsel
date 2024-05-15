import { IReactChildrens } from "../react/react-types";
import { IMainControls } from "./animation";

export interface IAnimOpcBack {
    color?: string,
    isYMoves: true | false,
    duration?: number,
    delay?: number,
    initialY?: number,
    y?: number,
    initialOpacity?: number,
    opacity?: number,
    initialBackground?: string,
    background?: string,
    ease?: string,
    yDuration?: number
}

export interface IAnimOpcBackAllParams extends IAnimOpcBack, IReactChildrens, IMainControls{
    uniqueClassName?: string,
}