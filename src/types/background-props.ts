import { ReactNode } from "react";

interface IBackgroundProps{
    uniqueClassName: string
}

export interface IBackgroundText extends IBackgroundProps {
    children: ReactNode,
    size: string,
}

export interface IBackgroundCircle extends IBackgroundProps{
    size: number,
}