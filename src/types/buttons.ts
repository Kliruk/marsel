interface IButtons {
    starAnimationDelayMin?: number,
}

export interface IButtonsLinks extends IButtons {
    text: string,
    link: string,
    type: "big" | "small" | "none"
    widthStar: number
}

export interface IButtonsScrolls extends IButtons {
    size: number,
    widthArrow: number,
    widthStar: number,
    orientation: "downward" | "upward"
    star: true | false,
    uniqueClassName: string,
    scroll: string
}

export interface IButtonsLinksSwitch extends IButtons {
    widthStar: number,
    orientation: "left" | "right",
    action: () => void
}
