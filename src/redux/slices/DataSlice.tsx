import { createSlice } from "@reduxjs/toolkit";

const initialState={
    businessInfoData:{
        business_name:"",
        country:"",
        state:"",
        city:"",
        address:"",
        opening_time:"",
        closing_time:"",
        email:"",
        mobile_no:"",
        restaurant_image:""
      },
    ownerDetailsData:[]
}
export const DataSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        setBusinessInfoData:(state,action)=>{
            state.businessInfoData=action.payload
            localStorage.setItem("businessInfo",JSON.stringify(state.businessInfoData))
        },
        setOwnerDetailsData:(state,action)=>{
            state.ownerDetailsData=action.payload
        }
    }
})

export const {setBusinessInfoData,setOwnerDetailsData}=DataSlice.actions;
export default DataSlice.reducer;