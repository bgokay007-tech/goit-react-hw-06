import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

import { persistStore, persistReducer } from "redux-persist";



const customStorage = {
    getItem: key => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => {
        localStorage.setItem(key, value);
        return Promise.resolve(true);
    },
    removeItem: key => {
        localStorage.removeItem(key);
        return Promise.resolve();
    },
};

const contactsPersistConfig = {
    key: "contacts",
    storage: customStorage,
    whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
    contactsPersistConfig,
    contactsReducer
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);