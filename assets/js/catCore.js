
// class Product {

//     constructor(imgUrl, name, stock, price, description=null) {
//         this.IMGURL = imgUrl;
//         this.Stock = stock;
//         this.Price = price;
//         this.Name = name;
//         this.Description = description;
//     }

//     productData() {
//         return `Product img ${this.IMGURL} Product Stock ${this.Stock} Product Price ${this.Price} Product Name ${this.Name} Product Description ${this.Description}`;
//     }

// }

// let lgLap = new Product('./images/products/1.png', 'macbook pro', 10, 2400, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?');

// console.log(lgLap.productData());


let AllCat = [
    {
        Brand_Name: 'Apple',
        Brand_Img: './assets/images/brands/apple/brand.png',
        "Products": [
            {
                product_ID: 1,
                product_Img: './assets/images/brands/apple/products/1.png',
                product_ImgAlt: 'MacBook Pro 2017',
                product_Stock: 0,
                product_Price: 4000,
                product_Name: "MacBook Pro",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 2,
                product_Img: './assets/images/brands/apple/products/2.png',
                product_ImgAlt: 'MacBook Air 2015',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "MacBook Air",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 3,
                product_Img: './assets/images/brands/apple/products/3.png',
                product_ImgAlt: 'MacBook Air 2015',
                product_Stock: 15,
                product_Price: 2000,
                product_Name: "MacBook",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 4,
                product_Img: './assets/images/brands/apple/products/4.png',
                product_ImgAlt: 'MacBook Air 2015',
                product_Stock: 0,
                product_Price: 2000,
                product_Name: "IMac 21",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 5,
                product_Img: './assets/images/brands/apple/products/5.png',
                product_ImgAlt: 'MacBook Air 2015',
                product_Stock: 4,
                product_Price: 2600,
                product_Name: "IMac Pro 27",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 6,
                product_Img: './assets/images/brands/apple/products/6.png',
                product_ImgAlt: 'MacBook Air 2015',
                product_Stock: 4,
                product_Price: 2500,
                product_Name: "Macbook 16",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 7,
                product_Img: './assets/images/brands/apple/products/7.png',
                product_ImgAlt: 'MacBook Air 2015',
                product_Stock: 4,
                product_Price: 7500,
                product_Name: "IMac Pro",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    },
    {
        Brand_Name: 'Samsung',
        Brand_Img: './assets/images/brands/samsung/brand.png',
        "Products": [
            {
                product_ID: 8,
                product_Img: './assets/images/brands/samsung/products/1.png',
                product_Stock: 5,
                product_Price: 4000,
                product_Name: "Samsung 1",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 9,
                product_Img: './assets/images/brands/samsung/products/2.png',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "Samsung 2",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 10,
                product_Img: './assets/images/brands/samsung/products/3.png',
                product_Stock: 15,
                product_Price: 2000,
                product_Name: "Samsung 3",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 11,
                product_Img: './assets/images/brands/samsung/products/4.png',
                product_Stock: 0,
                product_Price: 2000,
                product_Name: "Samsung 4",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 12,
                product_Img: './assets/images/brands/samsung/products/5.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Samsung 5",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 13,
                product_Img: './assets/images/brands/samsung/products/6.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Samsung 6",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 14,
                product_Img: './assets/images/brands/samsung/products/7.png',
                product_Stock: 0,
                product_Price: 4500,
                product_Name: "Samsung 7",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    },
    {
        Brand_Name: 'Dell',
        Brand_Img: './assets/images/brands/dell/brand.png',
        "Products": [
            {
                product_ID: 15,
                product_Img: './assets/images/brands/dell/products/1.png',
                product_Stock: 5,
                product_Price: 4000,
                product_Name: "Dell Inspirion",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 16,
                product_Img: './assets/images/brands/dell/products/2.png',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "Dell Inspirion 2",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 17,
                product_Img: './assets/images/brands/dell/products/3.png',
                product_Stock: 0,
                product_Price: 2000,
                product_Name: "Dell Inspirion 3",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 18,
                product_Img: './assets/images/brands/dell/products/4.png',
                product_Stock: 5,
                product_Price: 2000,
                product_Name: "Dell Inspirion 4",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 19,
                product_Img: './assets/images/brands/dell/products/5.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Dell Inspirion 5",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 20,
                product_Img: './assets/images/brands/dell/products/6.png',
                product_Stock: 0,
                product_Price: 4500,
                product_Name: "Dell Inspirion 6",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 21,
                product_Img: './assets/images/brands/dell/products/7.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Dell Inspirion 7",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    },
    {
        Brand_Name: 'HP',
        Brand_Img: './assets/images/brands/hp/brand.png',
        "Products": [
            {
                product_ID: 22,
                product_Img: './assets/images/brands/hp/products/1.png',
                product_Stock: 5,
                product_Price: 4000,
                product_Name: "Hp EliteBook 1",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 23,
                product_Img: './assets/images/brands/hp/products/2.png',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "Hp EliteBook 2",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 24,
                product_Img: './assets/images/brands/hp/products/3.png',
                product_Stock: 15,
                product_Price: 2000,
                product_Name: "Hp EliteBook 3",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 25,
                product_Img: './assets/images/brands/hp/products/4.png',
                product_Stock: 5,
                product_Price: 2000,
                product_Name: "Hp EliteBook 4",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 26,
                product_Img: './assets/images/brands/hp/products/5.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Hp EliteBook 5",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 27,
                product_Img: './assets/images/brands/hp/products/6.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Hp EliteBook 6",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 28,
                product_Img: './assets/images/brands/hp/products/7.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Hp EliteBook 7",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    },
    {
        Brand_Name: 'Aser',
        Brand_Img: './assets/images/brands/aser/brand.png',
        "Products": [
            {
                product_ID: 29,
                product_Img: './assets/images/brands/aser/products/1.png',
                product_Stock: 5,
                product_Price: 4000,
                product_Name: "Aser 1",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 30,
                product_Img: './assets/images/brands/aser/products/2.png',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "Aser 2",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 31,
                product_Img: './assets/images/brands/aser/products/3.png',
                product_Stock: 15,
                product_Price: 2000,
                product_Name: "Aser 3",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 32,
                product_Img: './assets/images/brands/aser/products/4.png',
                product_Stock: 5,
                product_Price: 2000,
                product_Name: "Aser 4",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 33,
                product_Img: './assets/images/brands/aser/products/5.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Aser 5",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 34,
                product_Img: './assets/images/brands/aser/products/6.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Aser 6",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 35,
                product_Img: './assets/images/brands/aser/products/7.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Aser 7",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    },
    {
        Brand_Name: 'Alienware',
        Brand_Img: './assets/images/brands/alienware/brand.png',
        "Products": [
            {
                product_ID: 36,
                product_Img: './assets/images/brands/alienware/products/1.png',
                product_Stock: 5,
                product_Price: 4000,
                product_Name: "Alienware 1",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 37,
                product_Img: './assets/images/brands/alienware/products/2.png',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "Alienware 2",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 38,
                product_Img: './assets/images/brands/alienware/products/3.png',
                product_Stock: 15,
                product_Price: 2000,
                product_Name: "Alienware 3",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 39,
                product_Img: './assets/images/brands/alienware/products/4.png',
                product_Stock: 5,
                product_Price: 2000,
                product_Name: "Alienware 4",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 40,
                product_Img: './assets/images/brands/alienware/products/5.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Alienware 5",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 41,
                product_Img: './assets/images/brands/alienware/products/6.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Alienware 6",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 42,
                product_Img: './assets/images/brands/alienware/products/7.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Alienware 7",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    },
    {
        Brand_Name: 'Lenovo',
        Brand_Img: './assets/images/brands/lenovo/brand.png',
        "Products": [
            {
                product_ID: 43,
                product_Img: './assets/images/brands/lenovo/products/1.png',
                product_Stock: 5,
                product_Price: 4000,
                product_Name: "Lenovo 1",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 44,
                product_Img: './assets/images/brands/lenovo/products/2.png',
                product_Stock: 10,
                product_Price: 3000,
                product_Name: "Lenovo 2",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 45,
                product_Img: './assets/images/brands/lenovo/products/3.png',
                product_Stock: 15,
                product_Price: 2000,
                product_Name: "Lenovo 3",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 46,
                product_Img: './assets/images/brands/lenovo/products/4.png',
                product_Stock: 5,
                product_Price: 2000,
                product_Name: "Lenovo 4",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 47,
                product_Img: './assets/images/brands/lenovo/products/5.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Lenovo 5",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 48,
                product_Img: './assets/images/brands/lenovo/products/6.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Lenovo 6",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            },
            {
                product_ID: 49,
                product_Img: './assets/images/brands/lenovo/products/7.png',
                product_Stock: 4,
                product_Price: 4500,
                product_Name: "Lenovo 7",
                product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae?"
            }
        ]
    }
];




