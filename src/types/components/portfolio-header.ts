import { IMainControls } from "../anim/animation";

export interface IPortfolioHeader extends IMainControls{
    chaptersParam: string,
    currentGenre: string | null | undefined,
    triggerAnimation: (arg0: string) => void,
    triggerGenres: (arg0: string) => void,
}