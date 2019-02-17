import React from 'react';

export const carBrand = [
    {
        id: 0,
        name: 'Alfa Romeo'
    },
    {
        id: 1,
        name: 'Audi'
    },
    {
        id: 2,
        name: 'Aston Martin'
    },
    {
        id: 3,
        name: 'Bentley'
    },
    {
        id: 4,
        name: 'BMW'
    },
    {
        id: 5,
        name: 'Bugatti'
    },
    {
        id: 6,
        name: 'Chevrolet'
    },
    {
        id: 7,
        name: 'Chrysler'
    },
    {
        id: 8,
        name: 'Citroen'
    },
    {
        id: 9,
        name: 'Dacia'
    },
    {
        id: 10,
        name: 'Daewoo'
    },
    {
        id: 11,
        name: 'Dodge'
    },
    {
        id: 12,
        name: 'Ferrari'
    },
    {
        id: 13,
        name: 'Fiat'
    },
    {
        id: 14,
        name: 'Ford'
    },
    {
        id: 15,
        name: 'Honda'
    },
    {
        id: 16,
        name: 'Jaguar'
    },
    {
        id: 17,
        name: 'Jeep'
    },
    {
        id: 18,
        name: 'Kia'
    },
    {
        id: 19,
        name: 'Lamborghini'
    },
    {
        id: 20,
        name: 'Lancia'
    },
    {
        id: 21,
        name: 'Land Rover'
    },
    {
        id: 22,
        name: 'Lexus'
    },
    {
        id: 23,
        name: 'Maserati'
    },
    {
        id: 24,
        name: 'Mazda'
    },
    {
        id: 25,
        name: 'Mercedes'
    },
    {
        id: 26,
        name: 'Porsche'
    },
    {
        id: 27,
        name: 'Opel'
    },
    {
        id: 28,
        name: 'Seat'
    },
    {
        id: 29,
        name: 'Skoda'
    },
    {
        id: 30,
        name: 'Volkswagen'
    },
]

export const services = [
    {
        id: 0,
        name: 'Diagnostyka komputerowa silnika',
    },
    {
        id: 1,
        name: 'Wymiana klocków hamulcowych',
    },
    {
        id: 2,
        name: 'Wymiana oleju w silniku',
    },
    {
        id: 3,
        name: 'Wymiana amortyzatora',
    },
    {
        id: 4,
        name: 'Wymiana filtra paliwa'
    },
    {
        id: 5,
        name: 'Wymiana filtra powietrza'
    },
    {
        id: 6,
        name: 'Wymiana filtra powietrza'
    },
    {
        id: 7,
        name: 'Wymiana oleju skrzynia biegów manualna'
    },
    {
        id: 8,
        name: 'Wymiana opon felgi aluminiowe'
    },
    {
        id: 9,
        name: 'Wymiana rozrządu silnik benzynowy'
    },
    {
        id: 10,
        name: 'Wymiana tarcz i klocków hamulcowych'
    },
    {
        id: 11,
        name: 'Przegląd samochodu przed zakupem'
    },
    {
        id: 12,
        name: 'Serwis klimatyzacji'
    },
    {
        id: 13,
        name: 'Sprawdzenie szczelności układu klimatyzacji'
    },
    {
        id: 14,
        name: 'Wymiana szczęk hamulcowych'
    },
    {
        id: 15,
        name: 'Wymiana tłumika'
    },
    {
        id: 16,
        name: 'Wymiana tuleji wahacza przód/tył'
    },
    {
        id: 17,
        name: 'Wymiana uszczelki pod głowicą'
    },
    {
        id: 18,
        name: 'Wymiana uszczelki pod głowicą'
    },
    {
        id: 19,
        name: 'Wymiana Amortyzatora'
    },
    {
        id: 20,
        name: 'Wymiana filtra kabinowego'
    },
    {
        id: 21,
        name: 'Klimatyzacja - odgrzybianie ozonem'
    },
    {
        id: 22,
        name: 'Geometria kół'
    },
    {
        id: 23,
        name: 'Wyciąganie zapieczonych wtryskiwaczy'
    },
    {
        id: 24,
        name: 'Wykręcanie urwanych wtryskiwaczy'
    },
    {
        id: 25,
        name: 'Wymiana opon - felgi stalowe'
    }
]

