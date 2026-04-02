export type tTasks ={
    "question": string; /* вопрос задания*/
    "answer": string; /* ответ задания*/
    "options"?: string[]; /* варианты ответа для заданий с выбором */
}[]

export type tQuizzes = {
    "id": number,
    "type": "M" | "S" | "O" | "C", /* M - сопоставление, S - сортировка, O - один ответ, C - несколько ответов */
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
    },
    {
        "id": 4,
        "type": "O",
        "title": "Выберите бренд велосипеда.",
        "tasks": [
            {
                "question": "К какому бренду относится модель Trek Marlin 6 - 2018?",
                "answer": "Trek",
                "options": ["Electra", "Surly", "Trek", "Haro"]
            },
        ]
    },
    {
        "id": 5,
        "type": "O",
        "title": "Выберите категорию велосипеда.",
        "tasks": [
            {
                "question": "К какой категории относится Trek Conduit+ - 2016?",
                "answer": "Electric Bikes",
                "options": ["Road Bikes", "Electric Bikes", "Mountain Bikes", "Comfort Bicycles"]
            },
        ]
    },
    {
        "id": 6,
        "type": "C",
        "title": "Выберите все модели бренда Surly.",
        "tasks": [
            {
                "question": "Отметьте все велосипеды Surly из списка.",
                "answer": "Surly Big Dummy Frameset - 2017 | Surly Straggler - 2016 | Surly Wednesday - 2017",
                "options": [
                    "Surly Wednesday - 2017",
                    "Trek X-Caliber 8 - 2017",
                    "Surly Straggler - 2016",
                    "Electra Moto 1 - 2016",
                    "Surly Big Dummy Frameset - 2017"
                ]
            }
        ]
    }
]
