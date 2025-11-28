import { useState } from "react";
import useTakeApp from "../store";

const FormularioStore = () => {
  //   const [storeName, setStoreName] = useState('');
  //   const [phone, setPhone] = useState('+51');
  //   const [phoneNumber, setPhoneNumber] = useState('');
  //   const [storeSlug, setStoreSlug] = useState('');
  //   const [selectedColor, setSelectedColor] = useState('cyan');
  //   const [avatarPreview, setAvatarPreview] = useState(null);

    const storeName = useTakeApp((state) => state.storeName);
    const phone = useTakeApp((state) => state.phone);
    const phoneNumber = useTakeApp((state) => state.phoneNumber);
    const storeSlug = useTakeApp((state) => state.storeSlug);
    const selectedColor = useTakeApp((state) => state.selectedColor);
    const avatarPreview = useTakeApp((state) => state.avatarPreview);

    const setStoreName = useTakeApp((state) => state.setStoreName);
    const setPhone = useTakeApp((state) => state.setPhone);
    const setPhoneNumber = useTakeApp((state) => state.setPhoneNumber);
    const setStoreSlug = useTakeApp((state) => state.setStoreSlug);
    const setSelectedColor = useTakeApp((state) => state.setSelectedColor);
    const setAvatarPreview = useTakeApp((state) => state.setAvatarPreview);

  console.log({
    storeName,
    phone,
    phoneNumber,
    storeSlug,
    selectedColor,
    avatarPreview,
  });

  const colors = [
    { name: "black", bg: "bg-gray-900" },
    { name: "red", bg: "bg-red-500" },
    { name: "amber", bg: "bg-amber-500" },
    { name: "green", bg: "bg-green-500" },
    { name: "cyan", bg: "bg-cyan-500" },
    { name: "blue", bg: "bg-blue-600" },
    { name: "purple", bg: "bg-purple-500" },
  ];

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSlugFormat = (value) => {
    const formatted = value.toLowerCase().replace(/\s+/g, "").trim();
    setStoreSlug(formatted);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8">Crear una nueva tienda</h2>

      <form className="space-y-6">
        {/* Avatar Upload */}
        <div className="flex flex-col items-start gap-3">
          <div className="relative">
            <div
              className={`w-24 h-24 rounded-full ${
                selectedColor &&
                colors.find((c) => c.name === selectedColor)?.bg
              } flex items-center justify-center text-white text-xs text-center px-2 overflow-hidden`}
            >
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 stroke-current opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-gray-900 rounded-full p-2 cursor-pointer hover:bg-gray-800 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
              </svg>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Nombre de la tienda */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Nombre de la tienda <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="henry dojo"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50 font-medium"
            >
              <option>+51</option>
              <option>+55</option>
              <option>+34</option>
              <option>+1</option>
            </select>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="999999999"
            />
          </div>
        </div>

        {/* Enlace de la tienda */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Enlace de la tienda <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-500">
            <span className="px-4 py-2 bg-gray-50 text-gray-600 font-medium whitespace-nowrap border-r border-gray-300">
              take.app/
            </span>
            <input
              type="text"
              value={storeSlug}
              onChange={(e) => handleSlugFormat(e.target.value)}
              className="flex-1 px-4 py-2 focus:outline-none"
              placeholder="demosystem987"
            />
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Color de marca
          </label>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                className={`w-10 h-10 rounded-full ${color.bg} transition-all ${
                  selectedColor === color.name
                    ? "ring-2 ring-offset-2 ring-gray-400"
                    : "hover:opacity-90"
                }`}
              >
                {selectedColor === color.name && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-auto"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Botón Crear */}
        <button
          type="submit"
          className="mt-8 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default FormularioStore;
