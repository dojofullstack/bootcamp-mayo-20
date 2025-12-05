import { create } from 'zustand'


const callbackColor = (set, color) => {
    set({selectedColor: color})
}

const callbackStoreName = (set, name) => {
    set({storeName: name})
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
    }
)  )

export default useTakeApp;
