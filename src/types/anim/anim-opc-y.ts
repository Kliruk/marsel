import { IReactChildrens } from "../react/react-types";
import { IMainControls } from "./animation";

export interface IAnimOpcY extends IReactChildrens, IMainControls{
    queueOrder?: number,
    delay?: number,
    delayMultiplier?: number,
    duration?: number,
    ease?: string,
    yStart?: number,
    yEnd?: number,
    opacityStart?: number,
    opacityEnd?: number,
    uniqueClassName?: string,
}