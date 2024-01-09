import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const loaderRef = useRef(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?`);
      const newProducts = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [pageNumber]);

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const currentTime = new Date().toLocaleString();

  return (
    <div style={{ width: '100%' }}>
      <div style={{ backgroundColor: 'skyblue', padding: '10px', textAlign: 'center', color: '#fff', marginBottom: '10px' }}>
        Contact Us | Customer Support | {currentTime}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '80%', margin: 'auto' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: '30%',
              marginBottom: '20px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxSizing: 'border-box',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
            }}
            onClick={() => openModal(product)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Zoom in on hover
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Reset on mouse out
          >
            <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: 'skyblue',
                color: '#fff',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                position: 'absolute',
                bottom: '10px',
                right: '10px',
              }}
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product.id, product.title, product.price);
                toast.success('Added to the cart', { autoClose: 2000 });
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
        <div ref={loaderRef}></div>
      </div>
      <Modal
        isOpen={selectedProduct !== null}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          content: {
            maxWidth: '50%',
            margin: 'auto',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        {selectedProduct && (
          <div>
            <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{selectedProduct.title}</h3>
            <p>${selectedProduct.price.toFixed(2)}</p>
            <button className="btn btn-primary" onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ProductList;
