"use client";

import { RootState } from "@/redux/store";
import { BusinessInfoTypes } from "@/types/stateTypes";
import { ReactNode, createContext, useState } from "react";
import { useSelector } from "react-redux";

interface Props{
    children:ReactNode;
}

export const BusinessInfoContext=createContext<any>(null);


const BusinessInfoContextProvider:React.FC<Props>=({children})=>{

    const {businessInfoData}=useSelector((state:RootState)=>state.businessInfoData)


    const [businessInfoFormData,setBusinessInfoFormData]=useState<BusinessInfoTypes>(businessInfoData)


    return(
        <BusinessInfoContext.Provider value={{businessInfoFormData,setBusinessInfoFormData}}>
            {children}
        </BusinessInfoContext.Provider>
    )
}

export default BusinessInfoContextProvider;