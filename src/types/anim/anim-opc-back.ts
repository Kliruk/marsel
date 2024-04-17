import { AnimationControls } from "framer-motion";
import { IChildrens } from "../react/react-types";

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
}

export interface IAnimOpcBackAllParams extends IAnimOpcBack, IChildrens, IAnimOpcBackRequired{
    uniqueClassName?: string,
}

export interface IAnimOpcBackRequired{
    mainControls: AnimationControls,
}