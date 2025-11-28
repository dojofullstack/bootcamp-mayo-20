import useTakeApp from "../store";


const PreviewStore = () => {

    const storeName = useTakeApp((state) => state.storeName);
    const phone = useTakeApp((state) => state.phone);
    const phoneNumber = useTakeApp((state) => state.phoneNumber);
    const storeSlug = useTakeApp((state) => state.storeSlug);
    const selectedColor = useTakeApp((state) => state.selectedColor);
    const avatarPreview = useTakeApp((state) => state.avatarPreview);


    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header con logo y búsqueda */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
                <button className="btn btn-ghost btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <button className="btn btn-ghost btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <button className="btn btn-ghost btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </button>
            </div>

            {/* Hero section con logo circular */}
            <div className="bg-gradient-to-b from-pink-100 to-white py-8 flex flex-col items-center" >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-center px-4 mb-4"
                style={{
                    backgroundColor: selectedColor
            }}
            >
                    <span className="text-sm">{storeName}</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{storeName}</h1>
            </div>

            {/* Navegación */}
            <div className="px-4 py-4 border-b border-gray-200">
                <div className="flex items-center justify-around text-sm text-gray-600">
                    <button className="flex flex-col items-center gap-1 pb-2 border-b-2 border-gray-900 text-gray-900 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l9-5m-9 5l-8-5"></path>
                        </svg>
                        <span>Inicio</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span>Buscar</span>
                    </button>
                </div>
            </div>

            {/* Grid de productos */}
            <div className="px-4 py-6">
                <div className="grid grid-cols-2 gap-4">
                    {/* Producto 1 */}
                    <div className="bg-gray-100 rounded-lg p-3 h-32 flex flex-col justify-between">
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-24"></div>
                            <div className="h-2 bg-gray-300 rounded w-20"></div>
                            <div className="h-2 bg-gray-300 rounded w-16"></div>
                            <div className="h-2 bg-gray-300 rounded w-12"></div>
                        </div>
                    </div>

                    {/* Producto 2 - Imagen */}
                    <div className="bg-gray-200 rounded-lg h-32"></div>

                    {/* Producto 3 */}
                    <div className="bg-gray-100 rounded-lg p-3 h-32 flex flex-col justify-between">
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-24"></div>
                            <div className="h-2 bg-gray-300 rounded w-20"></div>
                        </div>
                    </div>

                    {/* Producto 4 - Imagen */}
                    <div className="bg-gray-200 rounded-lg h-32"></div>
                </div>
            </div>

            {/* Botón Carrito flotante */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-80 max-w-[calc(100%-2rem)]">
                <button className="btn btn-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-0 text-white font-semibold">
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-purple-700 rounded-full text-sm font-bold">1</span>
                    <span>Carrito</span>
                    <span className="ml-auto">$30.00</span>
                </button>
            </div>
        </div>
    );
}

export default PreviewStore;