export interface IService{
    currentService: string
}

export interface IData{
        header: string,
        description: string,
        mainadvantages: string,
        advantages: string[],
        more: null | string[]
}