import React, {useState} from "react";
import axios from "axios";
import InputBase from "@material-ui/core/InputBase";


const CustomizedSearch = () => {

    const [text, setText] = useState({query: ""});

    // const [enter, setEnter] = useState(false);

    function search() {
        axios
            .get(`https://api.chucknorris.io/jokes/search?query=${text.query}`)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const searchChange = prop => event => {
        setText({...text, [prop]: event.target.value});
    };


    return (
        <>
            <InputBase
                placeholder="Free text search..."
                onChange={searchChange("query")}
                inputProps={{'aria-label': 'search'}}
            />
            <button onClick={search}>go</button>
        </>
    );
};

export default CustomizedSearch;
