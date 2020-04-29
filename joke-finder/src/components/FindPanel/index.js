import React, {useEffect, useState} from "react";
import axios from "axios";
import JokeCard from "../Card";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import theme from "../../theme";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CustomizedSearch from "../Search";

const useStyles = makeStyles((theme) => ({
    // checked: {
    //     backgroundColor: 'black',
    //     color: 'black',
    // },
    button: {
        // background: "linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)",
        // borderRadius: "10px",
        // width: "152px",
        // height: "42px",
        // fontWeight: "bold",
        // fontSize: "16px",
        // color: "#FFFFFF"
    },
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
        getCategories();
        search();
    }, []);

    const [categories, setCategories] = useState([]);
    const [JokeData, setJokeData] = useState({});
    const [searchParam,setSearchParam] = useState('random');

    const handleChange = (event) => {
        setSearchParam(event.target.value);
    };

    const getCategories = () => {
        axios
            .get("https://api.chucknorris.io/jokes/categories")
            .then(resp => {
                setCategories(resp.data)
            })
            .catch(err => {
                console.log(err);
            });
    };
    // const search = () => {
    //     console.log(searchParam);
    //     axios
    //         .get("https://api.chucknorris.io/jokes/random?category=dev")
    //         .then(resp => {
    //             console.log(resp);
    //             setJokeData(resp.data)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    const search = () => {
        console.log(searchParam);
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
        <div>
            <Typography component="h2">Hey!</Typography>
            <Typography component="h3">Let’s try to find a joke for you:</Typography>
            <FormControl component="fieldset">
                <RadioGroup aria-label="joke type" name="joke" value={searchParam} onChange={handleChange}>
                    <FormControlLabel value="random" control={<Radio color="default" label="Random"/>} label="Random"/>
                    <FormControlLabel value="categories" control={<Radio color="default"/>} label="From categories"/>
                    {searchParam ==="categories" &&
                        categories.map((category, index)=>{
                        return(  <Button key={index+category} variant="text">{category}</Button>)
                    })
                    }
                    <FormControlLabel value="search" control={<Radio color="default"/>} label="Search"/>
                    {searchParam ==="search" && <CustomizedSearch/> }
                </RadioGroup>
            </FormControl>
            <Button
                className={classes.button}
                type="submit"
                variant="contained"
                aria-label="find"
                onClick={search}
            >
                Get a joke
            </Button>
            <JokeCard jokeInfo={JokeData}/>
        </div>
    );
};

export default FindPanel;