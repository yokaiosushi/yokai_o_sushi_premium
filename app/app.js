const MAIN_ELEMENT = document.querySelector('.main-content');

const langEl = document.querySelector('.lang-options');
let trueLang = 'ces';
let mainText = {
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
    totalWeightSet: {
        ces: 'Celková váha setu: ',
        eng: 'Total weight sets: ',
        ukr: 'Вага сета: ',
        rus: 'Вес сэта: '
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
}

function _clearMainContentByID (MAIN_ELEMENT) {
    [...arrMainEll] = MAIN_ELEMENT.children;
    arrMainEll.forEach(element => {
        document.querySelector(`#${element.id}`).remove()
    });
}

function addProductEllRolls (DB_APP_PRODUCTS) {
    DB_APP_PRODUCTS.forEach((productEl)=>{
        let productCardIngredientsText = '';
        let ingredientsIndex = productEl.product.ingredients.length;
    
        productEl.product.ingredients.forEach((element, index) =>{
            if (index !== ingredientsIndex - 1) {
                productCardIngredientsText += (element.text[`${trueLang}`] + ', ');
            }else{
                productCardIngredientsText += (element.text[`${trueLang}`] + '.');
            };
        });
    
        let productCard = `
            <div id="id${productEl.product.id}" class="product-card">
                <img class="product-img" src="${productEl.product.imgSrc}" alt="${productEl.product.imgAlt[`${trueLang}`]}">
                <h2 class="product-name">${productEl.product.name[`${trueLang}`]}</h2>
                <h3 class="product-id">${mainText.productId[`${trueLang}`]} ${productEl.product.id}</h3>
                <div class="product-compound">
                    <p  class="product-compound-text">${mainText.productCompoundTextFirst[`${trueLang}`]} ${productCardIngredientsText}</p>
                </div>
                <span class="product-total-weight">${mainText.totalWeight[`${trueLang}`]} ${productEl.product.weight} g.</span>
                <span class="product-price">${mainText.price[`${trueLang}`]} ${productEl.product.price.value} ${productEl.product.price.currency}.</span>
            </div>
        `;
    
        MAIN_ELEMENT.insertAdjacentHTML('beforeend', productCard);
    });
};

function addProductEllSets (DB_APP_PRODUCTS_SETS) {
    DB_APP_PRODUCTS_SETS.forEach((productEl) => {
        let productCardsetsValue = '';

        let ingredientsIndex = productEl.product.setsValue.length;
    
        productEl.product.setsValue.forEach((element, index) =>{
            if (index !== ingredientsIndex - 1) {
                productCardsetsValue += (element.text[`${trueLang}`] + ', ');
            }else{
                productCardsetsValue += (element.text[`${trueLang}`] + '.');
            };
        });
        
        let productCard = `
            <div id="id${productEl.product.id}" class="product-card">
                <img class="product-img" src="${productEl.product.imgSrc}" alt="${productEl.product.imgAlt[`${trueLang}`]}">
                <h2 class="product-name">${productEl.product.name[`${trueLang}`]}</h2>
                <h3 class="product-id">${mainText.productId[`${trueLang}`]} ${productEl.product.id}</h3>
                <div class="product-compound">
                    <p  class="product-compound-text">${mainText.productCompoundTextFirst[`${trueLang}`]} ${productCardsetsValue}</p>
                </div>
                <span class="product-persone">${productEl.product.persone.text[`${trueLang}`]}</span>
                <span class="product-total-weight">${mainText.totalWeightSet[`${trueLang}`]} ${productEl.product.weight} g.</span>
                <span class="product-price">${mainText.price[`${trueLang}`]} ${productEl.product.price.value} ${productEl.product.price.currency}.</span>
            </div>
        `;
    
        MAIN_ELEMENT.insertAdjacentHTML('beforeend', productCard);
        // console.log(productCardsetsValue)
    })
};

function _changeProductCardLang(trueLang, DB_APP_PRODUCTS, productOptions, DB_APP_PRODUCTS_SETS) {
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
        totalWeightSet: {
            ces: 'Celková váha setu: ',
            eng: 'Total weight sets: ',
            ukr: 'Вага сета: ',
            rus: 'Вес сэта: '
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

    if (productOptions === 'rolls') {
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
            // console.log(homePageMainText.productId[trueLang])
            document.querySelector(`${cardProductID}>.product-price`).innerText = 
            homePageMainText.price[trueLang] + elementProduct.product.price.value + ' ' + elementProduct.product.price.currency + '.';
        })
    } else if (productOptions === 'sety') {

        DB_APP_PRODUCTS_SETS.forEach(elementProduct => {
            let cardProductID = `#id${elementProduct.product.id}`;
            let productsetsValueText = homePageMainText.productCompoundTextFirst[trueLang];
            let setsValueIndex = elementProduct.product.setsValue.length;

            elementProduct.product.setsValue.forEach((element, index) =>{
                if (index !== setsValueIndex - 1) {
                    productsetsValueText += (element.text[trueLang] + ', ');
                }else{
                    productsetsValueText += (element.text[trueLang] + '.');
                };
            });


            document.querySelector(`${cardProductID}>.product-name`).innerText = elementProduct.product.name[trueLang];
            document.querySelector(`${cardProductID}>.product-compound>.product-compound-text`).innerText = productsetsValueText;
            document.querySelector(`${cardProductID}>.product-total-weight`).innerText = homePageMainText.totalWeightSet[trueLang] + elementProduct.product.weight + homePageMainText.totalWeightGram[trueLang];
            document.querySelector(`${cardProductID}>.product-id`).innerText = homePageMainText.productId[trueLang] + elementProduct.product.id;
            // console.log(homePageMainText.productId[trueLang])
            document.querySelector(`${cardProductID}>.product-persone`).innerText = elementProduct.product.persone.text[`${trueLang}`];
            document.querySelector(`${cardProductID}>.product-price`).innerText = 
            homePageMainText.price[trueLang] + elementProduct.product.price.value + ' ' + elementProduct.product.price.currency + '.';

        })
    }

};


addProductEllRolls (DB_APP_PRODUCTS);


