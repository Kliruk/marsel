import { IMainControls } from "../anim/animation";

export interface IPortfolioHeader extends IMainControls{
    currentChapter: string,
    currentChapterText: string[],
    currentGenre: string,
    setCurrentGenre: React.Dispatch<React.SetStateAction<string>>,
    checkForAnimationGoes: (a: string) => void;
}