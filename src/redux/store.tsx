

import { configureStore } from "@reduxjs/toolkit";
import businessInfoReducer from "./slices/DataSlice"

export const store=configureStore({
    reducer:{
        businessInfoData:businessInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
