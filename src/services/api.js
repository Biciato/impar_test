export function getApiData(data, page) {
    return fetch(`https://pokeapi.co/api/v2/${data}/?limit=${page}offset=${page}`)
}