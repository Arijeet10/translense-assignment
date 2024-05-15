"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";

interface StoreProviderProps{
    children:ReactNode;
}


const StoreProvider:React.FC<StoreProviderProps>=({children})=>{
    return(
        <Provider store={store}>
        {children}
        </Provider>
    )
}

export default StoreProvider;