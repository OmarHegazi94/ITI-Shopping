
function displayProduct(p,b) {
    var x = `
    <div class="home">
			<div class="home_container my-5">
				<div class="home_background" style="background-image:url(assets/images/categories.jpg)"></div>
				<div class="home_content_container">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="home_content">
									<div class="itemname home_title">${b.Brand_Name}<span>.</span></div>
									<div class="home_text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies
											metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

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
                            <div class="itemname details_name">${p.product_Name}</div>

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



function displayNav() {
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

function displayCartItemsCount() {
    $('#cartItemsCount').text('(' + getOrder().length + ')');
}/*displayCart*/

function displayCart() {
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
    for (var i = 0; i < order.length; i++) {
        var co = order[i];
        var p = getProductByID(co.product_ID);
        var itemPrice = parseInt(co.stock) * parseFloat(p.product_Price);
        x += `
                <tr id="item" data-path="${i + 1}" >
                    <td class="">${i + 1}</td>
                    <td class="">${p.product_Name}</td>
                    <td class="">${co.stock}</td>
                    <td class="">${p.product_Price}</td>
                    <td class="">${itemPrice}</td>  
                    <td class=""><button data-path="${i + 1}" id="delete" class="btn btn-danger" onclick=deleterow();>Delete</button></td>                  
                </tr>
                `;
    }

    x += `</tbody>
            </table>`;
 
    $('#cartProducts').html(x);
    $('#cartProducts').find('table').DataTable();

    // $('#delete').click(function(e){
       
    //         //  if (e.target.data("path")== $('#item').data("path")){
    //             $('#item').remove();
    //          }
    // })




}/**/

function deleterow(){
    $('#item').remove();
}

    // $('#delete').click(function(e){
       
    //          if (e.target.data("path")== $('#item').data("path")){
    //             $('#item').remove();
    //          }
             
    // })




var login = `
    <div class="Account shopping_cart">
    <a href="login.html">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
            <path
                d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
        </svg>
        <div>Login</div>
    </a>
</div> `;
function displaylogin(){
    flag=  window.localStorage.getItem('flag');
			if(flag==null){
				
                $('.displaylogin').html(login);
            }
        }
        displaylogin();
            