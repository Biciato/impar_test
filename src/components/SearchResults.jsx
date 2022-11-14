import SearchResultsCards from "./SearchResultsCards"
import "../styles/SearchResults.css"
import { useEffect, useState } from "react"
import { getApiData } from "../services/api"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactLoading from 'react-loading'

const SEARCH_RESULT_TITLE = "Resultado de busca"
const NEW_CARD_TEXT = "Novo Card"
const LOADING_TYPE = "spin"

export default function SearchResults({ search }) {
    const [items, setItems] = useState([])
    const [pagination, setPagination] = useState(20)
    const [loading, setLoading] = useState(false)
    const filteredList = items.filter(item => search === "" ? true : item.name.includes(search))
    useEffect(() => {
        const getApiItems = () => {
            setLoading(true)
            getApiData('item', pagination)
                .then(response => response.json())
                .then(_items => {
                    setItems([...items, ..._items.results])
                    setLoading(false)
                })
        }
        getApiItems()
    }, [pagination])
    function onLoadMore() {
        setPagination(pagination + 20)
    }
    function handleButtonClick() {
        toast.warn("Funcionalidade ainda não implementada!", {
        position: toast.POSITION.TOP_CENTER
      })
    }
    return (
        <div className="search-results-container">
            <div className="sr-header">
                <h1>{SEARCH_RESULT_TITLE}</h1>
                <button className="new-card-btn" onClick={handleButtonClick}>
                    {NEW_CARD_TEXT}
                </button>
            </div>
            <SearchResultsCards items={filteredList} onButtonClick={handleButtonClick} />
            {!loading && filteredList.length > 0 && 
                <button onClick={onLoadMore} className="load-more-btn">
                    Carregar Mais...
                </button>
            }
            {loading && <ReactLoading type={LOADING_TYPE} color="#92207242" height="5%" width="5%" />}
            <ToastContainer hideProgressBar />
        </div>
    )
}