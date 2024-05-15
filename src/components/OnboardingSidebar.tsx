import { SetStateAction } from "react";


interface Props {
  onboardingSection: string[];
  activeSection:number;
  setActiveSection:React.Dispatch<SetStateAction<number>>
}

const OnboardingSidebar: React.FC<Props> = ({ onboardingSection,activeSection,setActiveSection }) => {

  return (
    <>
      <div className=" px-4 py-8 rounded-lg  bg-[#FFD098] text-[#121212] flex flex-col gap-6">

        {/* Sidebar Heading and description texts */}
        <div className="flex flex-col gap-2">
          <div className=" text-[3vw] font-semibold">Partner with us</div>
          <div className="text-[#12121264] text-[1.5vw]">
            Be our partner in just few steps and start Increasing your reach by
            gaining new customers.
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {onboardingSection.map((item, i) => {
            return (

              // Individual Section Progress and Navigation
              <div key={i} className="flex flex-col items-start">
                <div className=" flex items-center gap-2">
                  <div className="relative">
                    <div
                      className={`   w-[1vw] h-[1vw] p-[2vw] z-50 text-[1.5vw]  rounded-full flex items-center justify-center ${
                        activeSection == i ? "bg-[#DC3545] " : "bg-[#ffffff]  "
                      }   `}
                    >
                      <div
                        className={`${
                          activeSection == i
                            ? "text-[#ffffff] font-bold"
                            : "text-[#121212] font-normal"
                        }`}
                      >
                        {i + 1}
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-2/4 translate-x-[-50%] translate-y-[100%]  border-l border-dashed h-10 ${
                        activeSection == i
                          ? "border-[#DC3545]"
                          : "border-[#12121216]"
                      } ${i == 7 && "hidden"}`}
                    />
                  </div>

                  <div
                    onClick={() => setActiveSection(i)}
                    className={`${
                      activeSection == i
                        ? "font-medium text-[#121212]"
                        : "text-[#12121264]"
                    } cursor-pointer text-[1.5vw]`}
                  >
                    {item}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OnboardingSidebar;
