import { IMainControls } from "../anim/animation";

export interface IPortfolioHeader extends IMainControls{
    currentPage: string,
    currentGenre: string,
    setCurrentGenre: React.Dispatch<React.SetStateAction<string>>,
    checkAnimation: (a: string) => void;
}