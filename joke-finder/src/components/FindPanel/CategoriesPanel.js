import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {makeStyles} from "@material-ui/core/styles";

import {chooseCategory} from "../../store/actions/ChoosenCategory";


const useStyles = makeStyles((theme) => ({
    root: {},
    listItem: {},
}));

const CategoriesPanel = ({chooseCategory, chosenCategory}) => {
    const classes = useStyles();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);


    const getCategories = () => {
        axios
            .get("https://api.chucknorris.io/jokes/categories")
            .then(resp => {
                setCategories(resp.data)
                const [defaultCategory]=resp.data;
                chooseCategory(defaultCategory);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
            <List className={classes.root}>
                {categories.map((category, index) => {
                        return (
                            <ListItem
                                key={index + category}
                                className={classes.listItem}
                                button
                                variant="text"
                                selected={chosenCategory === category}
                                onClick={()=>{chooseCategory(category)}}
                            >
                                {/*<Button*/}
                                {/*    variant="text"*/}
                                {/*    // onClick={event => {handleChange(event)}}  */}
                                {/*    */}
                                {/*>*/}
                                    {category}
                                {/*</Button>*/}
                            </ListItem>

                        )
                    })
                }
            </List>
    );
};


function mapStateToProps(state) {
    return {
        chosenCategory: state.categoriesReducer.chosenCategory,
    };
}

export default connect((mapStateToProps), { chooseCategory })(CategoriesPanel);