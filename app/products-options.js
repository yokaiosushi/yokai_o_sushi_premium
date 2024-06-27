const productEll = document.querySelector('.products-menu');
let productOptions = 'rolls';

productEll.addEventListener('change', (e) => {
    productOptions = productEll.value;
    _clearMainContentByID(MAIN_ELEMENT);

    if(productOptions === 'rolls') {
        addProductEllRolls (DB_APP_PRODUCTS);
    }else if(productOptions === 'sety') {
        addProductEllSets (DB_APP_PRODUCTS_SETS);
    }
});