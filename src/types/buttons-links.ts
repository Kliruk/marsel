export type buttons = {
    starAnimationDelayMin?: number,
}

export type ButtonsLinks = {
    text: string,
    link: string,
    type: "big" | "small" | "none"
    widthStar: number
} & buttons

export type ButtonsScrolls = {
    width: number,
    height: number,
    widthArrow: number,
    widthStar: number,
    orientation: "downward" | "upward"
    star: true | false
} & buttons


export type ButtonsLinksSwitch = {
    widthStar: number,
    orientation: "left" | "right",
    action: () => void
} & buttons
