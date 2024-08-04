import home from "../../public/icons/Home.svg"
import upcoming from "../../public/icons/upcoming.svg"
import previous from "../../public/icons/previous.svg"
import recordings from "../../public/icons/recordings.svg"
import personalRoom from "../../public/icons/add-personal.svg"
import newMeeting from "../../public/icons/add-meeting.svg"
import joinMeeting from "../../public/icons/join-meeting.svg"
import scheduleMeeting from "../../public/icons/schedule.svg"
import viewRecordings from "../../public/icons/recordings.svg"

export const sideMenuLinks = [
  {
    title: "Home",
    url: "/",
    icon: home
  },
  {
    title: "Upcoming",
    url: "/upcoming",
    icon: upcoming
  },
  {
    title: "Previous",
    url: "/previous",
    icon: previous
  },
  {
    title: "Recordings",
    url: "/recordings",
    icon: recordings
  },
  {
    title: "Personal Room",
    url: "/personal-room",
    icon: personalRoom
  },
]

  export const meetingCardsData = [
    {
      title: "New Meeting",
      description: "Setup a new recording",
      icon: newMeeting,
      cardBgColor: "#FF742E",
    },
    {
      title: "Join Meeting",
      description: "Via invitation link",
      icon: joinMeeting,
      cardBgColor: "#0E78F9",
    },
    {
      title: "Schedule Meeting",
      description: "Plan your meeting",
      icon: scheduleMeeting,
      cardBgColor: "#830EF9",
    },
    {
      title: "View Recordings",
      description: "Meeting recordings",
      icon: viewRecordings,
      cardBgColor: "#F9A90E",
    },
  ]