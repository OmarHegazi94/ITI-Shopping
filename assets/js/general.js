var localProducts = [];
var ls = window.localStorage;


$(document).ready(function () {
    var products = window.localStorage.getItem('products');
    if (products == null) {
        products = AllCat;
        ls.setItem('products', JSON.stringify(AllCat));
    } else {
        products = ls.getItem('products');
        products = JSON.parse(products);
    }/*already pushed into localStorage*/

    localProducts = products;


    displayNav();
    displayCartItemsCount();
});/*ready*/

function addOrder(orderItem) {
    var orderItems = window.localStorage.getItem('orderItems');
    orderItems = (orderItems == null) ? [] : JSON.parse(orderItems);
    orderItems.push(orderItem);
    orderItems.setItem('orderItems', orderItems);
}/*addOrder*/

function getProductByID(id) {
    for (var i = 0; i < localProducts.length; i++) {
        var ccp = localProducts[i].Products;
        for (var j = 0; j < ccp.length; j++) {
            if (parseInt(ccp[j].product_ID) == parseInt(id)) {
                return ccp[j];
            }
        }
    }/*for*/
    return {};
}/**/

function updateProductQ(id, q) {
    //console.log(ls);
    for (var i = 0; i < localProducts.length; i++) {
        var ccp = localProducts[i].Products;
        for (var j = 0; j < localProducts[i].Products.length; j++) {
            if (parseInt(localProducts[i].Products[j].product_ID) == parseInt(id)) {
                localProducts[i].Products[j].product_Stock -= q;
                console.log('Lowed to ' + localProducts[i].Products[j].product_Stock);
                displayCartItemsCount();
                break;
            }
        }
    }/*for*/
    ls.removeItem('products');
    ls.setItem('products', JSON.stringify(localProducts));
}/**/

function getOrder() {
    var orders = ls.getItem('order');
    return (orders == null) ? [] : JSON.parse(orders);
}/**/

function addToOrder(orderProduct) {
    var order = getOrder();
    order.push(orderProduct);
    ls.removeItem('order');
    ls.setItem('order', JSON.stringify(order));
}/**/

function drawCart() {
    for (var i = 0; i < orderItems.length; i++) {

    }/**/
}/*drawCart*/
