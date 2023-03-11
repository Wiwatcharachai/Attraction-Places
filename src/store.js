import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { attractionApi } from './servics/actraction'
import attractionReducer from './features/attractionSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [attractionApi.reducerPath]: attractionApi.reducer,
    attraction: attractionReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attractionApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)