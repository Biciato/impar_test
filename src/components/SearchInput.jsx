import "../styles/SearchInput.css"
import SearchIcon from "../assets/images/lupa.svg"

const PLACEHOLDER_TEXT = "Digite aqui sua busca..."

export default function SearchInput({ onSearchChange, value }) {
    return (
        <div className="search-input-container">
            <input placeholder={PLACEHOLDER_TEXT} value={value} onChange={onSearchChange}  />
            <img src={SearchIcon} alt="Search Icon" className="search-img" />
        </div>
    )
}