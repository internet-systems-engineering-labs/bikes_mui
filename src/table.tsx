const bikes = [
    {
        "id": 1,
        "Название": "Trek 820 - 2016",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 379.99
    },
    {
        "id": 2,
        "Название": "Ritchey Timberwolf Frameset - 2016",
        "Бренд": "Ritchey",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 749.99
    },
    {
        "id": 3,
        "Название": "Surly Wednesday Frameset - 2016",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 999.99
    },
    {
        "id": 4,
        "Название": "Trek Fuel EX 8 29 - 2016",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 2899.99
    },
    {
        "id": 5,
        "Название": "Heller Shagamaw Frame - 2016",
        "Бренд": "Heller",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 1320.99
    },
    {
        "id": 6,
        "Название": "Surly Ice Cream Truck Frameset - 2016",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 469.99
    },
    {
        "id": 7,
        "Название": "Trek Slash 8 27.5 - 2016",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 3999.99
    },
    {
        "id": 8,
        "Название": "Trek Remedy 29 Carbon Frameset - 2016",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2016,
        "Цена": 1799.99
    },
    {
        "id": 9,
        "Название": "Trek Conduit+ - 2016",
        "Бренд": "Trek",
        "Категория": "Electric Bikes",
        "Год": 2016,
        "Цена": 2999.99
    },
    {
        "id": 10,
        "Название": "Surly Straggler - 2016",
        "Бренд": "Surly",
        "Категория": "Cyclocross Bicycles",
        "Год": 2016,
        "Цена": 1549
    },
    {
        "id": 11,
        "Название": "Surly Straggler 650b - 2016",
        "Бренд": "Surly",
        "Категория": "Cyclocross Bicycles",
        "Год": 2016,
        "Цена": 1680.99
    },
    {
        "id": 12,
        "Название": "Electra Townie Original 21D - 2016",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 549.99
    },
    {
        "id": 13,
        "Название": "Electra Cruiser 1 (24-Inch) - 2016",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 269.99
    },
    {
        "id": 14,
        "Название": "Electra Girl's Hawaii 1 (16-inch) - 2015/2016",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 269.99
    },
    {
        "id": 15,
        "Название": "Electra Moto 1 - 2016",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 529.99
    },
    {
        "id": 16,
        "Название": "Electra Townie Original 7D EQ - 2016",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 599.99
    },
    {
        "id": 17,
        "Название": "Pure Cycles Vine 8-Speed - 2016",
        "Бренд": "Pure Cycles",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 429
    },
    {
        "id": 18,
        "Название": "Pure Cycles Western 3-Speed - Women's - 2015/2016",
        "Бренд": "Pure Cycles",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 449
    },
    {
        "id": 19,
        "Название": "Pure Cycles William 3-Speed - 2016",
        "Бренд": "Pure Cycles",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 449
    },
    {
        "id": 20,
        "Название": "Electra Townie Original 7D EQ - Women's - 2016",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2016,
        "Цена": 599.99
    },
    {
        "id": 21,
        "Название": "Electra Cruiser 1 (24-Inch) - 2016",
        "Бренд": "Electra",
        "Категория": "Children Bicycles",
        "Год": 2016,
        "Цена": 269.99
    },
    {
        "id": 22,
        "Название": "Electra Girl's Hawaii 1 (16-inch) - 2015/2016",
        "Бренд": "Electra",
        "Категория": "Children Bicycles",
        "Год": 2016,
        "Цена": 269.99
    },
    {
        "id": 23,
        "Название": "Electra Girl's Hawaii 1 (20-inch) - 2015/2016",
        "Бренд": "Electra",
        "Категория": "Children Bicycles",
        "Год": 2016,
        "Цена": 299.99
    },
    {
        "id": 24,
        "Название": "Electra Townie Original 21D - 2016",
        "Бренд": "Electra",
        "Категория": "Comfort Bicycles",
        "Год": 2016,
        "Цена": 549.99
    },
    {
        "id": 25,
        "Название": "Electra Townie Original 7D - 2015/2016",
        "Бренд": "Electra",
        "Категория": "Comfort Bicycles",
        "Год": 2016,
        "Цена": 499.99
    },
    {
        "id": 26,
        "Название": "Electra Townie Original 7D EQ - 2016",
        "Бренд": "Electra",
        "Категория": "Comfort Bicycles",
        "Год": 2016,
        "Цена": 599.99
    },
    {
        "id": 27,
        "Название": "Surly Big Dummy Frameset - 2017",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 999.99
    },
    {
        "id": 28,
        "Название": "Surly Karate Monkey 27.5+ Frameset - 2017",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 2499.99
    },
    {
        "id": 29,
        "Название": "Trek X-Caliber 8 - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 999.99
    },
    {
        "id": 30,
        "Название": "Surly Ice Cream Truck Frameset - 2017",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 999.99
    },
    {
        "id": 31,
        "Название": "Surly Wednesday - 2017",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 1632.99
    },
    {
        "id": 32,
        "Название": "Trek Farley Alloy Frameset - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 469.99
    },
    {
        "id": 33,
        "Название": "Surly Wednesday Frameset - 2017",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 469.99
    },
    {
        "id": 34,
        "Название": "Trek Session DH 27.5 Carbon Frameset - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 469.99
    },
    {
        "id": 35,
        "Название": "Sun Bicycles Spider 3i - 2017",
        "Бренд": "Sun Bicycles",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 832.99
    },
    {
        "id": 36,
        "Название": "Surly Troll Frameset - 2017",
        "Бренд": "Surly",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 832.99
    },
    {
        "id": 37,
        "Название": "Haro Flightline One ST - 2017",
        "Бренд": "Haro",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 379.99
    },
    {
        "id": 38,
        "Название": "Haro Flightline Two 26 Plus - 2017",
        "Бренд": "Haro",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 549.99
    },
    {
        "id": 39,
        "Название": "Trek Stache 5 - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 1499.99
    },
    {
        "id": 40,
        "Название": "Trek Fuel EX 9.8 29 - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 4999.99
    },
    {
        "id": 41,
        "Название": "Haro Shift R3 - 2017",
        "Бренд": "Haro",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 1469.99
    },
    {
        "id": 42,
        "Название": "Trek Fuel EX 5 27.5 Plus - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 2299.99
    },
    {
        "id": 43,
        "Название": "Trek Fuel EX 9.8 27.5 Plus - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 5299.99
    },
    {
        "id": 44,
        "Название": "Haro SR 1.1 - 2017",
        "Бренд": "Haro",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 539.99
    },
    {
        "id": 45,
        "Название": "Haro SR 1.2 - 2017",
        "Бренд": "Haro",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 869.99
    },
    {
        "id": 46,
        "Название": "Haro SR 1.3 - 2017",
        "Бренд": "Haro",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 1409.99
    },
    {
        "id": 47,
        "Название": "Trek Remedy 9.8 - 2017",
        "Бренд": "Trek",
        "Категория": "Mountain Bikes",
        "Год": 2017,
        "Цена": 5299.99
    },
    {
        "id": 48,
        "Название": "Trek Emonda S 4 - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 1499.99
    },
    {
        "id": 49,
        "Название": "Trek Domane SL 6 - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 3499.99
    },
    {
        "id": 50,
        "Название": "Trek Silque SLR 7 Women's - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 5999.99
    },
    {
        "id": 51,
        "Название": "Trek Silque SLR 8 Women's - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 6499.99
    },
    {
        "id": 52,
        "Название": "Surly Steamroller - 2017",
        "Бренд": "Surly",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 875.99
    },
    {
        "id": 53,
        "Название": "Surly Ogre Frameset - 2017",
        "Бренд": "Surly",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 749.99
    },
    {
        "id": 54,
        "Название": "Trek Domane SL Disc Frameset - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 3199.99
    },
    {
        "id": 55,
        "Название": "Trek Domane S 6 - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 2699.99
    },
    {
        "id": 56,
        "Название": "Trek Domane SLR 6 Disc - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 5499.99
    },
    {
        "id": 57,
        "Название": "Trek Emonda S 5 - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 1999.99
    },
    {
        "id": 58,
        "Название": "Trek Madone 9.2 - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 4999.99
    },
    {
        "id": 59,
        "Название": "Trek Domane S 5 Disc - 2017",
        "Бренд": "Trek",
        "Категория": "Road Bikes",
        "Год": 2017,
        "Цена": 2599.99
    },
    {
        "id": 60,
        "Название": "Sun Bicycles ElectroLite - 2017",
        "Бренд": "Sun Bicycles",
        "Категория": "Electric Bikes",
        "Год": 2017,
        "Цена": 1559.99
    },
    {
        "id": 61,
        "Название": "Trek Powerfly 8 FS Plus - 2017",
        "Бренд": "Trek",
        "Категория": "Electric Bikes",
        "Год": 2017,
        "Цена": 4999.99
    },
    {
        "id": 62,
        "Название": "Trek Boone 7 - 2017",
        "Бренд": "Trek",
        "Категория": "Cyclocross Bicycles",
        "Год": 2017,
        "Цена": 3499.99
    },
    {
        "id": 63,
        "Название": "Trek Boone Race Shop Limited - 2017",
        "Бренд": "Trek",
        "Категория": "Cyclocross Bicycles",
        "Год": 2017,
        "Цена": 3499.99
    },
    {
        "id": 64,
        "Название": "Electra Townie Original 7D - 2017",
        "Бренд": "Electra",
        "Категория": "Cruisers Bicycles",
        "Год": 2017,
        "Цена": 489.99
    }
];

export default bikes;
