import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import InputBase from "@material-ui/core/InputBase";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

//  import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import JokeCard from "../Card";
import CategoriesPanel from "./CategoriesPanel";


const useStyles = makeStyles((theme) => ({
    button: {},
    root: {
        '&checked': {
            backgroundColor: 'black',
            color: 'black',
        },
    },
    checked: {},
}));

const FindPanel = ({chosenCategory}) => {
    const classes = useStyles();

    const [JokeData, setJokeData] = useState([]);
    const [searchParam, setSearchParam] = useState('random');
    const [freeSearchText, setFreeSearchText] = useState({query: ""});

    useEffect(() => {
        req("random");
    }, []);

    const searchChange = prop => event => {
        setFreeSearchText({...freeSearchText, [prop]: event.target.value});
    };

    const handleChange = (event) => {
        setSearchParam(event.target.value);
    };

    const search = () => {
        let query = "";
        if (searchParam === "random") {
            query = "random";
        } else if (searchParam === "categories") {
            query = `random?category=${chosenCategory}`
        } else {
            query = `search?query=${freeSearchText.query}`
        }
        req(query);
    };

    const req = (query) => {
        axios
            .get(`https://api.chucknorris.io/jokes/${query}`)
            .then(resp => {
                searchParam === "search" ? setJokeData(resp.data.result) : setJokeData([resp.data]) ;
            })
            .catch(err => {
                console.log(err);
            });
    };


    //     <ValidatorForm
    //     noValidate={false}
    //     onSubmit={search}
    //     onKeyPress={event => onEnter(event)}
    // >
    const formContent = () => {
    return(
        <FormControl component="fieldset">

            <RadioGroup aria-label="joke type" name="joke" value={searchParam} onChange={handleChange}>
                <FormControlLabel value="random" control={<Radio color="default" label="Random"/>} label="Random"/>
                <FormControlLabel value="categories" control={<Radio color="default"/>} label="From categories"/>
                {searchParam === "categories" && <CategoriesPanel/>}
                <FormControlLabel value="search" control={<Radio color="default"/>} label="Search"/>
                {searchParam === "search" &&

                    <InputBase
                        placeholder="Free text search..."
                        onChange={searchChange("query")}
                        inputProps={{'aria-label': 'search'}}
                        autoFocus
                        error={freeSearchText.query === ""}
                        // onError={setIsTooltipOpen(true)}
                        // error={freeSearchText.query===""}
                    />


               /* <TextValidator
                    placeholder="Free text search..."
                    onChange={searchChange("query")}
                    // inputProps={{'aria-label': 'search'}}
                    value={freeSearchText.query}

                    // variant="outlined"
                    // size="small"


                    // validators={["required", "matchRegexp:^[a-zA-Z0-9]{3,22}$"]}
                    // errorMessages={[
                    //     "This field is required",
                    //     "Please type 3-22 characters, including only latin letters and numbers",
                    // ]}
                    validators={["required", 'minNumber:3', 'maxNumber:20']}
                    errorMessages={[
                        "This field is required", "Minimum 3 characters",  "Max 20 characters",
                    ]}
                    />*/
                }
            </RadioGroup>
            <Button
                className={classes.button}
                type="submit"
                variant="contained"
                aria-label="find"
                onClick={search}
            >
                Get a joke
            </Button>
        </FormControl>

    )
    };

    return (
        <>
            <Typography component="h2">Hey!</Typography>
            <Typography component="h3">Let’s try to find a joke for you:</Typography>
            {formContent()}
            {JokeData.map((joke)=>{
                return <JokeCard key={joke.id} jokeInfo={joke}/>
            })}

        </>
    );
};

function mapStateToProps(state) {
    return {
        chosenCategory: state.categoriesReducer.chosenCategory,
    };
}

export default connect(mapStateToProps)(FindPanel);
