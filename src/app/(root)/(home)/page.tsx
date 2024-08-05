import HomePageTopCard from "@/components/HomePageTopCard";
import MeetingCardsContainer from "@/components/MeetingCardsContainer";

const Home = () => {
  return (
    <section className="text-white w-full lg:w-[calc(100vw-300px)] mx-0 sm:mx-6 lg:mx-auto">
      <HomePageTopCard />
      <MeetingCardsContainer />
    </section>
  );
};

export default Home;
