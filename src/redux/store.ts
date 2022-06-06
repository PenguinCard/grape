import { configureStore } from '@reduxjs/toolkit';

import counter from './reducer/counter';

export const store = configureStore({
  reducer: {
    counter,
  },
});

export type RootState = ReturnType<typeof store.getState>