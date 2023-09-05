import {items} from '/scripts/products.js';

let itemsHTML = '';

items.forEach((item) => {
    let dealHTML;
    let extraDiscountHTML;

    if(item.ltd){
        dealHTML = `<div class="limited-deal">
            <div class="deal">Limited time deal</div>
        </div>`;
    }else if(item.dod){
        dealHTML = `<div class="limited-deal">
            <div class="deal">Deal of the Day</div>
        </div>`;
    }else{ dealHTML = ""}

    if(item.ed){
        extraDiscountHTML = `<div class="extra-discount">Buy 2 items, get 5% off</div>`;
    }else{extraDiscountHTML = ""}

    itemsHTML += `<div class="grid-items">
    <div class="item-image">
        <img src="${item.image}" alt="watch image" height="276px" width="276px" class="watch">
    </div>
    <div class="product-details">
        <div class="product-des">
            <a href="product-view.html" class="des">${item.name}</a>
        </div>
        <div class="rating">
            <span class="stars-count">${((item.rating) /10).toFixed(1)}</span>
            <i class="stars"></i>
            <i class="fa-solid fa-chevron-down arrow-down"></i>
        </div>
        ${dealHTML}
        <div class="price">
            <div class="amount"><sup class="rs">₹</sup>${(item.price).toLocaleString("en-IN")}</div>
            <label class="mrp">M.R.P:</label>
            <label class="mrp-price">₹${(item.mrp).toLocaleString("en-IN")}</label>
            <span></span>
            <label class="off">(${item.discount}% off)</label>
        </div>
        ${extraDiscountHTML}
        <div class="delivery">
            <i class="prime"></i>
            <label class="get-it-by">Get it by</label>
            <label class="date">Tomorrow, 9 July</label>
            <label class="free-delivery">FREE Delivery by Amazon</label>
        </div>
    </div>
</div>`
});

document.querySelector('.result-grid').innerHTML = itemsHTML + itemsHTML;