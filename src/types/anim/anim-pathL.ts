import { AnimationControls } from "framer-motion";
import { IChildrens } from "../react/react-types";

export interface IAnimPathL{
    mainControls: AnimationControls
    initialPathLength?: number,
    pathLenght?: number,
    duration?: number,
    delay?: number,
    ease?: number[] | string,
}

export interface IAnimPathLAllParams extends IAnimPathL, IChildrens{}