export interface ICustomParagraph{
    children: string,
    headerType: "h1" | "h2" | "h3" | "h4",
    color?: string,
    isYMoves: true | false,
    duration?: number,
    delay?: number,
}
