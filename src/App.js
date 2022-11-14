import { useState } from "react"
import SearchContainer from './components/SearchContainer';
import SearchResults from './components/SearchResults';
import Topbar from './components/Topbar';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div>
      <Topbar />
      <SearchContainer onSearchChange={value => setSearch(value)} value={search} />
      <SearchResults search={search} />
    </div>
  );
}

export default App;
