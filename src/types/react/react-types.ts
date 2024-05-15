import { RefObject } from "react"

export interface IReactChildrens {
    children: React.ReactNode
}

export interface IReactSetState<Type>{
    setState: React.Dispatch<React.SetStateAction<Type>>
}

export interface IReactRef<Type>{
    refTrans: RefObject<Type>
}

export interface IReactKey{
    key: React.Key
}

export interface IVoid {
    action: () => void
}

export interface IReactVoidOneArg<Type>{
    handleChanges: (a: Type) => void
}