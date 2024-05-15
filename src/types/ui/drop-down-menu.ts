import { Dispatch, SetStateAction } from "react";

export interface IDropDownMenu{
    current: string,
    setCurrent: Dispatch<SetStateAction<string>>,
    list: string[],
    uniqueClassName?: string,
}
