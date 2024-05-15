import { IReactRef } from "@/types/react/react-types";
import { IImagesGridContact } from "./images-grid";

export interface IImageGridAnim extends IReactRef<Element>, IImagesGridContact{
    image: string,
    dimensions: {
        width: number,
        height: number
    } | null
}