import { ReactNode } from "react";
import { IAnimOpcBack } from "../anim/anim-opc-back";
import { IAnimPathL } from "../anim/anim-pathL";

interface IBackgroundProps {
    uniqueClassName: string
}

export interface IBackgroundText extends IBackgroundProps, IAnimOpcBack {
    children: ReactNode,
    size?: string,
    delay?: number,
    duration?: number
}

export interface IBackgroundCircle extends IBackgroundProps{
    size: number,
}