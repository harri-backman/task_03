import React, { useState, useEffect } from "react"
import "./browserView.css"
import PokemonService from "../../shared/api/service/PokemonService"
import StarWarsService from "../../shared/api/service/StarWarsService"


export const BrowserView = () => {

    const [data, setData] = useState()
    const [search, setSearch] = useState("")

    const fetchDataFromPokemonAPI = () => {
        PokemonService.searchForPokemon(search.toLowerCase())
            .then((response) => setData(response.data))
            .catch((error) => setData(null))
    }

    const fetchDataFromStarWarsAPI = () => {
        StarWarsService.searchForStarWarsPeople(search.toLowerCase())
            .then((response) => setData(response.data))
            .catch((error) => setData(null))
    }

    const displayData = () => {
        
        if (data && data !== "") {
            return (
                <div className = "browserResult">
                    <h3>name: {data.name}</h3>
                    <h3>height: {data.height}</h3>

                    <h3>id: {data.id}</h3>
                
                    <h3>weight: {data.weight}{data.mass}</h3>
                </div>
            )
        } else {
            return (
                <div className = "browserResult">
                    <h3>Please, type a movie character number and press the call button</h3>
                </div>
            )
        }
        
    }

    useEffect(() => {
        alert("Start playing demo (music/video) as long as browser view is active")
        return () => alert("Stop playing")
      }, [])

    return (
        <div className = "browserContainer">
            <h1 className = "browserTitle">Library Browser</h1>

            <p className = "browserInputLabel">Movie Character (number):</p>

            <input className = "browserInput" id="browserInput" onChange={
                (e) => setSearch(e.target.value)} /><br />

            <button className = "browsePokemonButton" onClick={
                () => fetchDataFromPokemonAPI()}>Pokemon call</button>

            <button className = "browseStarWarsButton" onClick={
                () => fetchDataFromStarWarsAPI()}>StarWars call</button>

            {displayData()}

        </div>
    )
}
