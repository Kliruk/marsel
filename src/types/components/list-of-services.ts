import { Dispatch, SetStateAction } from "react";

export interface IListOfServices{
    currentService: string,
    setCurrentService: Dispatch<SetStateAction<string>>
}