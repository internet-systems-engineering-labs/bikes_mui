export type tTasks ={
    "question": string; /* вопрос задания*/
    "answer": string; /* ответ задания*/
}[]

export type tQuizzes = {
    "id": number,
    "type": "M" | "S", /* типы заданий, М - сопоставление*/
    "title": string, /* формулировка задания */
    "tasks": tTasks,
}[];

export const quiz: tQuizzes = [
    {
        "id": 1,
        "type": "M",
        "title": "Сопоставьте модель велосипеда и бренд, который её выпускает.",
        "tasks": [
            {
                "question": "Trek Fuel EX 8 29 - 2016",
                "answer": "Trek"
            },
            {
                "question": "Surly Straggler - 2016",
                "answer": "Surly"
            },
            {
                "question": "Electra Townie Original 21D - 2016",
                "answer": "Electra"
            },
            {
                "question": "Ritchey Timberwolf Frameset - 2016",
                "answer": "Ritchey"
            },
        ]
    },
    {
        "id": 2,
        "type": "M",
        "title": "Сопоставьте модель велосипеда и категорию, к которой она относится.",
        "tasks": [
            {
                "question": "Trek Conduit+ - 2016",
                "answer": "Electric Bikes"
            },
            {
                "question": "Surly Straggler 650b - 2016",
                "answer": "Cyclocross Bicycles"
            },
            {
                "question": "Electra Cruiser 1 (24-Inch) - 2016",
                "answer": "Cruisers Bicycles"
            },
            {
                "question": "Electra Girl's Hawaii 1 (20-inch) - 2015/2016",
                "answer": "Children Bicycles"
            },
            {
                "question": "Trek Domane SL 6 - 2017",
                "answer": "Road Bikes"
            },
        ]
    },
    {
        "id": 3,
        "type": "S",
        "title": "Отсортируйте велосипеды по возрастанию цены.",
        "tasks": [
            {
                "question": "Electra Cruiser 1 (24-Inch) - 2016",
                "answer": "1"
            },
            {
                "question": "Trek 820 - 2016",
                "answer": "2"
            },
            {
                "question": "Surly Wednesday Frameset - 2016",
                "answer": "3"
            },
            {
                "question": "Surly Straggler - 2016",
                "answer": "4"
            },
            {
                "question": "Trek Fuel EX 8 29 - 2016",
                "answer": "5"
            },
        ]
    }
]
