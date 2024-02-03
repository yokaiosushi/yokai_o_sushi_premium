const MAIN_ELEMENT = document.querySelector('.main-content');

DB_APP_PRODUCTS.forEach((productEl)=>{
    let productCardIngredientsText = '';
    let ingredientsIndex = productEl.product.ingredients.length;

    productEl.product.ingredients.forEach((element, index) =>{
        if (index !== ingredientsIndex - 1) {
            productCardIngredientsText += (element.text.ces + ', ');
        }else{
            productCardIngredientsText += (element.text.ces + '.');
        };
    });

    let productCard = `
        <div id="id${productEl.product.id}" class="product-card">
            <img class="product-img" src="${productEl.product.imgSrc}" alt="${productEl.product.imgAlt.ces}">
            <h2 class="product-name">${productEl.product.name.ces}</h2>
            <h3 class="product-id">Product ID: ${productEl.product.id}</h3>
            <div class="product-compound">
                <p  class="product-compound-text">Sloučenina: ${productCardIngredientsText}</p>
            </div>
            <span class="product-total-weight">Total weight: ${productEl.product.weight} g.</span>
            <span class="product-price">Price: ${productEl.product.price.value} ${productEl.product.price.currency}.</span>
        </div>
    `;

    MAIN_ELEMENT.insertAdjacentHTML('beforeend', productCard);
});