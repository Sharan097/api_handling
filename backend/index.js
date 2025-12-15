import express from "express";

const app = express();


const products = [
  { id: 1, name: "Table Wooden", category: "furniture", price: 200, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 2, name: "Modern Sofa", category: "furniture", price: 450, image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
  { id: 3, name: "Comfort Chair", category: "furniture", price: 120, image: "https://images.unsplash.com/photo-1582582429416-8f1b65a9b20b" },
  { id: 4, name: "King Size Bed", category: "bedroom", price: 650, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0" },
  { id: 5, name: "Office Chair", category: "office", price: 180, image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344" },
  { id: 6, name: "Coffee Table", category: "decor", price: 150, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88" },
  { id: 7, name: "Bookshelf", category: "furniture", price: 220, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91" },
  { id: 8, name: "Wardrobe", category: "bedroom", price: 500, image: "https://images.unsplash.com/photo-1615873968403-89e068629265" },
  { id: 9, name: "TV Stand", category: "decor", price: 190, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7" },
  { id: 10, name: "Nightstand", category: "bedroom", price: 95, image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f" }
];


app.get("/api/products",(req, res) =>{
  const search = req.query.search?.toLowerCase() || "";
  if(search){
    const list = products.filter(item =>
      item.name.toLowerCase().includes(search)
    );
    return res.json(list);
  }

  // simulate loading
  setTimeout(() => res.json(products), 600);
});


app.get("/api/products/category/:cat",(req, res) =>{
  const category = req.params.cat.toLowerCase();
  const list = products.filter(item => item.category === category);
  res.json(list);
}
);

// Server start
const PORT= process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Backend running on port ${PORT}`);
}
);















// import express from 'express';

// const app = express();


// app.get('/api/products',(req, res) => {
//     const products = [
//         {
//             id: 1,
//             name: 'table wooden',
//             price: 200,
//             images: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
//     },
//     {
//       id: 2,
//       name: 'Modern Sofa',
//       price: 450,
//       image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
//     },
//     {
//       id: 3,
//       name: 'Comfort Chair',
//       price: 120,
//       image: 'https://images.unsplash.com/photo-1582582429416-8f1b65a9b20b'
//     },
//     {
//       id: 4,
//       name: 'King Size Bed',
//       price: 650,
//       image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'
//     },
//     {
//       id: 5,
//       name: 'Office Chair',
//       price: 180,
//       image: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344'
//     },
//     {
//       id: 6,
//       name: 'Coffee Table',
//       price: 150,
//       image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88'
//     },
//     {
//       id: 7,
//       name: 'Bookshelf',
//       price: 220,
//       image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91'
//     },
//     {
//       id: 8,
//       name: 'Wardrobe',
//       price: 500,
//       image: 'https://images.unsplash.com/photo-1615873968403-89e068629265'
//     },
//     {
//       id: 9,
//       name: 'TV Stand',
//       price: 190,
//       image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7'
//     },
//     {
//       id: 10,
//       name: 'Nightstand',
//       price: 95,
//       image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f'
//     }
//   ]

//   // http://localhost:3000/api/products?search=table                 ("?search=" : 'query' parameter)

//   if(req.query.search) {
//     const filterProducts = products.filter(product => product.name.includes(req.query.search));                   //( req.query.search : to access the 'search' query parameter from the request , ex., 'table' )
//     res.send(filterProducts);
//     return;                                                                                                 // to prevent/stop further execution of the code and it comes out of the current function ORELSE the application will crash.
//   }

//   // Simulate a delay of 3 seconds
//   setTimeout(() => {
//     res.send(products);
//   }, 3000);
// })



// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log("Server is running on port ${port}");
// })