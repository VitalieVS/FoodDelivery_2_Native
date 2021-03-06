$(document).ready(function () {
    let cartPrice = [];
    let cartCount = 0;
    let totalPriceItems = 0;
    $(function () {
        $(document).tooltip();
    });

    getLocal();

    $('.item-price').click(function () {
        let itemPrice = ($(this).attr("data-value") * 1);
        let id = ($(this).attr("id"));
        priceAdd(itemPrice);
        cartDisplay();
        addedConfirmation();
        setStorage(id, itemPrice);
    });

    function setStorage(id, item) {
        localStorage.setItem(id, item);
    }

    function incrementCartItems() {
        cartCount++;
    }

    function addedConfirmation() {
        console.log('Added to cart!'); //will rework in future.
    }

    function cartDisplay() {
        document.getElementById("cart-count").innerHTML = cartCount;
        document.getElementById("total-price").innerHTML = totalPriceItems;
    }

    function priceAdd(itemPrice) {
        cartPrice.push(itemPrice);
        cartSum();
        priceClear();
    }

    function priceClear() {
        cartPrice = [];
    }

    function cartSum() {
        cartPrice.forEach(totalPrice);
        incrementCartItems();
    }

    function totalPrice(item) {
        totalPriceItems += item;
    }

    function usaShow() {
        document.getElementById("rest-ul").children[1].style.display = "block";
        document.getElementById("rest-ul").children[2].style.display = "block";
        document.getElementById("rest-ul").children[3].style.display = "block";
        document.getElementById("rest-ul").children[4].style.display = "block";
    }

    function usaHide() {
        document.getElementById("rest-ul").children[1].style.display = "none";
        document.getElementById("rest-ul").children[2].style.display = "none";
        document.getElementById("rest-ul").children[3].style.display = "none";
        document.getElementById("rest-ul").children[4].style.display = "none";
    }

    $('.button-usa').click(function () {
        usaShow();
        belgiumHide();
    });

    $('.button-belgium').click(function () {
        usaHide();
        belgiumShow();
    });

    function belgiumShow() {
        document.getElementById("rest-ul").children[5].style.display = "block";
        document.getElementById("rest-ul").children[6].style.display = "block";
        document.getElementById("rest-ul").children[7].style.display = "block";
        document.getElementById("rest-ul").children[8].style.display = "block";
    }

    function belgiumHide() {
        document.getElementById("rest-ul").children[5].style.display = "none";
        document.getElementById("rest-ul").children[6].style.display = "none";
        document.getElementById("rest-ul").children[7].style.display = "none";
        document.getElementById("rest-ul").children[8].style.display = "none";
    }

    $('.new-a').click(function () {
        showNew();
    });

    function showNew() {
        document.getElementById("new-content").style.display = "block";
    }

    $('.close-icon').click(function () {
        hideNew();
    });

    function hideNew() {
        document.getElementById("new-content").style.display = "none";
    }

    function getLocal() {
        if (localStorage.length != 0) {
            cartStoreDisplay();
        }
    }

    function cartStoreDisplay() {
        document.getElementById("cart-count").innerHTML = localStorage.length;
    }

    //will rework whole code in future. Nonsense now.
});
