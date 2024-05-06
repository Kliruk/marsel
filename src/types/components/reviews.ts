import { AnimationControls } from "framer-motion";

export interface Reviews{
    mainControls: AnimationControls,
    previousFunc: () => void,
    nextFunc: () => void,
    currentReview: {
        name: string,
        comment: string,
        images: string[]
    }
    currentIndex: number,
}