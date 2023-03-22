import { useWidgetContext } from './WidgetContext';
import Card from '../components/Card';
import S from '../components/Search';

function Search() {
  const { location, size } = useWidgetContext();
  return (
    <Card location={location} size={size}>
      <S name="gugu" url="https://google.com" />
    </Card>
  );
}

export default Search;
