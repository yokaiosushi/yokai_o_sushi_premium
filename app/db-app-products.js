const DB_APP_PRODUCTS = [  
    {
        product: {
            name: {
                ces: 'Susuwatari',
                eng: 'Susuwatari',
                ukr: "Сусуватарi",
                rus: 'Сусуватари'
            },
            id: '507',
            imgSrc: './assets/products-img/susuwatari-new.jpg',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    }
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'mango',
                        eng: 'mango',
                        ukr: 'манго',
                        rus: 'манго'
                    }
                },
                {
                    text: {
                        ces: 'úhoř',
                        eng: 'eel',
                        ukr: 'вугор',
                        rus: 'угорь'
                    }
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'sépiový inkoust',
                        eng: 'cuttlefish ink',
                        ukr: 'чорнило каракатиці',
                        rus: 'чернила каракатици'
                    },
                },
                {
                    text: {
                        ces: 'sýr  čedar',
                        eng: 'cheddar cheese',
                        ukr: 'сир чеддер',
                        rus: 'сыр чеддер'
                    },
                },
                {
                    text: {
                        ces: 'unagi omáčka',
                        eng: 'unagi sauce',
                        ukr: 'соус унагі',
                        rus: 'соус унаги'
                    }
                },
            ],
            weight: 290,
            price:{
                value: 350,
                currency: 'Kč'
            }

        }
    },{
        product: {
            name: {
                ces: 'California with eel',
                eng: 'Kalifornie s úhořem',
                ukr: "Каліфорнія з вугром",
                rus: 'Калифорния с угрем'
            },
            id: '512',
            imgSrc: './assets/products-img/kalifornia_ugor-new.jpg',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    }
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    }
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'úhoř',
                        eng: 'eel',
                        ukr: 'вугор',
                        rus: 'угорь'
                    }
                },
            ],
            weight: 310,
            price:{
                value: 420,
                currency: 'Kč'
            }

        }
    },{
        product: {
            name: {
                ces: 'Kalifornie s krevetami',
                eng: 'California with shrimp',
                ukr: "Каліфорнія з креветкою",
                rus: 'Калифорния с креветкой'
            },
            id: '511',
            imgSrc: './assets/products-img/kalifornia_krivetka-new.jpg',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    }
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'креветка',
                        rus: 'креветка'
                    }
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    }
                }
            ],
            weight: 310,
            price:{
                value: 370,
                currency: 'Kč'
            }

        }
    },{
        product: {
            name: {
                ces: 'Kalifornie s lososem',
                eng: 'California with salmon',
                ukr: "Каліфорнія з лососем",
                rus: 'Калифорния с лососем'
            },
            id: '510',
            imgSrc: './assets/products-img/kalifornia_losos-new.jpg',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    }
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'losos',
                        eng: 'salmon',
                        ukr: 'лосось',
                        rus: 'лосось'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    }
                }
            ],
            weight: 310,
            price:{
                value: 370,
                currency: 'Kč'
            }

        }
    },{
        product: {
            name: {
                ces: 'Gyūki',
                eng: 'Gyuki',
                ukr: "Г'юки",
                rus: 'Гьюки'
            },
            id: '506',
            imgSrc: './assets/products-img/gyuki.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    }
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    }
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'креветка',
                        rus: 'креветка'
                    }
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    }
                },
                {
                    text: {
                        ces: 'japonská hruška',
                        eng: 'japanese pear',
                        ukr: 'японська груша',
                        rus: 'японская груша'
                    }
                },
                {
                    text: {
                        ces: 'černý sezam',
                        eng: 'black sesame',
                        ukr: 'чорний кунжут',
                        rus: 'черный кунжут'
                    }
                },
            ],
            weight: 300,
            price:{
                value: 280,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Karasu Tengu',
                eng: 'Karasu Tengu',
                ukr: 'Карасу Тенгу',
                rus: 'Карасу Тэнгу'
            },
            id: '505',
            imgSrc: './assets/products-img/karasu-tengu.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'sépiový inkoust',
                        eng: 'cuttlefish ink',
                        ukr: 'чорнило каракатиці',
                        rus: 'чернила каракатици'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'smažený losos',
                        eng: 'fried salmon',
                        ukr: 'слайс лосося гриль',
                        rus: 'жареный лосось'
                    },
                },
                {
                    text: {
                        ces: 'elená cibule',
                        eng: 'green onion',
                        ukr: 'зелена цибуля',
                        rus: 'зеленый лук'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'bílý sezam',
                        eng: 'white sesame',
                        ukr: 'білий кунжут',
                        rus: 'белый кунжут'
                    }
                },
            ],
            weight: 310,
            price:{
                value: 270,
                currency: 'Kč'
            }

        }
    },  
    {
        product: {
            name: {
                ces: 'Kitsune',
                eng: 'Kitsune',
                ukr: 'Кіцуне',
                rus: 'Кицунэ'
            },
            id: '504',
            imgSrc: './assets/products-img/kitsune-new.jpg',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'grilovaný plátek lososa',
                        eng: 'grilled salmon slice',
                        ukr: 'слайс лосося гриль',
                        rus: 'слайс лосося гриль'
                    },
                },
                {
                    text: {
                        ces: 'tuňák',
                        eng: 'tuna',
                        ukr: 'тунець',
                        rus: 'тунец'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'unagi omáčka',
                        eng: 'unagi sauce',
                        ukr: 'соус унагі',
                        rus: 'соус унаги'
                    }
                },
            ],
            weight: 320,
            price:{
                value: 340,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Inugamie',
                eng: 'Inugamy',
                ukr: 'Инугамі',
                rus: 'Инугами'
            },
            id: '503',
            imgSrc: './assets/products-img/inugamy-new.jpg',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'grilovaný plátek tuňáka',
                        eng: 'grilled tuna slice',
                        ukr: 'слайси тунця гриль',
                        rus: 'слайсы тунца гриль'
                    },
                },
                {
                    text: {
                        ces: 'losos',
                        eng: 'salmon',
                        ukr: 'лосось',
                        rus: 'лосось'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'jemný tavený sýr',
                        eng: 'soft processed cheese',
                        ukr: 'плавлений сир',
                        rus: 'плавленный сыр'
                    },
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'unagi omáčka',
                        eng: 'unagi sauce',
                        ukr: 'соус унагі',
                        rus: 'соус унаги'
                    }
                },
            ],
            weight: 320,
            price:{
                value: 380,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Tomoe',
                eng: 'Tomoe',
                ukr: 'Томоє',
                rus: 'Томое'
            },
            id: '502',
            imgSrc: './assets/products-img/tomoe.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'sýr  čedar',
                        eng: 'cheddar cheese',
                        ukr: 'сир чеддер',
                        rus: 'сыр чеддер'
                    },
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'креветка',
                        rus: 'креветка'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'sýr mozzarella',
                        eng: 'mozzarella cheese',
                        ukr: 'сир моцарелла',
                        rus: 'сыр моцарелла'
                    }
                },
                {
                    text: {
                        ces: 'japonská hruška',
                        eng: 'japanese pear',
                        ukr: 'японська груша',
                        rus: 'японская груша'
                    }
                },
                {
                    text: {
                        ces: 'teriyaki omáčka',
                        eng: 'teriyaki sauce',
                        ukr: 'соус теріяки',
                        rus: 'соус терияки'
                    }
                },
                {
                    text: {
                        ces: 'parmazán',
                        eng: 'parmesan',
                        ukr: 'пармезан',
                        rus: 'пармезан'
                    }
                },
            ],
            weight: 290,
            price:{
                value: 280,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Okami Horo',
                eng: 'Okami Horo',
                ukr: 'Окамі Хоро',
                rus: 'Оками Хоро'
            },
            id: '501',
            imgSrc: './assets/products-img/okami-horo.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    }
                },
                {
                    text: {
                        ces: 'plátek lososa',
                        eng: 'salmon slice',
                        ukr: 'слайс лосося',
                        rus: 'слайс лосося'
                    }
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'креветка',
                        rus: 'креветка'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'sněžný krab',
                        ukr: 'сніжний краб',
                        rus: 'снежный краб'
                    },
                },
            ],
            weight: 360,
            price:{
                value: 370,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Philadelphia s lososem',
                eng: 'Philadelphia with salmon',
                ukr: 'Філадельфія з лососем',
                rus: 'Филадельфия с лососем'
            },
            id: '100',
            imgSrc: './assets/products-img/fila-salmon.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'plátek lososa',
                        eng: 'salmon slice',
                        ukr: 'слайс лосося',
                        rus: 'слайс лосося'
                    }
                }
            ],
            weight: 310,
            price:{
                value: 290,
                currency: 'Kč'
            }

        }
    },
    // {
    //     product: {
    //         name: {
    //             ces: 'Philadelphia s úhořem',
    //             eng: 'Philadelphia with marinated eel',
    //             ukr: 'Філадельфія з вуграм',
    //             rus: 'Филадельфия с угрем'
    //         },
    //         id: '200',
    //         imgSrc: './assets/products-img/fila-ugor.png',
    //         imgAlt: {
    //             ces: 'Fotografie rohlíků',
    //             eng: 'Photo rolse',
    //             ukr: 'Фото роллів',
    //             rus: 'Фото роллов'
    //         },
    //         ingredients: [
    //             {
    //                 text: {
    //                     ces: 'rýže',
    //                     eng: 'rice',
    //                     ukr: 'рис',
    //                     rus: 'рис'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'nori',
    //                     eng: 'nori',
    //                     ukr: 'норі',
    //                     rus: 'нори'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'tavený sýr',
    //                     eng: 'cream cheese',
    //                     ukr: 'вершковий сир',
    //                     rus: 'сливочный сыр'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'okurka',
    //                     eng: 'cucumber',
    //                     ukr: 'огірок',
    //                     rus: 'огурец'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'marinovaný plátek úhoře',
    //                     eng: 'marinated eel slice',
    //                     ukr: 'cлайси вугра',
    //                     rus: 'cлайсы угря'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'unagi omáčka',
    //                     eng: 'unagi sauce',
    //                     ukr: 'cоус унагі',
    //                     rus: 'соус унаги'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'sezam',
    //                     eng: 'sesame',
    //                     ukr: 'кунжут',
    //                     rus: 'кунжут'
    //                 }
    //             }
    //         ],
    //         weight: 310,
    //         price:{
    //             value: 350,
    //             currency: 'CZK'
    //         }

    //     }
    // },
    {
        product: {
            name: {
                ces: 'Philadelphia s krevetami',
                eng: 'Philadelphia with shrimp',
                ukr: 'Філадельфія з креветками',
                rus: 'Филадельфия с креветками'
            },
            id: '300',
            imgSrc: './assets/products-img/fila-krivetka.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'plátek krevety',
                        eng: 'shrimp slice',
                        ukr: 'слайси криветки',
                        rus: 'слайси криветки'
                    }
                }
            ],
            weight: 310,
            price:{
                value: 300,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Philadelphia s tuňákem',
                eng: 'Philadelphia with tuna',
                ukr: 'Філадельфія з тунцем',
                rus: 'Филадельфия с тунцом'
            },
            id: '400',
            imgSrc: './assets/products-img/fila-tuna.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    }
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    }
                },
                {
                    text: {
                        ces: 'plátky tuňáka',
                        eng: 'tuna slice',
                        ukr: 'слайси тунця',
                        rus: 'слайсы тунца'
                    }
                }
            ],
            weight: 310,
            price:{
                value: 300,
                currency: 'Kč'
            }

        }
    },
    // {
    //     product: {
    //         name: {
    //             ces: 'Kombinace Philadelphia',
    //             eng: 'Combo Philadelphia',
    //             ukr: 'Комбо Філадельфія',
    //             rus: 'Комбо Филадельфия'
    //         },
    //         id: '512',
    //         imgSrc: './assets/products-img/fila-kombo.png',
    //         imgAlt: {
    //             ces: 'Fotografie rohlíků',
    //             eng: 'Photo rolse',
    //             ukr: 'Фото роллів',
    //             rus: 'Фото роллов'
    //         },
    //         ingredients: [
    //             {
    //                 text: {
    //                     ces: 'rýže',
    //                     eng: 'rice',
    //                     ukr: 'рис',
    //                     rus: 'рис'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'nori',
    //                     eng: 'nori',
    //                     ukr: 'норі',
    //                     rus: 'нори'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'tavený sýr',
    //                     eng: 'cream cheese',
    //                     ukr: 'вершковий сир',
    //                     rus: 'сливочный сыр'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'okurka',
    //                     eng: 'cucumber',
    //                     ukr: 'огірок',
    //                     rus: 'огурец'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'marinovaný plátek úhoře',
    //                     eng: 'marinated eel slice',
    //                     ukr: 'cлайси вугра',
    //                     rus: 'cлайсы угря'
    //                 }
    //             },
    //             {
    //                 text: {
    //                     ces: 'plátek lososa',
    //                     eng: 'salmon slice',
    //                     ukr: 'слайс лосося',
    //                     rus: 'слайс лосося'
    //                 }
    //             }
    //         ],
    //         weight: 310,
    //         price:{
    //             value: 330,
    //             currency: 'CZK'
    //         }

    //     }
    // },
    {
        product: {
            name: {
                ces: 'Pečené krevety',
                eng: 'Baked shrimp',
                ukr: 'Запечені креветки',
                rus: 'Запеченные креветки'
            },
            id: '310',
            imgSrc: './assets/products-img/zapech-krivetka.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avocado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'криветка',
                        rus: 'криветка'
                    },
                },
                {
                    text: {
                        ces: 'sýrové čepice',
                        eng: 'cheese cap',
                        ukr: 'сирні шапочки',
                        rus: 'сырные шапочки'
                    },
                }
            ],
            weight: 310,
            price:{
                value: 280,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Pečené pikantní krevety',
                eng: 'Baked spicy shrimp',
                ukr: 'Запечена креветка спайсі',
                rus: 'Запеченная креветка спайси'
            },
            id: '320',
            imgSrc: './assets/products-img/zapech-krivetka-spasi.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'криветка',
                        rus: 'криветка'
                    },
                },
                {
                    text: {
                        ces: 'sýrové čepice',
                        eng: 'cheese cap',
                        ukr: 'сирні шапочки',
                        rus: 'сырные шапочки'
                    },
                },
                {
                    text: {
                        ces: 'pálivá omáčka',
                        eng: 'spicy sauce',
                        ukr: 'спайсі соус',
                        rus: 'спайси соус'
                    },
                }
            ],
            weight: 310,
            price:{
                value: 285,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Pečený losos',
                eng: 'Baked salmon',
                ukr: 'Запечений лосось',
                rus: 'Запеченный лосось'
            },
            id: '110',
            imgSrc: './assets/products-img/zapech-salmon.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avocado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                },
                {
                    text: {
                        ces: 'losos',
                        eng: 'salmon',
                        ukr: 'лосось',
                        rus: 'лосось'
                    },
                },
                {
                    text: {
                        ces: 'sýrové čepice',
                        eng: 'cheese cap',
                        ukr: 'сирні шапочки',
                        rus: 'сырные шапочки'
                    },
                },
            ],
            weight: 310,
            price:{
                value: 270,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Pečený pikantní losos',
                eng: 'Baked spicy salmon',
                ukr: 'Запечений лосось спайсі',
                rus: 'Запеченный лосось спайси'
            },
            id: '120',
            imgSrc: './assets/products-img/zapech-salmon-spasi.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avocado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                },
                {
                    text: {
                        ces: 'losos',
                        eng: 'salmon',
                        ukr: 'лосось',
                        rus: 'лосось'
                    },
                },
                {
                    text: {
                        ces: 'sýrové čepice',
                        eng: 'cheese cap',
                        ukr: 'сирні шапочки',
                        rus: 'сырные шапочки'
                    },
                },
                {
                    text: {
                        ces: 'pálivá omáčka',
                        eng: 'spicy sauce',
                        ukr: 'спайсі соус',
                        rus: 'спайси соус'
                    },
                }
            ],
            weight: 310,
            price:{
                value: 275,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Pečený tuňák',
                eng: 'Baked tuna',
                ukr: 'Запечений тунець',
                rus: 'Запеченный тунец'
            },
            id: '410',
            imgSrc: './assets/products-img/zapech-tuna.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'sezam',
                        eng: 'sesame',
                        ukr: 'кунжут',
                        rus: 'кунжут'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                },
                {
                    text: {
                        ces: 'tuňák',
                        eng: 'tuna',
                        ukr: 'тунець',
                        rus: 'тунец'
                    },
                },
                {
                    text: {
                        ces: 'sýrové čepice',
                        eng: 'cheese cap',
                        ukr: 'сирні шапочки',
                        rus: 'сырные шапочки'
                    },
                }
            ],
            weight: 310,
            price:{
                value: 280,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Pečený pikantní tuňák',
                eng: 'Baked spicy tuna',
                ukr: 'Запечений тунець спайсі',
                rus: 'Запеченный тунец спайси'
            },
            id: '420',
            imgSrc: './assets/products-img/zapech-tuna-spasi.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'sezam',
                        eng: 'sesame',
                        ukr: 'кунжут',
                        rus: 'кунжут'
                    },
                },
                {
                    text: {
                        ces: 'tavený sýr',
                        eng: 'cream cheese',
                        ukr: 'вершковий сир',
                        rus: 'сливочный сыр'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avocado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                },
                {
                    text: {
                        ces: 'tuňák',
                        eng: 'tuna',
                        ukr: 'тунець',
                        rus: 'тунец'
                    },
                },
                {
                    text: {
                        ces: 'sýrové čepice',
                        eng: 'cheese cap',
                        ukr: 'сирні шапочки',
                        rus: 'сырные шапочки'
                    },
                },
                {
                    text: {
                        ces: 'pálivá omáčka',
                        eng: 'spicy sauce',
                        ukr: 'спайсі соус',
                        rus: 'спайси соус'
                    },
                },
                {
                    text: {
                        ces: 'tobiko kaviár',
                        eng: 'tobiko caviar',
                        ukr: 'ікра тобіко',
                        rus: 'икра тобико'
                    },
                },
            ],
            weight: 310,
            price:{
                value: 285,
                currency: 'Kč'
            }

        }
    },
    // {
    //     product: {
    //         name: {
    //             ces: 'Pečený úhoř',
    //             eng: 'Baked eel',
    //             ukr: 'Запечений вугор',
    //             rus: 'Запеченный угорь'
    //         },
    //         id: '210',
    //         imgSrc: './assets/products-img/zapech-ugor.png',
    //         imgAlt: {
    //             ces: 'Fotografie rohlíků',
    //             eng: 'Photo rolse',
    //             ukr: 'Фото роллів',
    //             rus: 'Фото роллов'
    //         },
    //         ingredients: [
    //             {
    //                 text: {
    //                     ces: 'rýže',
    //                     eng: 'rice',
    //                     ukr: 'рис',
    //                     rus: 'рис'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'nori',
    //                     eng: 'nori',
    //                     ukr: 'норі',
    //                     rus: 'нори'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'úhoř',
    //                     eng: 'marinated eel',
    //                     ukr: 'вугор',
    //                     rus: 'угорь'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'tavený sýr',
    //                     eng: 'cream cheese',
    //                     ukr: 'вершковий сир',
    //                     rus: 'сливочный сыр'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'avokádo',
    //                     eng: 'avocado',
    //                     ukr: 'авокадо',
    //                     rus: 'авокадо'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'sezam',
    //                     eng: 'sesame',
    //                     ukr: 'кунжут',
    //                     rus: 'кунжут'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'sýrové čepice',
    //                     eng: 'cheese cap',
    //                     ukr: 'сирні шапочки',
    //                     rus: 'сырные шапочки'
    //                 },
    //             }
    //         ],
    //         weight: 310,
    //         price:{
    //             value: 290,
    //             currency: 'CZK'
    //         }

    //     }
    // },
    // {
    //     product: {
    //         name: {
    //             ces: 'Pečený pikantní úhoř',
    //             eng: 'Baked spicy eel',
    //             ukr: 'Запечений вугор спайсі',
    //             rus: 'Запеченый угорь спайси'
    //         },
    //         id: '220',
    //         imgSrc: './assets/products-img/zapech-ugor-spasi.png',
    //         imgAlt: {
    //             ces: 'Fotografie rohlíků',
    //             eng: 'Photo rolse',
    //             ukr: 'Фото роллів',
    //             rus: 'Фото роллов'
    //         },
    //         ingredients: [
    //             {
    //                 text: {
    //                     ces: 'rýže',
    //                     eng: 'rice',
    //                     ukr: 'рис',
    //                     rus: 'рис'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'nori',
    //                     eng: 'nori',
    //                     ukr: 'норі',
    //                     rus: 'нори'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'úhoř',
    //                     eng: 'marinated eel',
    //                     ukr: 'вугор',
    //                     rus: 'угорь'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'tavený sýr',
    //                     eng: 'cream cheese',
    //                     ukr: 'вершковий сир',
    //                     rus: 'сливочный сыр'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'avokádo',
    //                     eng: 'avocado',
    //                     ukr: 'авокадо',
    //                     rus: 'авокадо'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'sezam',
    //                     eng: 'sesame',
    //                     ukr: 'кунжут',
    //                     rus: 'кунжут'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'sýrové čepice',
    //                     eng: 'cheese cap',
    //                     ukr: 'сирні шапочки',
    //                     rus: 'сырные шапочки'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'pálivá omáčka',
    //                     eng: 'spicy sauce',
    //                     ukr: 'спайсі соус',
    //                     rus: 'спайси соус'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'tobiko kaviár',
    //                     eng: 'tobiko caviar',
    //                     ukr: 'ікра тобіко',
    //                     rus: 'икра тобико'
    //                 },
    //             },
    //         ],
    //         weight: 310,
    //         price:{
    //             value: 295,
    //             currency: 'CZK'
    //         }

    //     }
    // },
    {
        product: {
            name: {
                ces: 'Maki losos',
                eng: 'Maki salmon',
                ukr: 'Маки лосось',
                rus: 'Макі лосось'
            },
            id: '610',
            imgSrc: './assets/products-img/maki-salmon.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'losos',
                        eng: 'salmon',
                        ukr: 'лосось',
                        rus: 'лосось'
                    },
                }
            ],
            weight: 120,
            price:{
                value: 130,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Maki avokádo',
                eng: 'Maki avokado',
                ukr: 'Макі авокадо',
                rus: 'Маки авокадо'
            },
            id: '650',
            imgSrc: './assets/products-img/maki-avokado.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'avokádo',
                        eng: 'avokado',
                        ukr: 'авокадо',
                        rus: 'авокадо'
                    },
                }
            ],
            weight: 120,
            price:{
                value: 120,
                currency: 'Kč'
            }

        }
    },
    // {
    //     product: {
    //         name: {
    //             ces: 'Maki úhoř',
    //             eng: 'Maki ell',
    //             ukr: 'Макі вугор',
    //             rus: 'Маки угорь'
    //         },
    //         id: '620',
    //         imgSrc: './assets/products-img/maki-ugor.png',
    //         imgAlt: {
    //             ces: 'Fotografie rohlíků',
    //             eng: 'Photo rolse',
    //             ukr: 'Фото роллів',
    //             rus: 'Фото роллов'
    //         },
    //         ingredients: [
    //             {
    //                 text: {
    //                     ces: 'rýže',
    //                     eng: 'rice',
    //                     ukr: 'рис',
    //                     rus: 'рис'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'nori',
    //                     eng: 'nori',
    //                     ukr: 'норі',
    //                     rus: 'нори'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'úhoř',
    //                     eng: 'marinated eel',
    //                     ukr: 'вугор',
    //                     rus: 'угорь'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'unagi omáčka',
    //                     eng: 'unagi sauce',
    //                     ukr: 'cоус унагі',
    //                     rus: 'соус унаги'
    //                 },
    //             },
    //             {
    //                 text: {
    //                     ces: 'sezam',
    //                     eng: 'sesame',
    //                     ukr: 'кунжут',
    //                     rus: 'кунжут'
    //                 },
    //             }
    //         ],
    //         weight: 120,
    //         price:{
    //             value: 140,
    //             currency: 'CZK'
    //         }

    //     }
    // },
    {
        product: {
            name: {
                ces: 'Maki krevety',
                eng: 'Maki shrimp',
                ukr: 'Макі креветка',
                rus: 'Маки креветка'
            },
            id: '630',
            imgSrc: './assets/products-img/maki-krivetka.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'krevety',
                        eng: 'shrimp',
                        ukr: 'креветка',
                        rus: 'креветка'
                    },
                }
            ],
            weight: 120,
            price:{
                value: 130,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Maki tuňák',
                eng: 'Maki tuna',
                ukr: 'Макі тунець',
                rus: 'Маки тунец'
            },
            id: '640',
            imgSrc: './assets/products-img/maki-tuna.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'tuňák',
                        eng: 'tuna',
                        ukr: 'тунець',
                        rus: 'тунец'
                    },
                }
            ],
            weight: 120,
            price:{
                value: 130,
                currency: 'Kč'
            }

        }
    },
    {
        product: {
            name: {
                ces: 'Maki okurka',
                eng: 'Maki cucumber',
                ukr: 'Макі огірок',
                rus: 'Маки огурец'
            },
            id: '660',
            imgSrc: './assets/products-img/maki-cucumber.png',
            imgAlt: {
                ces: 'Fotografie rohlíků',
                eng: 'Photo rolse',
                ukr: 'Фото роллів',
                rus: 'Фото роллов'
            },
            ingredients: [
                {
                    text: {
                        ces: 'rýže',
                        eng: 'rice',
                        ukr: 'рис',
                        rus: 'рис'
                    },
                },
                {
                    text: {
                        ces: 'nori',
                        eng: 'nori',
                        ukr: 'норі',
                        rus: 'нори'
                    },
                },
                {
                    text: {
                        ces: 'okurka',
                        eng: 'cucumber',
                        ukr: 'огірок',
                        rus: 'огурец'
                    },
                },
                {
                    text: {
                        ces: 'sezam',
                        eng: 'sesame',
                        ukr: 'кунжут',
                        rus: 'кунжут'
                    },
                }
            ],
            weight: 120,
            price:{
                value: 110,
                currency: 'Kč'
            }

        }
    },
]
