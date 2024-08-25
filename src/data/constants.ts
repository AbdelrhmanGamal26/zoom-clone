import home from "../../public/icons/Home.svg";
import upcoming from "../../public/icons/upcoming.svg";
import previous from "../../public/icons/previous.svg";
import recordings from "../../public/icons/recordings.svg";
import personalRoom from "../../public/icons/add-personal.svg";

export const sideMenuLinks = [
  {
    title: "Home",
    url: "/",
    icon: home,
  },
  {
    title: "Upcoming",
    url: "/upcoming",
    icon: upcoming,
  },
  {
    title: "Previous",
    url: "/previous",
    icon: previous,
  },
  {
    title: "Recordings",
    url: "/recordings",
    icon: recordings,
  },
  {
    title: "Personal Room",
    url: "/personal-room",
    icon: personalRoom,
  },
];

export type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

export const LAYOUT_ITEMS = {
  GRID: "grid",
  SPEAKER_LEFT: "speaker-left",
  SPEAKER_RIGHT: "speaker-right",
};

export const MEETING_CARD_TYPE = {
  PREVIOUS: "previous",
  UPCOMING: "upcoming",
  RECORDINGS: "recordings",
};
