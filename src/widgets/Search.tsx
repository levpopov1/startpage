import Card from '../components/Card';
import S from '../components/Search';

type WidgetProps = {
  location: {
    column: number;
    row: number;
  };
  size: {
    width: number;
    height: number;
  };
};

function Search({ location, size }: WidgetProps) {
  return (
    <Card location={location} size={size}>
      <S name="gugu" url="https://google.com" />
    </Card>
  );
}

export default Search;
