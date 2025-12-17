import { useEffect, useState } from "react";
import useTakeApp from "../store";
import axios from "axios";

const ProductsList = () => {
  // Aquí puedes agregar tus productos. Por ahora usaré datos de ejemplo
  const [products, setProducts] = useState([]);

  const storeName = useTakeApp((state) => state.storeName);
  const selectedColor = useTakeApp((state) => state.selectedColor);


//   console.log("Store Name from Zustand:", storeName);
//   console.log("Selected Color from Zustand:", selectedColor);

    console.log("products", products);



  useEffect(() => {
    // Aquí podrías cargar los productos desde una API o localStorage si es necesario
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
      // eliminar la clase "skeleton" del contenedor de productos products-container
        const productsContainer = document.getElementById("products-container");
        if (productsContainer) {
            productsContainer.classList.remove("skeleton");
        }
    }).catch((error) => {
      console.error("Error fetching products:", error);
         // eliminar la clase "skeleton" del contenedor de productos products-container
        const productsContainer = document.getElementById("products-container");
        if (productsContainer) {
            productsContainer.classList.remove("skeleton");
        }
    });
  }, []);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{storeName}</h1>
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      {/* Contenedor de productos */}
      <div className="max-w-4xl mx-auto px-4 py-8 skeleton" id="products-container">
        <div className="space-y-4 ">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 ">
              <div className="flex gap-6">
                {/* Contenido del producto */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
                  
                  <div className="mt-3 space-y-1">
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-xs text-gray-500">{product.subtitle}</p>
                  </div>

                  <p className="mt-4 text-lg font-semibold text-gray-900">{product.price}</p>
                </div>

                {/* Imagen del producto */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrito flotante */}
      <div className="fixed bottom-6 right-6">
        <button className="btn btn-circle btn-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-0 text-white font-bold text-xl shadow-lg">
          <span className="flex items-center justify-center w-8 h-8 bg-purple-700 rounded-full text-sm font-bold">1</span>
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
