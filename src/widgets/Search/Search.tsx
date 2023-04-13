import { useState } from 'react';
import Card from '../components/Card';
import { useWidgetContext } from '../WidgetContext';

function Search() {
  const { attributes, name } = useWidgetContext();
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `${attributes.url}/search?q=${query}`;
  };
  return (
    <Card>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">
          search:
          <input
            type="text"
            id="searchInput"
            placeholder="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Card>
  );
}

export default Search;
