import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {makeStyles} from "@material-ui/core/styles";

import {chooseCategory} from "../../store/actions/ChoosenCategory";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    listItem: {
        display: "inline",
        padding: "6px 15px",
        margin: "5px",
        border: "2px solid #F8F8F8",
        borderRadius: "6px",
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "16px",
        letterSpacing: "2px",
    },
}));

const CategoriesPanel = ({chooseCategory, chosenCategory}) => {
    const classes = useStyles();

    const [categories, setCategories] = useState([]);
    const [isDataLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCategories();
    }, []);


    const getCategories = () => {
        axios
            .get("https://api.chucknorris.io/jokes/categories")
            .then(resp => {
                setCategories(resp.data);
                const [defaultCategory] = resp.data;
                chooseCategory(defaultCategory);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            {isDataLoading ? <Box display="flex" justifyContent="center"><CircularProgress/></Box> :
                <List className={classes.root}>
                    {categories.map((category, index) => {
                        return (
                            <ListItem
                                key={index + category}
                                className={classes.listItem}
                                button
                                selected={chosenCategory === category}
                                onClick={() => {
                                    chooseCategory(category)
                                }}
                            >
                                {category}
                            </ListItem>

                        )
                    })
                    }
                </List>
            }
        </>
    );
};


function mapStateToProps(state) {
    return {
        chosenCategory: state.categoriesReducer.chosenCategory,
    };
}

export default connect((mapStateToProps), {chooseCategory})(CategoriesPanel);