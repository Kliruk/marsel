import { IReactRef } from "../react/react-types";

export interface IImageGrids{
    image: string,
}

export interface IImageGrid extends IReactRef<HTMLImageElement>, IImageGrids{
    isContact?: boolean,
}
