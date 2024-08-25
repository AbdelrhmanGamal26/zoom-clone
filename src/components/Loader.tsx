import Image from "next/image";
import loadingCircle from "../../public/icons/loading-circle.svg";

const Loader = ({
  width = 40,
  height = 40,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image
        src={loadingCircle}
        alt="loading..."
        width={width}
        height={height}
      />
    </div>
  );
};

export default Loader;
