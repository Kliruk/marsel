import { IMainControls } from "@/types/anim/animation";
import { IListOfGenres } from "@/types/pages/portfolio";

export interface IPortfolioUi extends IMainControls {
    currentGenreName: string | undefined,
    currentGenreParam: string | null
    chaptersWasTriggered: (value : string) => void,
    genresWasTriggered: (value : string) => void,
    currentChapter: string | null,
    shuffledImages: string[],
    setShuffledImages: React.Dispatch<React.SetStateAction<string[]>>,
    returnGenre: (value: string, objParam: keyof IListOfGenres) => void
}