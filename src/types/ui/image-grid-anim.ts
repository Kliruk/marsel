import { IImageGrids } from "./image-grid";

export interface IImageGridAnim extends IImageGrids{
    columnIdx: number,
    rowIdx: number,
    columns: number,
}