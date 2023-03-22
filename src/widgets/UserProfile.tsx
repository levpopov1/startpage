import { useWidgetContext } from './WidgetContext';
import Card from '../components/Card';
import Image from '../components/Image';

function UserProfile() {
  const { location, size } = useWidgetContext();
  return (
    <Card location={location} size={size}>
      <Image />
      <h3>username</h3>
    </Card>
  );
}

export default UserProfile;
