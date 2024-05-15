import { IReactChildrens } from "../react/react-types";
import { IMainControls } from "./animation";

export interface IAnimPathL extends IMainControls{
    initialPathLength?: number,
    pathLenght?: number,
    duration?: number,
    delay?: number,
    ease?: number[] | string,
}

export interface IAnimPathLAllParams extends IAnimPathL, IReactChildrens{}