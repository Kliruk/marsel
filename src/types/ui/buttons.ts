import { IVoid } from "../react/react-types"

interface IButtons {
    starAnimationDelayMin?: number,
    uniqueClassName?: string
}

export interface IButtonsLinks extends IButtons {
    text: string,
    link: string ,
    type: "big" | "small" | "previous" | "none"
    widthStar: number
}

export interface IButtonsScrolls extends IButtons {
    uniqueClassNameArrow?: string
    size: number,
    widthArrow: number,
    widthStar: number,
    orientation: "downward" | "upward"
    star: true | false,
    scrollTo: string
}

export interface IButtonsLinksSwitch extends IButtons, IVoid {
    widthStar: number,
    orientation: "left" | "right",
}
