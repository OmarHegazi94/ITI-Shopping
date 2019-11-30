
    function displayProduct(p){
        var x = `
                    <div class="row details_row">

                    <!-- Product Image -->
                    <div class="col-lg-6" id="clicked">
                        <div class="details_image">
                            <div class=" details_image_large"><img class="itemimg" src="${p.product_Img}" alt="">

                            </div>

                        </div>
                    </div>

                    <!-- Product Content -->
                    <div class="col-lg-6">
                        <div class="details_content">
                            <div class="itemname details_name"></div>

                            <div class="itemprice details_price">${p.product_Price} $</div>

                            <!-- In Stock -->
                            <div class="in_stock_container">
                                <div class="itemstock availability"> Availability: ${p.product_Stock}</div>
                            </div>
                            <div class="details_text">
                                <p>${p.product_Description}</p>
                            </div>

                            <!-- Product Quantity -->
                            <div class="product_quantity_container">
                                <div class="product_quantity clearfix">
                                    <span>Qty</span>
                                    <input id="quantity_input" type="text" pattern="[0-9]*" value="1">
                                    <div class="quantity_buttons">
                                        <div id="quantity_inc_button" class="quantity_inc quantity_control"><i
                                                class="fa fa-chevron-up" aria-hidden="true"></i></div>
                                        <div id="quantity_dec_button" class="quantity_dec quantity_control"><i
                                                class="fa fa-chevron-down" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                                <div class="button cart_button" id='addToCart'><a href="#">Add to cart</a></div>
                            </div>

                            <!-- Share -->
                            <div class="details_share">
                                <span>Share:</span>
                                <ul>
                                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row description_row">
                    <div class="col">
                        <div class="description_title_container">
                            <div class="description_title">Description</div>                            
                        </div>
                        <div class="description_text">
                            <p>${p.product_Description}</p>
                        </div>
                    </div>
                </div>
        
        `;
        $('#pp').html(x);
    }/*displayProduct*/



    function displayNav(){
        var x = `            
            <ul>
                <li class="active">
                    <a href="index.html">Home</a>                    
                </li>
                <li class="nav-item">
                    <a href="categories.html">Categories</a>
                  
                </li>                
                <li><a href="about.html">About us</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        `;
        $('#mainNav').html(x);
    }/*displayNav*/

    function displayCartItemsCount(){
        $('#cartItemsCount').text('('+getOrder().length+')');
    }/*displayCart*/

    function displayCart(){
        var order = getOrder();
        var x = `
            <table id="example" class="display table table-striped table-hover table-responsive" style="width:100%">
                <thead>
                    <tr>
                        <th>Series</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total price</th>                        
                    </tr>
                </thead>
                <tbody>
                `;
            for(var i=0;i<order.length;i++){
                var co = order[i];
                var p = getProductByID(co.product_ID);
                var itemPrice = parseInt(co.stock) * parseFloat(p.product_Price);
                x += `
                <tr>
                    <td>${i+1}</td>
                    <td>${p.product_Name}</td>
                    <td>${co.stock}</td>
                    <td>${p.product_Price}</td>
                    <td>${itemPrice}</td>                    
                </tr>
                
                `;
            }
                    
        x+= `</tbody>
            </table>`;
            console.log(x);
        $('#cartProducts').html(x);
        $('#cartProducts').find('table').DataTable();
    }/**/