"use client";

import { getStatesByCountryCode } from "@/helpers/getStateList";
import React, {createContext, useState,ReactNode } from "react";

interface Props{
    children:ReactNode;
}

export const StateListContext=createContext<any>(null);


const StateListContextProvider:React.FC<Props>=({children})=>{

    const [stateList,setStateList]=useState<string[]>([])

    const fetchStateList=async(countryCode:string="IN")=>{
        const response=await getStatesByCountryCode(countryCode);
        if(response){
            setStateList(response)
            console.log(response)
        }
    }

    return(
        <StateListContext.Provider value={{stateList,fetchStateList}}>
            {children}
        </StateListContext.Provider>
    )
}

export default StateListContextProvider;