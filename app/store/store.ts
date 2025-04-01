

import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './features/movie'
import { combineReducers } from 'redux'

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer, persistStore } from 'redux-persist'

// create storage for client and SSR
const storage = typeof window !== 'undefined'
    ? createWebStorage('local')
    : {
        getItem: () => Promise.resolve(null),
        setItem: () => Promise.resolve(),
        removeItem: () => Promise.resolve()
    };

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    movie: movieSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch