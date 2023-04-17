import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TvIcon from "@mui/icons-material/Tv";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const itemArray = [
  {
    name: "Friends",
    icon: <PeopleIcon sx={{ color: " rgba(19, 19, 231, 0.903)" }} />,
  },
  {
    name: "Groups",
    icon: <GroupsIcon sx={{ color: " rgba(19, 19, 231, 0.903)" }} />,
  },
  {
    name: "MarketPlaces",
    icon: <StorefrontIcon sx={{ color: " rgba(19, 19, 231, 0.903)" }} />,
  },
  {
    name: "Watch",
    icon: <TvIcon sx={{ color: " rgba(19, 19, 231, 0.903)" }} />,
  },
  {
    name: "Events",
    icon: <CalendarMonthIcon sx={{ color: " rgba(19, 19, 231, 0.903)" }} />,
  },
  {
    name: "Memories",
    icon: <WatchLaterIcon sx={{ color: " rgba(19, 19, 231, 0.903)" }} />,
  },
  {
    name: "See More",
    icon: <KeyboardArrowDownOutlinedIcon />,
  },
];

const contacts = [
  {
    name: "Naruto",
    images: "/images/narouto.jpeg",
  },
  {
    name: "Hunter",
    images: "/images/one.jpeg",
  },
  {
    name: "Hisucka",
    images: "/images/two.jpeg",
  },
  {
    name: "Kurapika",
    images: "/images/tree.jpeg",
  },
  {
    name: "Kiloa",
    images: "/images/four.jpeg",
  },
];
const StoriesData = [
  {
    name: "Naruto",
    images: "/images/story1.jpeg",
    profile: "/images/narouto.jpeg",
  },
  {
    name: "Hunter",
    images: "/images/story2.jpeg",
    profile: "/images/one.jpeg",
  },
  {
    name: "Hisucka",
    images: "/images/story3.jpeg",
    profile: "/images/two.jpeg",
  },
  {
    name: "Kurapika",
    images: "/images/story4.jpeg",
    profile: "/images/tree.jpeg",
  },
];

export { itemArray, contacts, StoriesData };
