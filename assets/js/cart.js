/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Search
4. Init Menu
5. Init Quantity


******************************/

// $(document).ready(function () {
// 	"use strict";

// 	/* 

// 	1. Vars and Inits

// 	*/

// 	var header = $('.header');
// 	var hambActive = false;
// 	var menuActive = false;

// 	setHeader();

// 	$(window).on('resize', function () {
// 		setHeader();
// 	});

// 	$(document).on('scroll', function () {
// 		setHeader();
// 	});

// 	initSearch();
// 	initMenu();
// 	initQuantity();

// 	/* 

// 	2. Set Header

// 	*/

// 	function setHeader() {
// 		if ($(window).scrollTop() > 100) {
// 			header.addClass('scrolled');
// 		}
// 		else {
// 			header.removeClass('scrolled');
// 		}
// 	}

// 	/* 

// 	3. Init Search

// 	*/

// 	function initSearch() {
// 		if ($('.search').length && $('.search_panel').length) {
// 			var search = $('.search');
// 			var panel = $('.search_panel');

// 			search.on('click', function () {
// 				panel.toggleClass('active');
// 			});
// 		}
// 	}

// 	/* 

// 	4. Init Menu

// 	*/

// 	function initMenu() {
// 		if ($('.hamburger').length) {
// 			var hamb = $('.hamburger');

// 			hamb.on('click', function (event) {
// 				event.stopPropagation();

// 				if (!menuActive) {
// 					openMenu();

// 					$(document).one('click', function cls(e) {
// 						if ($(e.target).hasClass('menu_mm')) {
// 							$(document).one('click', cls);
// 						}
// 						else {
// 							closeMenu();
// 						}
// 					});
// 				}
// 				else {
// 					$('.menu').removeClass('active');
// 					menuActive = false;
// 				}
// 			});

// 			//Handle page menu
// 			if ($('.page_menu_item').length) {
// 				var items = $('.page_menu_item');
// 				items.each(function () {
// 					var item = $(this);

// 					item.on('click', function (evt) {
// 						if (item.hasClass('has-children')) {
// 							evt.preventDefault();
// 							evt.stopPropagation();
// 							var subItem = item.find('> ul');
// 							if (subItem.hasClass('active')) {
// 								subItem.toggleClass('active');
// 								TweenMax.to(subItem, 0.3, { height: 0 });
// 							}
// 							else {
// 								subItem.toggleClass('active');
// 								TweenMax.set(subItem, { height: "auto" });
// 								TweenMax.from(subItem, 0.3, { height: 0 });
// 							}
// 						}
// 						else {
// 							evt.stopPropagation();
// 						}
// 					});
// 				});
// 			}
// 		}
// 	}

// 	function openMenu() {
// 		var fs = $('.menu');
// 		fs.addClass('active');
// 		hambActive = true;
// 		menuActive = true;
// 	}

// 	function closeMenu() {
// 		var fs = $('.menu');
// 		fs.removeClass('active');
// 		hambActive = false;
// 		menuActive = false;
// 	}

// 	/* 

// 	5. Init Quantity

// 	*/

// 	function initQuantity() {
// 		// Handle product quantity input
// 		if ($('.product_quantity').length) {
// 			var input = $('#quantity_input');
// 			var incButton = $('#quantity_inc_button');
// 			var decButton = $('#quantity_dec_button');

// 			var originalVal;
// 			var endVal;

// 			incButton.on('click', function () {
// 				originalVal = input.val();
// 				endVal = parseFloat(originalVal) + 1;
// 				input.val(endVal);
// 			});

// 			decButton.on('click', function () {
// 				originalVal = input.val();
// 				if (originalVal > 0) {
// 					endVal = parseFloat(originalVal) - 1;
// 					input.val(endVal);
// 				}
// 			});
// 		}
// 	}

// });





// new cart code



// var taxRate = 0.05;
// var shippingRate = 15.00; 
// var fadeTime = 300;


// /* Assign actions */
// $('.product-quantity input').change( function() {
//   updateQuantity(this);
// });

// $('.product-removal button').click( function() {
//   removeItem(this);
// });


// /* Recalculate cart */
// function recalculateCart()
// {
//   var subtotal = 0;
  
  /* Sum up row totals */
  // $('.product').each(function () {
  //   subtotal += parseInt($(this).children('.total').text());
  // });
  
  /* Calculate totals */
//   var tax = subtotal * taxRate;
//   var shipping = (subtotal > 0 ? shippingRate : 0);
  // var total = subtotal;
  
  /* Update totals display */
  // $('.totals-value').fadeOut(fadeTime, function() {
    // $('#cart-subtotal').html(subtotal.toFixed(2));
    // $('#cart-tax').html(tax.toFixed(2));
    // $('#cart-shipping').html(shipping.toFixed(2));
//     $('#cart-total').html(total.toFixed(2));
//     if(total == 0){
//       $('.checkout').fadeOut(fadeTime);
//     }else{
//       $('.checkout').fadeIn(fadeTime);
//     }
//     $('.totals-value').fadeIn(fadeTime);
//   });
// }



/* Update quantity */
// function updateQuantity(quantityInput)
// {
  /* Calculate line price */
  // var productRow = $(quantityInput);
  // var price = parseInt(productRow.children('.product-price').text());
  // var quantity = $(quantityInput).val();
  // var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
//   productRow.children('.product-line-price').each(function () {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });  
// }


/* Remove item from cart */
// function removeItem(removeButton)
// {
  /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//   });
// }












$(document).ready(function(){
  displayCart();
  
  $('body').delegate('#checkout-btn','click',function(e){
    e.preventDefault();
    ls.removeItem('order');
    var email = 'a@b.com';
    var subject = '';//msg title
    var body_message = 'new order arrived!';
    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;
    window.open(mailto_link);
  });/*del*/



});/*ready*/