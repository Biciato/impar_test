import Icon from "../assets/images/icone.svg"
import TrashIcon from "../assets/images/Icon-trash.svg"
import EditIcon from "../assets/images/Icon-edit.svg"
import "../styles/SearchResultsCards.css"

const TRASH_LABEL = "Excluir"
const EDIT_LABEL = "Editar"
const EMPTY_ARRAY_WARN = "Nenhum item encontrado"

function SearchResultCard({ onButtonClick, item }) {
    return (
        <div className="search-result-card" data-testid="search-result-card">
            <div className="search-result-card-content">
                <div className="search-result-card-avatar">
                    <img src={Icon} alt={item.name} />
                </div>
                <div className="divider" />
                <p className="search-result-card-description">{item.name}</p>
            </div>
            <div className="search-result-card-actions">
                <button className="search-result-card-button" onClick={onButtonClick} >
                    <img src={TrashIcon} alt="trash icon" />
                    <span className="search-result-card-span" >{TRASH_LABEL}</span>
                </button>
                <button className="search-result-card-button" onClick={onButtonClick} >
                    <img src={EditIcon} alt="edit icon" />
                    <span className="search-result-card-span" >{EDIT_LABEL}</span>
                </button>
            </div>
        </div>
    )
}

export default function SearchResultsCards({ items, onButtonClick }) {
    return (
        <div className="search-result-cards-container">
            {items.length === 0 && <h3>{EMPTY_ARRAY_WARN}</h3>}
            {items.map((item, index) => 
                <SearchResultCard key={`${item.name}-${index}`} item={item} onButtonClick={onButtonClick} />
            )}
        </div>
    )
}