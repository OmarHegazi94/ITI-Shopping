window.addEventListener('load', function () {


	// Display items based on price from input range slider
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");


	output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function () {
		output.innerHTML = slider.value;
		console.log(slider.value);
	};

	let itemPrice = 0;

	var OutStockHTML = '';
	var InStockHTML = '';
	var allProducts = '';

	for (let i = 0; i < AllCat.length; i++) {


		// Display Brands Names on Filter by Brand Sidebar
		let BrandNames = `
						<li>
							<input class="filter" type="checkbox" id="checkbox${i}">
							<label class="checkbox-label" for="checkbox${i}">${AllCat[i].Brand_Name}</label>
						</li>
						`;

		$('#catNames').append(BrandNames);


		// Inner loop
		for (let x = 0; x < AllCat[i].Products.length; x++) {

			// $('.checkbox-label').click(function (event) {
			// 	if (event.target.innerHTML === AllCat[i].Brand_Name) {
			// 		$('#allProducts').children().remove();
			// 		$('#allProducts').append(AllCat[i].Products[x]);
			// 	}
			// });

			// Stock Filter
			let itemStockCount = AllCat[i].Products[x].product_Stock;

			if (itemPrice <= AllCat[i].Products[x].product_Price) {
				
				// In Stock Filter
				if (itemStockCount > 0) {


					InStockHTML += `
										<div class="col-md-4">
											<a href="./product.html" data-id='${AllCat[i].Products[x].product_ID}' class='pLink'>
									`
					InStockHTML += `
									<div class="card">
										<img src="${AllCat[i].Products[x].product_Img}" class="card-img-top" alt="${AllCat[i].Products[x].product_ImgAlt}">
										<div class="card-body">
											<h5 class="card-title"> ${AllCat[i].Products[x].product_Name} </h5>
								`

					InStockHTML += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[i].Products[x].product_Stock}</p>`

					InStockHTML += `<p class="card-text current-price">${AllCat[i].Products[x].product_Price}$</p>
												</div>
											</div>
										</a>
								</div>`
				}

				// Out Of stock filter
				else if (itemStockCount == 0) {

					OutStockHTML += `
										<div class="col-md-4">
											<a >
									`
					OutStockHTML += `
									<div class="card">
										<img src="${AllCat[i].Products[x].product_Img}" class="card-img-top" alt="${AllCat[i].Products[x].product_ImgAlt}">
										<div class="card-body">
											<h5 class="card-title"> ${AllCat[i].Products[x].product_Name} </h5>
								`

					OutStockHTML += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[i].Products[x].product_Stock}</p>`

					OutStockHTML += `<p class="card-text current-price">${AllCat[i].Products[x].product_Price}$</p>
												</div>
											</div>
										</a>
								</div>`
				}



				allProducts += `
				<div class="col-md-4">
			`

				if (itemStockCount == 0) {
					allProducts += `<a >`
				}

				else if (itemStockCount > 0) {
					allProducts += `<a href="./product.html" data-id='${AllCat[i].Products[x].product_ID}' class='pLink'>`
				}

				allProducts +=
					`
					<div class="card">
						<img src="${AllCat[i].Products[x].product_Img}" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title"> ${AllCat[i].Products[x].product_Name} </h5>
				`


				if (itemStockCount == 0) {
					allProducts += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[i].Products[x].product_Stock}</p>`
				}

				else if (itemStockCount > 0) {
					allProducts += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[i].Products[x].product_Stock}</p>`
				}

				allProducts += `<p class="card-text current-price">${AllCat[i].Products[x].product_Price}$</p>
											</div>
										</div>
									</a>
							</div>`

				$('#allProducts').append(allProducts);
			}



		}
	} // End For loops
	console.log(itemPrice);

	// console.log(allProducts);

	$("#BothStock").click(function () {
		$('#allProducts').children().remove();
		$('#allProducts').append(allProducts);
	});


	$("#outOfStock").click(function () {
		$('#allProducts').children().remove();
		$('#allProducts').append(OutStockHTML);
	});

	$("#inStock").click(function () {
		$('#allProducts').children().remove();
		$('#allProducts').append(InStockHTML);
	});

	// allProductsLength = $('#allProducts').children().length;

	// allProductsLength = $("#allProductsLength").val();
	// let allProducts

	var displayLength;
	// get the selected option value
	// assign the value to the all products div
	let ProductsDisplayed = [];

	$("#selectThis").change(function () {

		displayLength = Number($(this).children("option:selected").val());
		let productsbox = $('#allProducts').children();

		// Display only products that equals the length of User Option
		// Equal the value from Options with productsbox length  
		for (let i = 0; i < productsbox.length; i++) {
			$('#allProducts').children().length == displayLength;
		}

		// console.log(displayLength);
		// console.log($('#allProducts').children());
	});





	// productsArr.forEach(element => {
	// 	if (element > slicedArr.length) {
	// 		element.addClass('d-none');
	// 	} else {
	// 		$('#allProducts').prepend(slicedArr);
	// 	}
	// });


	// console.log(slicedArr, displayLength);




	// if (slicedArr == displayLength) {
	// 	$('#allProducts').children().show();
	// }

	// else {
	// 	$('#allProducts').children().hide();
	// }



	// console.log(productsbox);
});



	// console.log(OutOfStockArr);
	// console.log(InStockArr);
