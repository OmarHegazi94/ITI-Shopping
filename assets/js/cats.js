
// let productsOnly = [];

// for (let i = 0; i < AllCat.length; i++) {
    
//     delete AllCat[i].Brand_Name;
//     delete AllCat[i].Brand_Img;

//     productsOnly.push(AllCat[i]);


// }

// let anin = {} = withoutArray;
// let StringProducts = JSON.stringify(allProducts);
// let withoutArray = StringProducts.substring( 2, StringProducts.length-2 );


// Datatable plugin accept only a json with spesefic format

// let parentObject = JSON.stringify(productsOnly);
// let withoutArray = parentObject.substring( 1, parentObject.length-1 );

// localStorage.setItem("products_Only", withoutArray);

// Need to wrap all objects with anonimous object + display the products arrays
// outside it's object

// {
// }

// console.log(withoutArray);



// let final = JSON.parse(withoutArray);
// JSON.parse(withoutArray);
// localStorage.setItem("withoutArray", withoutArray);
// localStorage.setItem("AllProducts", JSON.stringify(allProducts));
// console.log(allProducts);

$(document).ready(function () {
    $('#example').DataTable({
        "ajax": {
            "url": "../../products.txt"
        },
        "columns": [
            { "Products": "ID" },
            { "Products2": "Name" },
            { "data": "Price" },
            { "data": "Img" },
            { "data": "Stock" },
        ],
        deferRender: true,
        scrollY: 200,
        scrollCollapse: true,
        scroller: true
    });
});
