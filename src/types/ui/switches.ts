import { Dispatch, SetStateAction } from "react";
import { IReactVoidOneArg } from "../react/react-types";

export interface ISwitches extends IReactVoidOneArg<string>{
    current: string,
    list: string[],
    uniqueClassName?: string,
}