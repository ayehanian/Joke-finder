import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import {getRandomJoke, getRandomCategoryJoke, searchJokes} from "../../apiEndpoints";

import JokeCard from "../Card";
import CategoriesPanel from "./CategoriesPanel";
import Styles from "./styles";


const FindPanel = ({chosenCategory}) => {
    const classes = Styles();

    const [isDataLoading, setLoading] = useState(false);
    const [JokeData, setJokeData] = useState([]);
    const [searchJokeParam, setSearchJokeParam] = useState('random');
    const [freeSearchText, setFreeSearchText] = useState({query: ""});

    useEffect(() => {
        search();
    }, []);

    const searchChange = prop => event => {
        setFreeSearchText({...freeSearchText, [prop]: event.target.value});
    };

    const handleChange = (event) => {
        setSearchJokeParam(event.target.value);
    };

    const search = () => {
        setLoading(true);
        let response = "";
        if (searchJokeParam === "random") {
            response = getRandomJoke()
        } else if (searchJokeParam === "categories") {
            response = getRandomCategoryJoke(chosenCategory)
        } else {
            response = searchJokes(freeSearchText.query)
        }
        response.then(resp => {
            searchJokeParam === "search" ? setJokeData(resp.data.result) : setJokeData([resp.data]);
            setLoading(false);
        })
            .catch(err => {
                console.error(err);
            });
    };

    const keyChecking = (event) => {
        if (event.keyCode === 13) {
            search();
        }
    };

    const formContent = () => {
        return (

            <ValidatorForm
                noValidate={false}
                onSubmit={search}
                component="fieldset"
                className={classes.form}
                onKeyDown={(e) => keyChecking(e)}
            >
                <RadioGroup aria-label="joke type" name="joke" value={searchJokeParam} onChange={handleChange}>
                    <FormControlLabel value="random" control={<Radio color="default"/>} label="Random"/>
                    <FormControlLabel value="categories" control={<Radio color="default"/>} label="From categories"/>
                    {searchJokeParam === "categories" && <CategoriesPanel/>}
                    <FormControlLabel value="search" control={<Radio color="default"/>} label="Search"/>
                    {searchJokeParam === "search" &&
                    <TextValidator
                        placeholder="Free text search..."
                        onChange={searchChange("query")}
                        inputProps={{'aria-label': 'search'}}
                        autoFocus
                        value={freeSearchText.query}
                        validators={["required", "matchRegexp:^[a-zA-Z0-9]{3,25}"]}
                        errorMessages={[
                            "This field is required",
                            "Please type 3-25 characters, including only latin letters and numbers",
                        ]}
                    />
                    }
                </RadioGroup>
                <Button
                    type="submit"
                    variant="contained"
                    aria-label="find"
                >
                    Get a joke
                </Button>
            </ValidatorForm>

        )
    };

    let data;
    if (JokeData.length === 0) {
        data = <Typography variant="body1">Sorry, no results!</Typography>
    } else {
        data = JokeData.map((joke) => {
            return <JokeCard key={joke.id} jokeInfo={joke} variant="elevation"/>
        })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="h2">Hey!</Typography>
            <Typography variant="h3">Let’s try to find a joke for you:</Typography>
            {formContent()}
            {isDataLoading ? <Box display="flex" justifyContent="center"><CircularProgress/></Box> : data}
        </Box>
    );
};

function mapStateToProps(state) {
    return {
        chosenCategory: state.categoriesReducer.chosenCategory,
    };
}

export default connect(mapStateToProps)(FindPanel);

JokeCard.propTypes = {
    chosenCategory: PropTypes.string,
};