import { useState } from 'react';

type Props = {
  name: string;
  url: string;
};

function Search({ name, url }: Props) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `${url}/search?q=${query}`;
  };
  return (
    <div>
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
    </div>
  );
}

export default Search;
