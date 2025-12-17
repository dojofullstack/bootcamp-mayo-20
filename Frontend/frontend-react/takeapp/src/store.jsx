import { create } from 'zustand'


const callbackColor = (set, color) => {
    set({selectedColor: color})
}

const callbackStoreName = (set, name) => {
    set({storeName: name})
}


const loadConfigStore = (set, get) => {
    // leer localStorage
    const storeName =  JSON.parse(localStorage.getItem('storeName')) || '';
    const productData = JSON.parse(localStorage.getItem('productData')) || '';


    console.log("Informacion del Store", storeName, productData);
    set({
        storeName: storeName.storeName,
        storeSlug: storeName.storeSlug,
        phone: storeName.phone,
        phoneNumber: storeName.phoneNumber,
        selectedColor: storeName.selectedColor,
        avatarPreview: storeName.avatarPreview,
    })

    // actualizar los state del productos
    
}

const useTakeApp = create( (set, get) => (
    {
        storeName: '',
        phone: '+51',
        phoneNumber: '',
        storeSlug: '',
        selectedColor: 'cyan',
        avatarPreview: null,
        setSelectedColor: (color) => callbackColor(set, color),
        setStoreName: (name) => callbackStoreName(set, name),
        setPhone: (phone) => set({phone: phone}),
        setPhoneNumber: (number) => set({phoneNumber: number }),
        setStoreSlug: (slug) => set({storeSlug: slug}),
        setAvatarPreview: (preview) => set({avatarPreview: preview}),
        loadConfigStore: () => loadConfigStore(set, get)
    }
)  )

export default useTakeApp;
