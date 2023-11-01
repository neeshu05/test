
import './App.css';
import products from './data.js'
import Card from './components/Card.jsx'
import Category from './components/Category.jsx'
import categories from './categories.js'
import { useEffect, useState } from 'react';
function App() {

  const [myproducts, setProducts] = useState(products)

  function getCategory(categoryName) {
    let newProducts = products.filter(product => product.category === categoryName)
    setProducts(newProducts)
    setCurrentPage(1)
  }

  function sortProducts() {
    const sortedProducts = [...myproducts];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts)
  }

  function sortProductsByHigh() {
    const sortedProducts = [...myproducts];
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts)
  }


  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(myproducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='App_container'>

      <div className="navbar">
        <div className="logo">
          <span>DevTown Assignment</span>
        </div>
      </div>
      <Category categories={categories} getCategory={getCategory}></Category>
      <div className='App_button'>

        <button className='creative-button_' onClick={sortProducts}>Sort Low to High</button>
        <button className='creative-button_' onClick={sortProductsByHigh}>Sort High to Low</button>

      </div>

      <div className="App">
        {
          myproducts.slice((currentPage - 1) * itemsPerPage,(currentPage - 1) * itemsPerPage + 12).map(productData => <Card image={productData.image} title={productData.title} price={productData.price} description={productData.description} />)
        }
      </div>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='page'>
          Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className='page'>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
