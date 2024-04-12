export interface IService{
    currentService: string
}

export interface IData{
        header: string,
        description: string,
        mainadvantages: {price: string, duration: string},
        advantages: string[],
        more: null | string[]
}