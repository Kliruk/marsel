import {loveStory, portraits, family, interesting, content} from "./portfolio-photos";

export const CHAPTER_PORTFOLIO_VALUE = "p";
export const CHAPTER_LOCATIONS_VALUE = "l";

export const PORTFOLIO_PAGES = [
    {
        "name": "Роботи",
        "param": "p",
        "text": ["Моменти, що", "Зберiгаються", "Назавжди"],
    },
    {
        "name": "Локації",
        "param": "l",
        "text": ["Не можете", "Обрати локацiю", "Для Зйомки?"]
    }
]

export const ALL_IMAGES = content.concat(loveStory, portraits, family, interesting);


export const LIST_OF_GENRES = [
    {
        "name": "всi",
        "param": "",
        "list": ALL_IMAGES,
    },
    {
        "name": "контент",
        "param": "c",
        "list": content,
    },
    {
        "name": "лав сторi",
        "param": "lv-s",
        "list": loveStory,
    },
    {
        "name": "портрети",
        "param": "p",
        "list": portraits,
    },
    {
        "name": "сiмейна",
        "param": "f",
        "list": family,
    },
    {
        "name": "цiкаво",
        "param": "i",
        "list": interesting,
    }
];