import {IVoid} from "@/types/react/react-types";

export interface ILoadMore extends IVoid{
    limit: number,
    current: number
}