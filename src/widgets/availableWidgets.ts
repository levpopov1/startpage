import ImageOfTheDay from './ImageOfTheDay';
import Search from './Search';
import Time from './Time';
import UserProfile from './UserProfile';

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
