"use client";

import { useState } from "react";

import BusinessInfoForm from "./BusinessInfoForm";
import OnboardingSidebar from "./OnboardingSidebar";
import OwnerManagerDetails from "./OwnerManagerDetails";

const onboardingSection = [
  "Business Information",
  "Owner & Manager Details",
  "PAN/Aadhaar Details",
  "Legal Documents",
  "Bank Details",
  "Service Info",
  "Preview Document",
  "Reach Increased",
];

const OnboardingForm = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <div className="flex gap-8">
        {/* Sidebar to navigate to form sections */}
        <div className="w-[50vw]">
          <OnboardingSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onboardingSection={onboardingSection}
          />
        </div>
        <div className="w-full">
          {activeSection == 0 ? <BusinessInfoForm setActiveSection={setActiveSection} /> : <OwnerManagerDetails />}
        </div>
      </div>
    </>
  );
};

export default OnboardingForm;
