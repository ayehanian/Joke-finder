import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import InputBase from "@material-ui/core/InputBase";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
//  import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {makeStyles} from "@material-ui/core/styles";

import JokeCard from "../Card";
import CategoriesPanel from "./CategoriesPanel";


const useStyles = makeStyles((theme) => ({

    root: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(7.8, 2, 7.1),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(7.8, 4, 7.1),
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(7.8, 14, 14),
        },
    },

    form: {
        padding: theme.spacing(4.3, 0, 2),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(4.3, 0, 4),
        },
    },

}));

const FindPanel = ({chosenCategory}) => {
    const classes = useStyles();

    const [isDataLoading, setLoading] = useState(false);
    const [JokeData, setJokeData] = useState([]);
    const [searchJokeParam, setSearchJokeParam] = useState('random');
    const [freeSearchText, setFreeSearchText] = useState({query: ""});

    useEffect(() => {
        req("random");
    }, []);

    const searchChange = prop => event => {
        setFreeSearchText({...freeSearchText, [prop]: event.target.value});
    };

    const handleChange = (event) => {
        setSearchJokeParam(event.target.value);
    };

    const search = () => {
        setLoading(true);
        let query = "";
        if (searchJokeParam === "random") {
            query = "random";
        } else if (searchJokeParam === "categories") {
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
                searchJokeParam === "search" ? setJokeData(resp.data.result) : setJokeData([resp.data]);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const keyChecking = (event) => {
        if (event.keyCode === 13) {
        search();
        }
    };
    //     <ValidatorForm
    //     noValidate={false}
    //     onSubmit={search}
    //     onKeyPress={event => onEnter(event)}
    // >
    const formContent = () => {
        return (
            <FormControl component="fieldset" className={classes.form} onKeyDown={(e) => keyChecking(e)}>
                <RadioGroup aria-label="joke type" name="joke" value={searchJokeParam} onChange={handleChange}>
                    <FormControlLabel value="random" control={<Radio color="default"/>} label="Random"/>
                    <FormControlLabel value="categories" control={<Radio color="default"/>} label="From categories"/>
                    {searchJokeParam === "categories" && <CategoriesPanel/>}
                    <FormControlLabel value="search" control={<Radio color="default"/>} label="Search"/>
                    {searchJokeParam === "search" &&

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
        <Box className={classes.root}>
            <Typography variant="h2">Hey!</Typography>
            <Typography variant="h3">Let’s try to find a joke for you:</Typography>

            {formContent()}

            {isDataLoading ? <Box display="flex" justifyContent="center"><CircularProgress/></Box> :
                JokeData.map((joke) => {
                    return <JokeCard key={joke.id} jokeInfo={joke} variant="elevation"/>
                })
            }
        </Box>
    );
};

function mapStateToProps(state) {
    return {
        chosenCategory: state.categoriesReducer.chosenCategory,
    };
}

export default connect(mapStateToProps)(FindPanel);
