langEl.addEventListener('change', (e) => {
    trueLang = langEl.value;
    _changeProductCardLang(trueLang, DB_APP_PRODUCTS, productOptions, DB_APP_PRODUCTS_SETS);
});