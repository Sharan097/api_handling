import { useState, useEffect } from "react";
import axios from "axios";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchProducts=async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/products?search=${search}`);
        setProducts(res.data);
      } 
      finally {
        setLoading(false);
      }
    };

      fetchProducts();
    }, [search]);

  const handleCategory= async (category) => {
    const res = await axios.get(`/api/products/category/${category}`);
    setCategoryProducts(res.data);
  };

  return (
    <div className="container">
      <h1>Decors</h1>
      <input
        type="text"
        className="search-box"
        placeholder="Search Products..."
        value={search} onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Products Found: {products.length}</h2>

      { loading && <p>Loading...</p> }

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <hr />

      <h2>Products by Category</h2>

      <div className="btn-row" >
        <button onClick={() => handleCategory("furniture")}>Furniture</button>
        <button onClick={() => handleCategory("bedroom")}>Bedroom</button>

      </div>


      {categoryProducts.length > 0 && (
        <pre className="output-box"> {JSON.stringify(categoryProducts, null, 2)}
        </pre>
      )}

      <hr />
    </div>
  );
}

export default App;





