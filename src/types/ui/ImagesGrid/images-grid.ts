import { IReactKey } from "@/types/react/react-types";

export interface IImagesGrid extends IImagesGridContact {
    image: string,
}

export interface IImagesGridContact{
    isContact?: boolean
}