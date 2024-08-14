import Image from "next/image";

const RecordingStateLoader = () => {
  return (
    <div className="w-[26px] h-[26px] flex justify-center items-center">
      <Image
        src="/icons/loading-circle.svg"
        alt="loading..."
        width={24}
        height={24}
      />
    </div>
  );
};

export default RecordingStateLoader;
