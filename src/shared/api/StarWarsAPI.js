import Axios from "axios"

const StarWarsAPI = Axios.create({
    baseURL: "https://swapi.dev/api/people"
})

export default StarWarsAPI