export const mechanics = [
    
    {
        id: 0,
        name: "SUPER TANIE NAPRAWY",
        city: "Lublin",
        street: "Hirszfelda",
        carBrand: carBrand,
        services: services
    },
    {
        id: 1,
        name: "Bogdan Auto",
        city: "Lublin",
        street: "Hirszfelda",
        carBrand: carBrand,
        services: services
    },
    {
        id: 2,
        name: "Januszex Auto",
        city: "Lublin",
        street: "Puławska",
        carBrand: [0,1,2,3,4,5],
        services: services
    },
    {
        id: 3,
        name: "Serwis Krochmalna",
        city: "Lublin",
        street: "Krochmalna",
        carBrand: [0,1,4,6,10,11,25],
        services: [1,2,4,5,8,10,14,18,20]
    },
    {
        id: 4,
        name: "Serwis u Zbycha",
        city: "Lublin",
        street: "Krańcowa",
        carBrand: [0,1,2,3,8,9,10,20,21,30],
        services: [0,1,2,6,7,8,9,11,14,15,20,21,24,30]
    },
    {
        id: 5,
        name: "Pryma Sort Moto",
        city: "Lublin",
        street: "Krańcowa",
        carBrand: [0,1,2,3,8,9,10,20,21,30],
        services: [0,4,7,28,29,30]
    },
    {
        id: 6,
        name: "AUTO NAPRAWA FHU",
        city: "Lublin",
        street: "Zachodnia",
        carBrand: [0,1,2,3,8,9,10,20,21,30],
        services: [0,4,7,28,29,30]
    },
    {
        id: 7,
        name: "U Woźniaka",
        city: "Lublin",
        street: "Fabryczna",
        carBrand: carBrand,
        services: services
    },
    {
        id: 8,
        name: "GP Services",
        city: "Lublin",
        street: "Mełgiewska",
        carBrand: carBrand,
        services: services
    },
    {
        id: 9,
        name: "BMW SERVICE",
        city: "Lublin",
        street: "Mełgiewska",
        carBrand: [4],
        services: services
    },
    {
        id: 10,
        name: "Dariusz Moto",
        city: "Lublin",
        street: "Dolna Marii Panny",
        carBrand: [4,5,6,12,16,17,20,21,29,30],
        services: [1,2,4,6,7,8,12,14,15]
    },
    {
        id: 11,
        name: "Honda Car",
        city: "Lublin",
        street: "Dolna Marii Panny",
        carBrand: [15],
        services: [1,2,4,6,7,8,12,14,15]
    },
    {
        id: 12,
        name: "BEST AUTO SERVICE",
        city: "Lublin",
        street: "Gnieźnieńska",
        carBrand: [1,2,5,7],
        services: [20,21,25]
    },
    {
        id: 13,
        name: "Stefan Car Service",
        city: "Lublin",
        street: "Nadbystrzycka",
        carBrand: [3,8,9,12,17,18,19,20],
        services: services
    },
    {
        id: 14,
        name: "TOP LUXURY BRANDS",
        city: "Lublin",
        street: "Zamojska",
        carBrand: [2,5,12,19,22,23,26],
        services: services
    },
    {
        id: 15,
        name: "POL CAR",
        city: "Lublin",
        street: "Rusałki",
        carBrand: [12,17,18,20,21,24,25,27,28,29,30],
        services: [1,2,3,7,12,13,14,17,20,21]
    },
    {
        id: 16,
        name: "WARSZTAT",
        city: "Lublin",
        street: "Chęcińskiego",
        carBrand: carBrand,
        services: [1,2,3,7,12,21,22,25]
    },
    {
        id: 17,
        name: "FHU JS POL",
        city: "Lublin",
        street: "Kiepury",
        carBrand: [2,3,1,6,7,9,10,14,16,17,18,20,23,24,26,27,28,29],
        services: [1,2,3,7,12,23,24]
    },
    {
        id: 18,
        name: "Computer Diagnostic",
        city: "Lublin",
        street: "Piłsudskiego",
        carBrand: carBrand,
        services: [0]
    },
    {
        id: 19,
        name: "Auto Naprawa STEFANEX",
        city: "Lublin",
        street: "Narutowicza",
        carBrand: carBrand,
        services: [0,1,2,3,4,14,17,20,21,23,24,25]
    },
    {
        id: 20,
        name: "Auto PLUS",
        city: "Lublin",
        street: "Mickiewicza",
        carBrand: [0,1,3,5,9,12,14,15,17,20,21,23],
        services: [0]
    },
    {
        id: 21,
        name: "SUPER AUTO SERWIS",
        city: "Lublin",
        street: "Niemcewicza",
        carBrand: [0,1,3,5,9,12,14,15,17,20,21,23],
        services: [0,17,18,20,25]
    },
    {
        id: 22,
        name: "ARCY MASTER SERWIS",
        city: "Lublin",
        street: "Sienkiewicza",
        carBrand: carBrand,
        services: [19,20,21,22,23]
    },
    {
        id: 23,
        name: "KLIMA POL",
        city: "Lublin",
        street: "Bema",
        carBrand: carBrand,
        services: [12,13]
    },
    {
        id: 24,
        name: "AUTO SUPER EXPRESS",
        city: "Lublin",
        street: "Franczaka-Lalka",
        carBrand: carBrand,
        services: [1,4,5,6,7,12,15,19,22]
    },
    {
        id: 25,
        name: "CAR KING",
        city: "Lublin",
        street: "Witosa",
        carBrand: [1,4,7,8,12,17,19,22],
        services: [1,4,5,6,7,12,15,19,22]
    },
    {
        id: 26,
        name: "LUBLIN BEST CAR SERVICE",
        city: "Lublin",
        street: "Anny Walentynowicz",
        carBrand: carBrand,
        services: services
    },
    {
        id: 27,
        name: "PRIMA CAR PAŹDZIOCH",
        city: "Lublin",
        street: "Anny Walentynowicz",
        carBrand: carBrand,
        services: [22]
    },
    {
        id: 28,
        name: "MAX SERWIS PÓŁNOCNA",
        city: "Lublin",
        street: "Północna",
        carBrand: carBrand,
        services: services
    },
    {
        id: 29,
        name: "Auto-LUX",
        city: "Lublin",
        street: "Słoneczna",
        carBrand: carBrand,
        services: services
    },
    {
        id: 30,
        name: "SUPER RAIDER CAR SERVICE",
        city: "Lublin",
        street: "Gęsia",
        carBrand: carBrand,
        services: [0,3,6,12,18,19]
    },
    {
        id: 31,
        name: "SAMOCHODEX",
        city: "Lublin",
        street: "Czeremchowa",
        carBrand: carBrand,
        services: [8,10,15,18,19,20]
    },
    {
        id: 32,
        name: "MECHANIKA U ADRIANA",
        city: "Lublin",
        street: "Bukietowa",
        carBrand: carBrand,
        services: [8,10,15,18,19,20,21,23,25]
    },
    {
        id: 33,
        name: "ZAKŁAD MECHANIKI POJAZDOWEJ",
        city: "Lublin",
        street: "Aleja Solidarności",
        carBrand: [11,13,30],
        services: [0,1,2,3,8,10,15,18,19,20,21,23,25]
    },
    {
        id: 34,
        name: "Auto Remont FAFIK",
        city: "Lublin",
        street: "Nałęczowska",
        carBrand: [0,14,15,20,21,22,29,30],
        services: [8,9,10,15]
    },
    {
        id: 35,
        name: "Super Naprawy u Bogdana",
        city: "Lublin",
        street: "Zana",
        carBrand: carBrand,
        services: [8,9,10,15,22,23,24,25]
    },


]

