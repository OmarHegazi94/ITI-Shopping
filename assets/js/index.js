// loop over the All Cats Array to get all products inside 1 category

// Apple Products

for (let i = 0; i < AllCat.length; i++) {

    let itemStockCount = AllCat[0].Products[i].product_Stock;
    // let stockElement = document.getElementsByClassName('stock');


    // Apply optional statements over the product and stock if stock equal zero

    let appleItem = `<div class="item">
					<div class="col-md-3">
					`
    if (itemStockCount == 0) {
        appleItem += `<a >`
    }

    else {
        // omar
        appleItem += `<a data-id='${AllCat[0].Products[i].product_ID}' class='pLink' href="./product.html">`
        //omar
    }

    appleItem +=
        `
							<div class="card">
								<img src="${AllCat[0].Products[i].product_Img}" class="card-img-top" alt="${AllCat[0].Products[i].product_ImgAlt}">
								<div class="card-body">
									<h5 class="card-title"> ${AllCat[0].Products[i].product_Name} </h5>
								`

    if (itemStockCount == 0) {
        appleItem += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[0].Products[i].product_Stock}</p>`
    }

    else {
        appleItem += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[0].Products[i].product_Stock}</p>`
    }

    appleItem += `<p class="card-text current-price">${AllCat[0].Products[i].product_Price}$</p>
								</div>
							</div>
						</a>
					</div>
				</div>`


    $('#products1').append(appleItem);

}

// Samsung Products

for (let i = 0; i < AllCat.length; i++) {

    let itemStockCount = AllCat[1].Products[i].product_Stock;
    // let local1= AllCat[1].Products[i];

    // console.log(local1);
    // window.localStorage.setItem("samsoung"+ i, JSON.stringify(local1));
    // let stockElement = document.getElementsByClassName('stock');


    // Apply optional statements over the product and stock if stock equal zero

    let samsungItem = `<div class="item">
								<div class="col-md-3">
								`
    if (itemStockCount == 0) {
        samsungItem += `<a >`
    }

    else {
        samsungItem += `<a data-id='${AllCat[1].Products[i].product_ID}' class='pLink' href="./product.html">`
    }

    samsungItem +=
        `
				<div class="card">
					<img src="${AllCat[1].Products[i].product_Img}" class="card-img-top" alt="${AllCat[1].Products[i].product_ImgAlt}">
					<div class="card-body">
						<h5 class="card-title"> ${AllCat[1].Products[i].product_Name} </h5>
					`

    if (itemStockCount == 0) {
        samsungItem += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[1].Products[i].product_Stock}</p>`
    }

    else {
        samsungItem += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[1].Products[i].product_Stock}</p>`
    }

    samsungItem += `<p class="card-text current-price">${AllCat[1].Products[i].product_Price}$</p>
											</div>
										</div>
									</a>
								</div>
							</div>`

    $('#products2').append(samsungItem);


}

// for(let k=0; k<AllCat.length;k++) {
// 	let cat1 = AllCat[k];
// 	for (let x=0; AllCat[k].Products.length;x++) {

// 	}
// }


// Dell Products

for (let i = 0; i < AllCat.length; i++) {

    let itemStockCount = AllCat[2].Products[i].product_Stock;


    // Apply optional statements over the product and stock if stock equal zero

    let dellItem = `<div class="item">
					<div class="col-md-3">
					`
    if (itemStockCount == 0) {
        dellItem += `<a >`
    }

    else {
        dellItem += `<a href="./product.html"  data-id='${AllCat[2].Products[i].product_ID}' class='pLink'>`
    }

    dellItem +=
        `
					<div class="card">
						<img src="${AllCat[2].Products[i].product_Img}" class="card-img-top" alt="${AllCat[2].Products[i].product_ImgAlt}">
						<div class="card-body">
							<h5 class="card-title"> ${AllCat[2].Products[i].product_Name} </h5>
				`

    if (itemStockCount == 0) {
        dellItem += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[2].Products[i].product_Stock}</p>`
    }

    else {
        dellItem += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[2].Products[i].product_Stock}</p>`
    }

    dellItem += `<p class="card-text current-price">${AllCat[2].Products[i].product_Price}$</p>
								</div>
							</div>
						</a>
					</div>
				</div>`

    $('#products3').append(dellItem);

}

// Display Random Products from Each Category

for (let i = 0; i < AllCat.length; i++) {

    let itemStockCount = AllCat[i].Products[i].product_Stock;

    console.log(AllCat[i].Products[i].product_Name);
    // Apply optional statements over the product and stock if stock equal zero

    let randomItem = `<div class="item">
							<div class="col-md-3">
							`
    if (itemStockCount == 0) {
        randomItem += `<a >`
    }

    else {
        randomItem += `<a href="./product.html" data-id= '${AllCat[i].Products[i].product_ID}' class='pLink' >`
    }

    randomItem +=
        `
					<div class="card">
						<img src="${AllCat[i].Products[i].product_Img}" class="card-img-top" alt="${AllCat[i].Products[i].product_ImgAlt}">
						<div class="card-body">
							<h5 class="card-title"> ${AllCat[i].Products[i].product_Name} </h5>
				`

    if (itemStockCount == 0) {
        randomItem += `<p class="card-text text-danger font-weight-bold">Stock: ${AllCat[i].Products[i].product_Stock}</p>`
    }

    else {
        randomItem += `<p class="card-text text-success font-weight-bold">Stock: ${AllCat[i].Products[i].product_Stock}</p>`
    }

    randomItem += `<p class="card-text current-price">${AllCat[i].Products[i].product_Price}$</p>
										</div>
									</div>
								</a>
							</div>
						</div>`

    $('#random').append(randomItem);
}



// 		$(document).ready(function(){

// $('body').delegate('.pLink','click',function(e){
// 	e.preventDefault();
// 	var x = $(this);
// 	var pID = parseInt(x.data('id'));
// 	window.localStorage.setItem('theID',pID);
// 	window.location.href='product.html';
// 	alert(pID);
// });/*pLink.click*/

// });/*ready*/

