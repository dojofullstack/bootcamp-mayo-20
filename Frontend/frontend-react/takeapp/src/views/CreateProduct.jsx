import { useState } from "react";
import Header from "../components/Header";
import { useParams, useSearchParams } from "react-router-dom";

export const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Físico");
  const [category, setCategory] = useState("");
  const [sku, setSku] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const handleImageUpload = (e) => {
    // convertir imagen a base64
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
    // const files = Array.from(e.target.files);
    // setImages([...images, ...files]);
  };

  const saveProduct = () => {
    const productData = {
      title,
      type,
      category,
      sku,
      weight,
      price,
      originalPrice,
      description,
      images,
    };

    console.log("Product data to be saved:", productData);

    localStorage.setItem("productData", JSON.stringify(productData));
    // Aquí puedes agregar la lógica para enviar los datos al servidor o almacenarlos según sea necesario.
  }

  return (
    <>
      <Header />

      <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-8">Crear producto</h2>

        <form className="space-y-6">
          {/* Nombre del producto */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Nombre"
            />
          </div>

          {/* Tipo y Categoría */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Tipo
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option>Físico</option>
                <option>Digital</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Categoría <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Buscar o crear categoría"
              />
            </div>
          </div>

          {/* SKU y Peso */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                SKU
              </label>
              <input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="SKU"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Peso
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="0"
              />
            </div>
          </div>

          {/* Precios */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Precios</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Precio
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2 text-gray-600">PEN</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Precio original
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2 text-gray-600">PEN</span>
                  <input
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 text-sm text-gray-700 font-medium hover:text-gray-900 flex items-center gap-2"
            >
              <span>Mostrar más</span>
              <span>▼</span>
            </button>
          </div>

          {/* Descripción */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Descripción</h3>
            <div>
              <p className="text-xs text-gray-500 mb-2">
                Decorate with <strong>**bold**</strong> <span className="line-through">--strike--</span> <em>italic</em>
              </p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-32 resize-none"
                placeholder=""
              />
            </div>
          </div>

          {/* Imágenes */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Imágenes</h3>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-gray-400 transition">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="text-center">
                <div className="text-4xl text-gray-400 mb-2">🖼️</div>
                <p className="text-sm font-medium text-gray-900">
                  Arrastra un archivo aquí o haz clic para seleccionarlo
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  El archivo no debe exceder 10mb. La proporción recomendada es 1:1.
                </p>
              </div>
            </label>

            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`preview-${idx}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setImages(images.filter((_, i) => i !== idx))
                      }
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              className="mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center gap-2"
            >
              <span>🖼️</span> Generar imagen
            </button>
          </div>

          {/* Botón Crear */}
          <div className="pt-6 border-t">
            <button
                onClick={saveProduct}
              type="button"
              className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Crear producto
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
