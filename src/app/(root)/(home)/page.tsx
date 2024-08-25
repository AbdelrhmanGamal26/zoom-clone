import HomePageTopCard from "@/components/HomePageTopCard";
import MeetingCardsContainer from "@/components/MeetingCardsContainer";

const Home = () => {
  return (
    <div className="text-white w-full lg:w-[calc(100vw-300px)] mx-0 sm:mx-auto lg:mx-auto">
      <HomePageTopCard />
      <MeetingCardsContainer />
    </div>
  );
};

export default Home;
