const langEl = document.querySelector('.lang-options');
let trueLang = 'ces';

langEl.addEventListener('change', (e) => {
    trueLang = langEl.value;
    _changeProductCardLang(trueLang, DB_APP_PRODUCTS);
});


function _changeProductCardLang(trueLang, DB_APP_PRODUCTS) {
    let homePageMainText =  {
        // menu: {
        //     ces: 'menu',
        //     eng: 'menu',
        //     ukr: 'меню',
        //     rus: 'меню'
        // },
        contacts: {
            ces: 'Naše kontakty',
            eng: 'Our contacts',
            ukr: 'Наші контакти',
            rus: 'Наши контакти'
        },
        productId: {
            ces: 'ID produktu: ',
            eng: 'Product ID: ',
            ukr: 'ID Продукта: ',
            rus: 'ID Продукта: '
        },
        productCompoundTextFirst: {
            ces: 'Sloučenina: ',
            eng: 'Compound: ',
            ukr: 'Складові: ',
            rus: 'Ингридиенты: '
        },
        totalWeight: {
            ces: 'Celková váha: ',
            eng: 'Total weight: ',
            ukr: 'Вага ролла: ',
            rus: 'Вес ролла: '
        },
        totalWeightGram: {
            ces: ' g.',
            eng: ' g.',
            ukr: ' г.',
            rus: ' г.'
        },
        price: {
            ces: 'Cena: ',
            eng: 'Price: ',
            ukr: 'Ціна: ',
            rus: 'Цена: '
        }
    };

    // document.querySelector('.header-title').innerText = homePageMainText.menu[trueLang];
    document.querySelector('.contacts-title').innerText = homePageMainText.contacts[trueLang];

    DB_APP_PRODUCTS.forEach(elementProduct => {
        let cardProductID = `#id${elementProduct.product.id}`;
        let productIngredientsText = homePageMainText.productCompoundTextFirst[trueLang];
        let ingredientsIndex = elementProduct.product.ingredients.length;

        elementProduct.product.ingredients.forEach((element, index) =>{
            if (index !== ingredientsIndex - 1) {
                productIngredientsText += (element.text[trueLang] + ', ');
            }else{
                productIngredientsText += (element.text[trueLang] + '.');
            };
        });
        document.querySelector(`${cardProductID}>.product-name`).innerText = elementProduct.product.name[trueLang];
        document.querySelector(`${cardProductID}>.product-compound>.product-compound-text`).innerText = productIngredientsText;
        document.querySelector(`${cardProductID}>.product-total-weight`).innerText = homePageMainText.totalWeight[trueLang] + elementProduct.product.weight + homePageMainText.totalWeightGram[trueLang];
        document.querySelector(`${cardProductID}>.product-id`).innerText = homePageMainText.productId[trueLang] + elementProduct.product.id;
        console.log(homePageMainText.productId[trueLang])
        document.querySelector(`${cardProductID}>.product-price`).innerText = 
        homePageMainText.price[trueLang] + elementProduct.product.price.value + ' ' + elementProduct.product.price.currency + '.';
    })
};