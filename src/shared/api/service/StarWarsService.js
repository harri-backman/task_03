import http from '../StarWarsAPI'


const searchForStarWarsPeople = (userSearch) => {
    return http.get(`/${userSearch}`)
}

export default {
    searchForStarWarsPeople
}
