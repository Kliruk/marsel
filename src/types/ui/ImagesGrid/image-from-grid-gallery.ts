import { IImagesGridContact } from "./images-grid";

export interface IImageFromGridGallery extends IImagesGridContact{
    image: string,
    dimensions: {
        width: number,
        height: number
    } | null,
}