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


// production version
// export const ALL_IMAGES = [
//     "/photo/portfolioTest/MAR00422.webp",
//     "/photo/portfolioTest/MAR00429.webp",
//     "/photo/portfolioTest/MAR00458.webp",
//     "/photo/portfolioTest/MAR00463.webp",
//     "/photo/portfolioTest/MAR00465.webp",
//     "/photo/portfolioTest/MAR00571.webp",
//     "/photo/portfolioTest/MAR00644.webp",
//     "/photo/portfolioTest/MAR00651.webp",
//     "/photo/portfolioTest/MAR00662.webp",
//     "/photo/portfolioTest/MAR00695.webp",
//     "/photo/portfolioTest/MAR00707.webp",
// ]

const content = [
    "/photo/portfolioTest/MAR00422.webp",
    "/photo/portfolioTest/MAR00429.webp",
]
const loveStory = [
    "/photo/portfolioTest/MAR00458.webp",
    "/photo/portfolioTest/MAR00463.webp",
]
const portrets = [
    "/photo/portfolioTest/MAR00465.webp",
    "/photo/portfolioTest/MAR00571.webp",
]
const family = [
    "/photo/portfolioTest/MAR00644.webp",
    "/photo/portfolioTest/MAR00651.webp",
]
const interesting = [
    "/photo/portfolioTest/MAR00662.webp",
    "/photo/portfolioTest/MAR00695.webp",
    "/photo/portfolioTest/MAR00707.webp",
]

export const ALL_IMAGES = content.concat(loveStory, portrets, family, interesting);


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
        "list": portrets,
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