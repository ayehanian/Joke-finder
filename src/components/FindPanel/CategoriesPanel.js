import React, {useEffect} from "react";
import {connect} from "react-redux";

import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CircularProgress from "@material-ui/core/CircularProgress";

import {getCategories, chooseCategory} from "../../store/actions/Categories";

import Styles from "./styles";


const CategoriesPanel = ({getCategories, chooseCategory, isLoading, categories, chosenCategory}) => {
    const classes = Styles();


    useEffect(() => {
        getCategories();
    }, [getCategories]);


    return (
        <>
            {isLoading ? <Box display="flex" justifyContent="center"><CircularProgress/></Box> :
                <List className={classes.list}>
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
        categories: state.categoriesReducer.categories,
        isLoading: state.categoriesReducer.isLoading,
    };
}

export default connect((mapStateToProps), {getCategories, chooseCategory})(CategoriesPanel);