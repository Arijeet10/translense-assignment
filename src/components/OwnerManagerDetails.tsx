"use client";

import OwnerDetailsForm from "./OwnerDetailsForm";

const formInputs = [
  "Full Name *",
  "Profile pic *",
  "State *",
  "City *",
  "Country",
  "Address *",
  "E-mail *",
  "Mobile Number *",
];

const OwnerManagerDetails = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className=" flex flex-col h-full justify-between  ">
        <div className="flex flex-col gap-10">
          <div className=" text-[2.5vw] text-[#90212C] font-semibold">
            Owner & Manager Details
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <span className="px-[2vw] py-[0.5vw] text-[1.2vw] rounded-[15px] bg-[#90212C] text-[#ffffff]">
                Owner Details
              </span>
            </div>

            {/* Owner Details Form Section */}
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="w-full flex flex-col"
            >
              <div className="grid grid-cols-2 items-center justify-between gap-8">
                {formInputs.map((item: string, i) => {
                  return (
                    <OwnerDetailsForm key={i} input={item} index={i + 1} />
                  );
                })}
              </div>
            </form>
          </div>
        </div>

        {/* Fill Manager Details Confirmation */}
        <div className="text-[1.2vw] font-medium flex items-center gap-2">
          <div className="flex items-center gap-6">
            <div>Do you want to fill manager details?</div>
            <div>
              <button className="px-[2vw] py-[0.5vw] border border-[#DC3545] rounded-md text-[#DC3545] hover:bg-[#DC3545] hover:text-[#ffffff] ">
                Yes
              </button>
            </div>
          </div>
          <div>
            <button className=" px-[2vw] py-[0.5vw] border border-[#DC3545] rounded-md text-[#DC3545] hover:bg-[#DC3545] hover:text-[#ffffff]">
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerManagerDetails;
