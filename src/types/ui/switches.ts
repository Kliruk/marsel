import { Dispatch, SetStateAction } from "react";

export interface IListOfServices{
    current: string,
    setCurrent: Dispatch<SetStateAction<string>>,
    list: string[],
    uniqueClassName?: string,
}