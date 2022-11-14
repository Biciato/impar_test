import SearchInput from "./SearchInput"
import "../styles/SearchContainer.css"
import Background from "../assets/images/background-image.png"

export default function SearchContainer({ search, onSearchChange }) {
    return (
        <div className="search-container" style={{background: `no-repeat center/100% url(${Background})`}}>
            <SearchInput value={search} onSearchChange={e => onSearchChange(e.target.value)}/>
        </div>
    )
}