"use client";

import { BusinessInfoTypes } from "@/types/stateTypes";
import UploadImageInput from "./UploadImageInput";
import DropdownInput from "./DropdownInput";
import { useContext, useState } from "react";
import { StateListContext } from "@/context/StateListProvider";
import { getCountries } from "@/helpers/CountryList";
import SendVerifyOTP from "./SendVerifyOTP";
import { BusinessInfoContext } from "@/context/BusinessInfoContextProvider";
import { FaCheck } from "react-icons/fa";

// Array of Indian states
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

interface Props {
  input: string;
  index: number;
}

const BusinessInfoFormContent: React.FC<Props> = ({ input, index }) => {
  const { businessInfoFormData, setBusinessInfoFormData } =
    useContext(BusinessInfoContext);

  const { stateList } = useContext(StateListContext);
  const [verifiedEmail, setverifiedEmail] = useState(false);

  const [emailVerification, setEmailVerification] = useState(false);

  //list of countries
  const countryList = getCountries();

  //handle entered otp
  const handleEnteredOtp = (enteredOtp: string[]) => {
    console.log(enteredOtp);
    if(enteredOtp){
      setverifiedEmail(true)
      setEmailVerification(false)

    }
  };

  //set country to form data
  const handleSetCountry = (country: string) => {
    if (country) {
      setBusinessInfoFormData({ ...businessInfoFormData, country: country });
    }
  };

  //set state to form data
  const handleSetState = (state: string) => {
    if (state) {
      setBusinessInfoFormData({ ...businessInfoFormData, state: state });
    }
  };

  //set uploaded restaurant image to form data
  const handleSetRestaurantImage = (image: string) => {
    if (image) {
      setBusinessInfoFormData({
        ...businessInfoFormData,
        restaurant_image: image,
      });
    }
  };

  return (
    <>
      <div
        className={` flex flex-col gap-2 ${index == 5 && "col-span-2"} ${
          index == 10 && "hidden"
        }`}
      >
        {/* Label Section */}
        <div className="flex items-center justify-between">
          <div className="text-[1.2vw] text-[#DA3545] font-medium">{input}</div>
          <div>
            <img src="/help.svg" alt="help icon" className="w-[1.2vw]" />
          </div>
        </div>

        {/* Input Section */}

        {/* Business Name Input */}
        {input.includes("Business") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540]`}
          >
            <input
              type="text"
              className="w-full  focus:outline-none bg-transparent"
              value={businessInfoFormData.business_name}
              onChange={(e) =>
                setBusinessInfoFormData({
                  ...businessInfoFormData,
                  business_name: e.target.value,
                })
              }
            />
          </div>
        )}

        {/* Country Input */}
        {input.includes("Country") && (
          <div>
            <DropdownInput
              selectedValue={handleSetCountry}
              default="India"
              countryList={countryList}
              stateList={[]}
            />
          </div>
        )}

        {/* State Input */}
        {input.includes("State") && (
          <div>
            <DropdownInput
              selectedValue={handleSetState}
              default="Delhi"
              countryList={[]}
              stateList={stateList}
            />
          </div>
        )}

        {/* City Input */}
        {input.includes("City") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540]`}
          >
            <input
              type="text"
              className="w-full focus:outline-none bg-transparent"
            />
          </div>
        )}

        {/* Address Input */}
        {input.includes("Address") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540] flex items-center`}
          >
            <input
              type="text"
              className=" w-full focus:outline-none bg-transparent"
              value={businessInfoFormData.address}
              onChange={(e) =>
                setBusinessInfoFormData({
                  ...businessInfoFormData,
                  address: e.target.value,
                })
              }
            />
            <img src="/map-pin.svg" alt="map icon" className="w-[1.5vw]" />
          </div>
        )}

        {/* Opening Time Input */}
        {input.includes("Opening") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540] flex items-center gap-2`}
          >
            <input
              type="text"
              className=" w-full focus:outline-none bg-transparent"
              value={businessInfoFormData.opening_time}
              onChange={(e) =>
                setBusinessInfoFormData({
                  ...businessInfoFormData,
                  opening_time: e.target.value,
                })
              }
            />
            <div>{businessInfoFormData.opening_time>12?"PM":"AM"}</div>
            <img src="/clock.svg" alt="map icon" className="w-[1.5vw]" />
          </div>
        )}

        {/* Closing Time Input */}
        {input.includes("Closing") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540] flex items-center gap-2`}
          >
            <input
              type="text"
              className=" w-full focus:outline-none bg-transparent"
              value={businessInfoFormData.closing_time}
              onChange={(e) =>
                setBusinessInfoFormData({
                  ...businessInfoFormData,
                  closing_time: e.target.value,
                })
              }
            />
            <div>{businessInfoFormData.closing_time>12?"PM":"AM"}</div>
            <img src="/clock.svg" alt="map icon" className="w-[1.5vw]" />
          </div>
        )}

        {/* Email Input */}
        {input.includes("E-mail") && (
          <div className="h-[8vw] flex flex-col gap-2">
            <div
              className={`p-0.5 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540] flex items-center `}
            >
              <input
                type="text"
                className=" w-full focus:outline-none bg-transparent"
                value={businessInfoFormData.email}
                onChange={(e) =>
                  setBusinessInfoFormData({
                    ...businessInfoFormData,
                    email: e.target.value,
                  })
                }
              />
              {verifiedEmail ? (
                <div className="p-[0.5vw] flex items-center justify-center gap-1">
                  <div className="text-[1vw] text-green-600 flex items-center justify-center">
                    <div>Verified</div>
                  </div>
                  <div className="w-[1vw] h-[1vw]  bg-green-600 rounded-full text-white flex items-center justify-center">
                    <FaCheck className="w-[0.5vw]" />
                  </div>
                </div>
              ) : (
                <>
                  {emailVerification ? (
                    <button
                      onClick={() => {
                        setEmailVerification(false);
                      }}
                      className="py-[0.5vw] w-[12vw]  rounded-md bg-[#DC3545] hover:bg-[#f3283c] text-[#ffffff]"
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <button
                      onClick={() => setEmailVerification(true)}
                      className="py-[0.5vw] w-[12vw]  rounded-md bg-[#DC3545] hover:bg-[#f3283c] text-[#ffffff]"
                    >
                      Send OTP
                    </button>
                  )}
                </>
              )}
            </div>
            {emailVerification && (
              <SendVerifyOTP verifiedOtp={handleEnteredOtp} />
            )}
          </div>
        )}

        {/* Mobile Number Input */}
        {input.includes("Mobile") && (
          <div className="h-[8vw] flex flex-col gap-2">
            <div
              className={`p-0.5 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540] flex items-center `}
            >
              <input
                type="text"
                className=" w-full focus:outline-none bg-transparent"
                value={businessInfoFormData.mobile_no}
                onChange={(e) =>
                  setBusinessInfoFormData({
                    ...businessInfoFormData,
                    mobile_no: e.target.value,
                  })
                }
              />
              {verifiedEmail ? (
                <div className="p-[0.5vw] flex items-center justify-center gap-1">
                  <div className="text-[1vw] text-green-600 flex items-center justify-center">
                    <div>Verified</div>
                  </div>
                  <div className="w-[1vw] h-[1vw]  bg-green-600 rounded-full text-white flex items-center justify-center">
                    <FaCheck className="w-[0.5vw]" />
                  </div>
                </div>
              ) : (
                <>
                  {emailVerification ? (
                    <button
                      onClick={() => {
                        setEmailVerification(false);
                      }}
                      className="py-[0.5vw] w-[12vw] text-[1vw]  rounded-md bg-[#DC3545] hover:bg-[#f3283c] text-[#ffffff]"
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <button
                      onClick={() => setEmailVerification(true)}
                      className="py-[0.5vw] w-[12vw] text-[1vw] rounded-md bg-[#DC3545] hover:bg-[#f3283c] text-[#ffffff]"
                    >
                      Send OTP
                    </button>
                  )}
                </>
              )}
            </div>
            {emailVerification && (
              <SendVerifyOTP verifiedOtp={handleEnteredOtp} />
            )}
          </div>
        )}
      </div>

      {/* Upload Restaurant Image */}
      <div className={` ${index != 10 && "hidden"}`}>
        <UploadImageInput
          input={input}
          uploadedImage={handleSetRestaurantImage}
        />
      </div>
    </>
  );
};

export default BusinessInfoFormContent;
