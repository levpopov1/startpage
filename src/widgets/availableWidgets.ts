import ImageOfTheDay from './ImageOfTheDay/ImageOfTheDay';
import Search from './Search/Search';
import Time from './Time/Time';
import UserProfile from './UserProfile/UserProfile';

type AvailableWidgets = {
  [key: string]: () => JSX.Element;
};

const availableWidgets: AvailableWidgets = {
  imageOfTheDay: ImageOfTheDay,
  time: Time,
  search: Search,
  userProfile: UserProfile,
};

export default availableWidgets;
