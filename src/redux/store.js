import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { contactsApi } from './contacts/fetchApi';
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
  
import { persistUserReducer } from './userSlice';

const store = configureStore({
    reducer: {
        user: persistUserReducer,
        [authApi.reducerPath]: authApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
        }),
        authApi.middleware,
        contactsApi.middleware,
    ],
});
const persistor = persistStore(store);

const exportStore = {
    store,
    persistor,
};

export default exportStore;






























