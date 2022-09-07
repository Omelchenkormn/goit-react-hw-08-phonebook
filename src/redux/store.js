import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { userSlice } from './userSlice';
import { contactsApi } from './contacts/fetchApi';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
  
  import { persistUserReducer } from './userSlice';
// import storage from 'redux-persist/lib/storage'


// const userPersistConfig = {
//     key: 'user',
//     storage,
//     whitelist: ['token'],
// }
const store = configureStore({
    reducer: {
        // user: persistReducer(userPersistConfig, userSlice.reducer),
        user: persistUserReducer,
        [authApi.reducerPath]: authApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        // contacts: contactsSlice.reducer,
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




// import { configureStore } from '@reduxjs/toolkit';
// import { authApi } from './auth/authApi';
// import { userSlice } from './userSlice';
// import { contactsApi } from './contacts/fetchApi';
// import { persistStore, persistReducer, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const userPersistConfig = {
//     key: 'user',
//     storage,
//     whitelist: ['token'],
// }
// const store = configureStore({
//     reducer: {
//         user: persistReducer(userPersistConfig, userSlice.reducer),
//         // user: userSlice.reducer,
//         [authApi.reducerPath]: authApi.reducer,
//         [contactsApi.reducerPath]: contactsApi.reducer,
//         // contacts: contactsSlice.reducer,
//     },
//     middleware: getDefaultMiddleware => [
//         ...getDefaultMiddleware({
//             serializableCheck: {
//             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//         },
//         }),
//         authApi.middleware,
//         contactsApi.middleware,
//     ],
// });
// const persistor = persistStore(store);

// const exportStore = {
//     store,
//     persistor,
// };

// export default exportStore;





























