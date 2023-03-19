import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/productApi";

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [productApi.reducerPath]: productApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
