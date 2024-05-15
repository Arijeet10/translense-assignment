"use client"; 

import { useContext, useState } from "react";
import DropdownInput from "./DropdownInput";
import UploadImageInput from "./UploadImageInput";
import { StateListContext } from "@/context/StateListProvider";
import { FaCheck } from "react-icons/fa";
import SendVerifyOTP from "./SendVerifyOTP";

interface Props {
  input: string;
  index: number;
}

const OwnerDetailsForm: React.FC<Props> = ({ input, index }) => {


  const { stateList } = useContext(StateListContext);


  const [verifiedEmail, setverifiedEmail] = useState(false);

  const [emailVerification, setEmailVerification] = useState(false);

  //handle entered otp
  const handleEnteredOtp = (enteredOtp: string[]) => {
    console.log(enteredOtp);
    if(enteredOtp){
      setverifiedEmail(true)
      setEmailVerification(false)
    }
  };

    //set state to form data
    const handleSetState = (state: string) => {
      if (state) {
      }
    };

    //set uploaded profile pic to form data
    const handleSetProfilePic = (image: string) => {
      if (image) {

      }
    };

  return (
    <>
      <div className={` flex flex-col gap-2 ${input.includes("Address") && "col-span-2"} ${input.includes("pic") && "row-span-2"}`}>


        {/* Label Section */}
        <div className={`flex items-center justify-between ${input.includes("pic") && "hidden"}`}>
          <div className="text-[1.2vw] text-[#DA3545] font-medium">{input}</div>
          <div>
            <img src="/help.svg" alt="help icon" className="w-[1.2vw]" />
          </div>
        </div>

        {/* Input Section */}

        {/* Full Name Input */}
        {input.includes("Name") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540]`}
          >
            <input
              type="text"
              placeholder="Eg. Prabhat Kumar, Sushma Singh"
              className="w-full focus:outline-none bg-transparent"
            />
          </div>
        )}

        {/* Profile Pic Input */}
        {input.includes("pic") && (
            <UploadImageInput input={input} uploadedImage={handleSetProfilePic} />
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
              className="w-full  focus:outline-none bg-transparent"
            />
          </div>
        )}

        {/* Country Input  */}
        {input.includes("Country") && (
          <div
          className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540]`}
        >
          <input
            type="text"
            className="w-full  focus:outline-none bg-transparent"
          />
        </div>
        )}

        {/* Address Input  */}
        {input.includes("Address") && (
          <div
            className={`p-1 text-[1vw] border border-[#12121216] rounded-md bg-[#E5E5E540] flex items-center`}
          >
            <input
              type="text"
              className=" w-full focus:outline-none bg-transparent"
            />
            <img src="/map-pin.svg" alt="map icon" className="w-[1.5vw]" />
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
                // value={businessInfoFormData.email}
                // onChange={(e) =>
                //   setBusinessInfoFormData({
                //     ...businessInfoFormData,
                //     email: e.target.value,
                //   })
                // }
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
                // value={businessInfoFormData.mobile_no}
                // onChange={(e) =>
                //   setBusinessInfoFormData({
                //     ...businessInfoFormData,
                //     mobile_no: e.target.value,
                //   })
                // }
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
    </>
  );
};

export default OwnerDetailsForm;
