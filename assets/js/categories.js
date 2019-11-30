window.addEventListener('load', function () {



	// Display items based on price from input range slider
	// var slider = document.getElementById("myRange");
	// var output = document.getElementById("demo");

	// output.innerHTML = slider.value; // Display the default slider value
	// // Update the current slider value (each time you drag the slider handle)
	// slider.oninput = function () {
	// 	output.innerHTML = this.value;
	// };



	// inStockBtn = document.getElementById('inStock');
	// outOfStockBtn = document.getElementById('outOfStock');
	$('#InStockDiv').hide();
	$('#OutStockDiv').hide();

	// $('#allProducts').children().show();


	$("#BothStock").click(function () {
		$('#InStockDiv').hide();
		$('#OutStockDiv').hide();
		$('#allProducts').children().show();
	});

	$("#inStock").click(function () {
		$('#allProducts').children().hide();
		$('#InStockDiv').show();
	});

	$("#outOfStock").click(function () {
		$('#allProducts').children().hide();
		$('#InStockDiv').hide();
		$('#OutStockDiv').show();
	});








	// Display all products from all categories
	let Products = [];

	let InStockArr = [];
	let OutOfStockArr = [];


	for (let i = 0; i < AllCat.length; i++) {


		// Display Brands Names on Filter by Brand Sidebar
		let BrandNames = `
						<li>
							<input class="filter" type="checkbox" id="checkbox${i}">
							<label class="checkbox-label" for="checkbox${i}">${AllCat[i].Brand_Name}</label>
						</li>
						`;

		$('#catNames').append(BrandNames);

		// Add Click Event on all label
		// Get the Related Products to each Checkbox
		// Display items based on brand Name

		$('.checkbox-label').click(function (event) {

			if (event.target.innerHTML === AllCat[i].Brand_Name) {
				// console.log(AllCat[i]);



			}


		});
		console.log(AllCat[i]);

		for (let x = 0; x < AllCat[i].Products.length; x++) {

			Products.push(AllCat[i].Products[x]);

			// Stock Filter
			let itemStockCount = AllCat[i].Products[x].product_Stock;

			// In Stock Filter
			if (itemStockCount > 0) {
				InStockArr.push(AllCat[i].Products[x]);


				let InStockHTML = `
										<div class="col-md-4">
											<a href="./product.html">
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


				$('#InStockDiv').append(InStockHTML);
			}

			// Out Of stock filter
			else if (itemStockCount == 0) {
				OutOfStockArr.push(AllCat[i].Products[x]);

				let OutStockHTML = `
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


				$('#OutStockDiv').append(OutStockHTML);
			}


			// console.log(AllCat[i].Products[i]);
			// Apply optional statements over the product and stock if stock equal zero

			let allProducts = `
				<div class="col-md-4">
			`
			if (itemStockCount == 0) {
				allProducts += `<a >`
			}

			else {
				allProducts += `<a href="./product.html">`
			}

			allProducts +=
				`
					<div class="card">
						<img src="${AllCat[i].Products[x].product_Img}" class="card-img-top" alt="${AllCat[i].Products[x].product_ImgAlt}">
						<div class="card-body">
							<h5 class="card-title"> ${AllCat[i].Products[x].product_Name} </h5>
				`

			if (itemStockCount == 0) {
				allProducts += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[i].Products[x].product_Stock}</p>`
			}

			else {
				allProducts += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[i].Products[x].product_Stock}</p>`
			}

			allProducts += `<p class="card-text current-price">${AllCat[i].Products[x].product_Price}$</p>
							</div>
						</div>
					</a>
			</div>`

			$('#allProducts').append(allProducts);


		}
	} // End For loops


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

		// $('#allProducts').children() == displayLength;

		// Slice the New Products array with the display Number of Items
		// Start Slicing at 2 index because the first 0+1 are rows for Stock Items

		// let slicedArr = productsArr.slice(2, displayLength);



		// Display only products that equals the length of User Option
		// Equal the value from Options with productsbox length  
		for (let i = 2; i < productsbox.length; i++) {


			if (productsbox.length == displayLength) {
				productsbox[i].classList.add('d-block');
				$(productsbox).prepend(productsbox[i]);

			} else {
				productsbox[i].classList.remove('d-none');
			}

		}
		console.log(productsbox.length);





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
});