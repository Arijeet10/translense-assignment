"use client";

import { useContext } from "react";
import BusinessInfoFormContent from "./BusinessInfoFormContent";
import { useDispatch } from "react-redux";
import { setBusinessInfoData } from "@/redux/slices/DataSlice";
import { BusinessInfoContext } from "@/context/BusinessInfoContextProvider";

const formInputs = [
  "Business Name *",
  "Country",
  "State *",
  "City *",
  "Address *",
  "Opening Time *",
  "Closing Time *",
  "E-mail *",
  "Mobile Number *",
  "Upload image of your Restaurant",
];

interface Props{
  setActiveSection:React.Dispatch<React.SetStateAction<number>>
}

const BusinessInfoForm:React.FC<Props> = ({setActiveSection}) => {

  const dispatch=useDispatch();
  // const {businessInfoData}=useSelector((state:RootState)=>state.businessInfoData)

  // const [businessInfoFormData,setBusinessInfoFormData]=useState<BusinessInfoTypes>(businessInfoData)

  const {businessInfoFormData,setBusinessInfoFormData}=useContext(BusinessInfoContext)

  //submit business info form data
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(businessInfoFormData)
    if(businessInfoFormData){
      dispatch(setBusinessInfoData(businessInfoFormData))
      setActiveSection(1)
    }
  };

  return (
    <>
      <div className=" h-full flex flex-col gap-6 justify-between">
        <div className=" text-[2.5vw] text-[#90212C] font-semibold">
          Business Information
        </div>

        {/* Form Section */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full h-full flex flex-col justify-between"
        >
          <div className="grid grid-cols-2  justify-between gap-10">
            {formInputs.map((item: string, i) => {
              return <BusinessInfoFormContent key={i} input={item} index={i + 1} />;
            })}
          </div>
          <div className="text-[1.8vw] flex justify-end">
            <input type="submit" value={`Proceed to Owner & Manager Details ->`} className="p-[0.7vw] w-[35vw] rounded-md bg-[#DC3545] hover:bg-[#f3283c] text-[#ffffff] text-[1.5vw] font-medium" />
          </div>
        </form>
      </div>
    </>
  );
};

export default BusinessInfoForm;
