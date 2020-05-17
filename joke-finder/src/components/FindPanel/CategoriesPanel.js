import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CircularProgress from "@material-ui/core/CircularProgress";

import {chooseCategory} from "../../store/actions/ChoosenCategory";
import {getJokesCategories} from "../../apiEndpoints";
import Styles from "./styles";



const CategoriesPanel = ({chooseCategory, chosenCategory}) => {
    const classes = Styles();

    const [categories, setCategories] = useState([]);
    const [isDataLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getJokesCategories()
            .then(resp => {
                setCategories(resp.data);
                const [defaultCategory] = resp.data;
                chooseCategory(defaultCategory);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });

    }, [chooseCategory]);


    return (
        <>
            {isDataLoading ? <Box display="flex" justifyContent="center"><CircularProgress/></Box> :
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
    };
}

export default connect((mapStateToProps), {chooseCategory})(CategoriesPanel);