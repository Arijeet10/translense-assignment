"use client";

import { StateListContext } from "@/context/StateListProvider";
import { Country } from "@/types/stateTypes";
import { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  default: string;
  countryList: Country[];
  stateList:string[];
  selectedValue:(value:string)=>void;
}

const DropdownInput: React.FC<Props> = ({ default: defaultItem, countryList,stateList,selectedValue }) => {
  
  //to open or close dropdown
  const [dropdown, setDropdown] = useState(false);

  //to set the selected country
  const [selectedItem, setSelectedItem] = useState<string>(defaultItem);

  //set active country for fetching the respective list of states
  const [selectedCountryCode,setSelectedCountryCode]=useState("IN")


  const {fetchStateList}=useContext(StateListContext)

  useEffect(() => {
    fetchStateList(selectedCountryCode)
  }, [selectedCountryCode])
  

  //to return selected dropdown value to the callback
  useEffect(() => {
    if(selectedItem){
      selectedValue(selectedItem);
    }
  }, [selectedItem])
  

  //function to select country from dropdown
  const handleCountrySelect = (name: string,code:string) => {
    setSelectedItem(name);
    setSelectedCountryCode(code);
    setDropdown(false);
  };

  //function to select state from dropdown
  const handleStateSelect=(item:string)=>{
    setSelectedItem(item);
    setDropdown(false);
  }

  return (
    <>
      <div>
        <div className="p-1 relative flex items-center text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540]">
          <div className="w-full">{selectedItem}</div>
          <div>
            {dropdown ? (
              <FaChevronUp onClick={() => setDropdown(false)} />
            ) : (
              <FaChevronDown onClick={() => setDropdown(true)} />
            )}
          </div>

          {/* Dropdown */}
          <div
            className={`p-2 w-full h-[40vh] overflow-scroll hide-default-scrollbar  absolute top-[4.5vw] sm:top-[4vw] left-0 z-50 border-x border-b rounded-b-lg border-[#12121216]   bg-[#ffffff]   ${
              !dropdown && "hidden"
            }`}
          >

            {/* Country Dropdown */}
            {countryList && countryList.map((country:Country, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleCountrySelect(country.name,country.code)}
                  className="p-1 hover:bg-[#E5E5E540] cursor-pointer"
                >
                  {country.name}
                </div>
              );
            })}


            {/* State Dropdown */}
            {stateList &&(
              stateList.map((state,i)=>{
                return(
                  <div
                  key={i}
                  onClick={() => handleStateSelect(state)}
                  className="p-1 hover:bg-[#E5E5E540] cursor-pointer"
                >
                  {state}
                </div>
                )
              })
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownInput;
