import HeroBanner from "@/components/HeroBanner";
import OnboardingForm from "@/components/OnboardingForm";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <HeroBanner />
        </div>
        <div className="p-8">
          <OnboardingForm />
        </div>
      </div>
    </>
  );
};

export default Home;
