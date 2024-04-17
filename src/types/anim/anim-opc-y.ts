import { AnimationControls } from "framer-motion";
import { IChildrens } from "../react/react-types";

export interface IAnimOpcY extends IChildrens{
    mainControls: AnimationControls,
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