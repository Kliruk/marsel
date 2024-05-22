import { Dispatch, SetStateAction } from "react";
import { IReactVoidOneArg } from "../react/react-types";

export interface ISwitches<T> extends IReactVoidOneArg<T>{
    current: T,
    list: T[],
    uniqueClassName?: string,
}