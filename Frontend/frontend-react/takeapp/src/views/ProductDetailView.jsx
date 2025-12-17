import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetailView = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  // Datos de ejemplo - reemplazar con datos del store o API
  //   const product = {
  //     id: id || 1,
  //     name: "producto1",
  //     price: "S/ 12.00",
  //     originalPrice: "S/ 15.00",
  //     category: "hola",
  //     sku: "demo123",
  //     description: "Descripción del producto...",
  //     image:
  //       "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop",
  //     rating: 4.5,
  //     reviews: 128,
  //   };

  const handleQuantityChange = (value) => {
    if (value > 0) setQuantity(value);
  };

  const handleAddToCart = () => {
    console.log(`Agregado ${quantity} unidades de ${product?.title} al carrito.`);
    // guardar en localStorage o estado global
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Aquí agregar la lógica para agregar al carrito
  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);


  console.log("product", product);  

  return (
    <>
      <Header />

      <div className="w-full max-w-2xl mx-auto bg-white">
        {/* Header con botón volver */}
        <div className="flex items-center gap-3 px-4 py-4 border-b">
          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition">
            <span>←</span>
            <span>Volver</span>
          </button>
        </div>

        {/* Contenedor principal */}
        <div className="px-4 py-6 pb-24">
          {/* Imagen del producto */}
          <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden aspect-square">
            <img
              src={product?.images ? product.images[0] : ''}
              alt={product?.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Marcador de descuento */}
          <div className="mb-4 bg-gray-100 h-6 rounded flex items-center justify-center text-xs text-gray-500">
            Descuento disponible
          </div>

          {/* Nombre y precio */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-2xl font-bold text-gray-900">
                {product?.title}
              </h1>
              <button className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-current text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C9.589 14.666 10.647 15.863 11.844 16.845m11.997-6.643l-6.559 3.41c-2.763 1.435-3.472.142-2.654-2.33l2.953-9.487c.882-2.884-.054-3.702-2.829-1.74l-5.513 3.998c-2.581 1.871-2.596 4.32-.015 6.2l5.048 3.355c2.881 1.905 3.901 4.555 1.285 7.541-2.616 2.987-4.778 2.588-7.659.703l-4.944-3.26c-2.775-1.84-4.773-4.15-4.773-6.991s1.998-5.151 4.773-6.991l5.717-3.78"
                  ></path>
                </svg>
              </button>
            </div>

            <p className="text-gray-600 text-sm mb-2">{product?.category}</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold text-gray-900">
                {product?.price}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {product?.originalPrice}
              </span>
            </div>

            <p className="text-xs text-gray-500">SKU: {product?.sku}</p>
          </div>

          {/* Separador */}
          <div className="border-t mb-6"></div>

          {/* Rating y reviews */}
          {/* <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product?.rating} ({product?.reviews} opiniones)
              </span>
            </div>
          </div> */}

          {/* Descripción */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-sm text-gray-600">{product?.description}</p>
          </div>

          {/* Cantidad */}
          <div className="mb-6 border-t pt-6">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Cantidad
            </label>
            <div className="flex items-center gap-4 w-fit">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                −
              </button>
              <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Botón Añadir flotante */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-4 max-w-2xl mx-auto">
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Añadir</span>
            <span className="font-normal">{product?.price}</span>
          </button>
        </div>
      </div>
    </>
  );
};
