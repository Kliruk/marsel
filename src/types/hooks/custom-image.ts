export interface ICustomImage{
    uniqueClassName: string,
    src: string,
    alt: string,
    width?: number | "100%",
    height?: number | "100%",
    quality?: number
    sizes: string,
}
