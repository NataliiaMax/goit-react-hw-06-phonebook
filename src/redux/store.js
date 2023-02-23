import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contacts/contactsSlice';
import {persistedContactsReducer} from './contacts/contactsSlice'
// import notificationsReducer from '../n otifications/redux/notifications.slice';
// import { notificationsMiddleware } from '../notifications/redux/notifications.middlewere';

// const persistConfig = {
//   key: 'root',
//   storage,
//   // blacklist: ['notifications'],
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   // notifications: notificationsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {contacts: persistedContactsReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor };
