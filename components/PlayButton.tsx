import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="flex translate-y-1/4 items-center justify-center rounded-full bg-[#1db954] p-4 opacity-0 drop-shadow-md transition hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
