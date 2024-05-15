"use client";
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface Props {
  verifiedOtp: (otpData: string[]) => void;
}

const SendVerifyOTP: React.FC<Props> = ({ verifiedOtp }) => {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const [verified, setVerified] = useState(false);

  //otp verification
  useEffect(() => {
    console.log(otp);
    if (otp.every((digit) => digit !== "")) {
      //console.log(otp)
      verifiedOtp(otp);
      setVerified(true);
      console.log(verified);
    } else {
      setVerified(false);
    }
  }, [otp]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 4) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="p-[1vw] text-[1vw] rounded-md bg-[#DC3545] text-[#ffffff] flex items-center justify-center gap-4">
          {verified
            ? otp.map((value, index) => {
                return (
                  <div className="w-[1vw] text-center bg-transparent">
                    {value}
                  </div>
                );
              })
            : otp.map((value, index) => {
                return (
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-[1vw] text-center border-b border-[#ffffff] bg-transparent focus:outline-none"
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => {
                      inputs.current[index] = el;
                    }}
                  />
                );
              })}
        </div>
        <div className={`flex justify-end`}>
          {verified ? (
            <div className="w-[1vw] h-[1vw]  bg-green-600 rounded-full text-white flex items-center justify-center">
              <FaCheck className="w-[0.5vw]" />
            </div>
          ) : (
            <div className="text-[1.2vw] font-medium text-[#DC3545] ">
              Enter OTP (60sec)
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SendVerifyOTP;
