import { create } from 'zustand'

const useTakeApp = create( (set, get) => (
    {
        storeName: '',
        phone: '+51',
        phoneNumber: '',
        storeSlug: '',
        selectedColor: 'cyan',
        avatarPreview: null,
        setSelectedColor: (color) => set({selectedColor: color}),
        setStoreName: (name) => set({storeName: name}),
        setPhone: (phone) => set({phone: phone}),
        setPhoneNumber: (number) => set({phoneNumber: number }),
        setStoreSlug: (slug) => set({storeSlug: slug}),
        setAvatarPreview: (preview) => set({avatarPreview: preview}),
    }
)  )

export default useTakeApp;
