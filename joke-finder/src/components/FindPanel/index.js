import React, {useEffect, useState} from "react";
import axios from "axios";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormGroup from '@material-ui/core/FormGroup';

import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import JokeCard from "../Card";
import CustomizedSearch from "../Search";
import CategoriesPanel from "./CategoriesPanel";


const useStyles = makeStyles((theme) => ({
    // checked: {
    //     backgroundColor: 'black',
    //     color: 'black',
    // },
    button: {},
    root: {
        '&checked': {
            backgroundColor: 'black',
            color: 'black',
        },
    },
    checked: {},
}));

const FindPanel = () => {
    const classes = useStyles();

    useEffect(() => {
        // getCategories();
        // search();
        req("random");
    }, []);

    const [JokeData, setJokeData] = useState({});
    // const [categories, setCategories] = useState([]);
    const [searchParam, setSearchParam] = useState('random');
    // const [chosenCategory, setChosenCategory] = useState("animal");

    const handleChange = (event) => {
        setSearchParam(event.target.value);
    };
    // const handleChange2 = (event) => {
    //     setChosenCategory(event.target.value);
    //     console.log(chosenCategory);
    // };

    // const getCategories = () => {
    //     axios
    //         .get("https://api.chucknorris.io/jokes/categories")
    //         .then(resp => {
    //             setCategories(resp.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    const search = () => {
        let query = "";
        if (searchParam === "random") {
            query = "random";
        } else if (searchParam === "categories") {
            // query = `random?category=${chosenCategory}`
        }
        req(query);

    };

    const req = (query) => {
        axios
            .get(`https://api.chucknorris.io/jokes/${query}`)
            .then(resp => {
                // console.log(resp);
                setJokeData(resp.data)
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <Typography component="h2">Hey!</Typography>
            <Typography component="h3">Let’s try to find a joke for you:</Typography>
            {/*<form onSubmit={search}>*/}
            <FormControl component="fieldset">
                <RadioGroup aria-label="joke type" name="joke" value={searchParam} onChange={handleChange}>
                    <FormControlLabel value="random" control={<Radio color="default" label="Random"/>} label="Random"/>
                    <FormControlLabel value="categories" control={<Radio color="default"/>} label="From categories"/>
                    {searchParam === "categories" && <CategoriesPanel/>}
                    <FormControlLabel value="search" control={<Radio color="default"/>} label="Search"/>
                    {searchParam === "search" && <CustomizedSearch/>}
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
            {/*</form>*/}

            <JokeCard jokeInfo={JokeData}/>
        </>
    );
};

export default FindPanel;