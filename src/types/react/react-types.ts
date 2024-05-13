import { RefObject } from "react"

export interface IChildrens {
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