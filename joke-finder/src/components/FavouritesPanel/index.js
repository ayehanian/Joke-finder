import React, {useEffect, useState} from "react";
import JokeCard from "../Card";
import axios from "axios";


const FavouritesPanel = () => {


    useEffect(() => {
        search()
    }, []);


    const [JokeData, setJokeData] = useState({});


    const search = () => {

        axios
            .get("https://api.chucknorris.io/jokes/random")
            .then(resp => {
                console.log(resp);
                setJokeData(resp.data)
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <div style={{border: "2px solid black"}}>
            <JokeCard jokeInfo={JokeData}/>
        </div>
    );
};

export default FavouritesPanel;