
$(document).ready(function(){
    
            $('body').delegate('.pLink','click',function(e){
                e.preventDefault();
                var x = $(this);
                var pID = parseInt(x.data('id'));
                window.localStorage.setItem('theID',pID);
                window.location.href='product.html';
                // alert(pID);
            });/*pLink.click*/
            
          	
        var pID = parseInt(window.localStorage.getItem('theID'));
        let currentProduct = {};

        var relatedproducts=[];
        for (let j = 0; j < localProducts.length; j++) {
            for (let n = 0; n < localProducts[j].Products.length; n++) {
                if (pID == localProducts[j].Products[n].product_ID) {
                    currentProduct = localProducts[j].Products[n];
                    relatedproducts =localProducts[j]; 
                    break;
                }/*was found*/
            }/*inner for*/
        }/*outer for*/


        
        displayProduct(currentProduct);
        window.localStorage.setItem(pID, JSON.stringify(currentProduct));
        clickedproduct = JSON.parse(localStorage.getItem(pID));
        // localStorage.setItem('user', JSON.stringify(user));



        $('body').delegate('#addToCart','click',function(e){
            e.preventDefault();
            var q = parseInt($('#quantity_input').val());
            var pID = parseInt(currentProduct.product_ID);

            var p = getProductByID(pID);
            if(q>p.product_Stock){
                alert('Max quantity is: '+p.product_Stock);
            }else{
                var newOrderItem = {product_ID:currentProduct.product_ID,stock:q};
                addToOrder(newOrderItem);
                updateProductQ(pID,q);
                currentProduct = getProductByID(pID);
                displayProduct(currentProduct);
                console.log(getOrder());
            }/**/
        });/*click*/
        
    });/*ready*/

