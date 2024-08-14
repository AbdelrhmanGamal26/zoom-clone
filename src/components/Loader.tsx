import Image from "next/image";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image
        src="/icons/loading-circle.svg"
        alt="loading..."
        width={40}
        height={40}
      />
    </div>
  );
};

export default Loader;
