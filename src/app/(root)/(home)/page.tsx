import HomePageTopCard from "@/components/HomePageTopCard";
import MeetingCardsContainer from "@/components/MeetingCardsContainer";

const Home = () => {
  return (
    <div className="text-white w-[calc(100vw-88px)] md:w-[calc(100vw-300px)] mx-auto">
      <HomePageTopCard />
      <MeetingCardsContainer />
    </div>
  );
};

export default Home;
