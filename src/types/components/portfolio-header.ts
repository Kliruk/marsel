import { IMainControls } from "../anim/animation";

export interface IPortfolioHeader extends IMainControls{
    chaptersParam: string,
    currentGenre: string,
    setCurrentGenre: React.Dispatch<React.SetStateAction<string>>,
    checkForAnimationGoes: (a: string) => void;
}