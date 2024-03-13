export type ButtonsLinks = {
    text: string,
    link: string,
    type: "big" | "small" | "none"
    widthStar: number
}

export interface ButtonsScrolls {
    width: number,
    height: number,
    widthArrow: number,
    widthStar: number,
    orientation: "downward" | "upward"
    star: true | false
}


export interface ButtonsLinksSwitch{
    widthStar: number,
    orientation: "left" | "right",
    action: () => void
}
