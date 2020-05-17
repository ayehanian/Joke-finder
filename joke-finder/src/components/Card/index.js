import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Box from "@material-ui/core/Box";
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Launch from '@material-ui/icons/Launch';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

import {addToFavourites, deleteFromFavourites} from "../../store/actions/Favourites";

import Timer from "../Timer";
import Styles from "./styles";


const JokeCard = ({jokeInfo, variant, favourites, addToFavourites, deleteFromFavourites}) => {
    const classes = Styles();


    const cardCategories = () => {
        if (jokeInfo.categories) {
            return (
                jokeInfo.categories.map((category, index) => {
                    return <Typography
                        key={index + category}
                        component="span"
                        variant="subtitle1"
                        className={`${classes.categoryBox} ${variant === "outlined" ? classes.greyBackgroundColor : null}`}
                    >
                        {category}
                    </Typography>;
                })
            )
        } else {
            return null
        }
    };

    const isInFav = (card) => {
        return favourites.find((element) => element.id === card.id);
    };

    const toggleCardToFav = card => {
        isInFav(card) === undefined ? addToFavourites(card) : deleteFromFavourites(card)
    };

    const jokeUppercase = value => {
        return  value[0].toUpperCase() + value.slice(1);
    };

    const cardContent = () => {
        return (
            <Card className={classes.root} variant={variant}>
                <IconButton className={classes.heartBtn} aria-label="Favorite Icon"
                            onClick={() => toggleCardToFav(jokeInfo)}>
                    {isInFav(jokeInfo) === undefined ? <FavoriteBorderIcon className={classes.heartIcon}/> :
                        <FavoriteIcon className={classes.heartIcon}/>}
                </IconButton>
                <CardContent className={classes.content}>
                    <Box>
                        {variant === "outlined" ?
                            <IconButton
                                aria-label="Message Icon"
                                disabled
                                classes={{
                                    root: classes.chatBtn,
                                    disabled: classes.disabled,
                                }}
                            >
                                <ChatOutlinedIcon/>
                            </IconButton>
                            :
                            <IconButton
                                aria-label="Message Icon"
                                disabled
                                classes={{
                                    root: classes.chatDarkBtn,
                                    disabled: classes.disabled,
                                }}
                            >
                                <ChatOutlinedIcon/>
                            </IconButton>
                        }
                    </Box>
                    <Box className={classes.text}>
                        <Typography variant="subtitle1">
                            ID:
                            <Link href={jokeInfo.url} target="_blank" rel="noreferrer" className={classes.idLink}>
                                {jokeInfo.id}
                                <Launch className={classes.idLinkIcon}/>
                            </Link>
                        </Typography>
                        <Typography variant={variant === "outlined" ? "body2" : "body1"}
                                    className={variant === "outlined" ? null : classes.jokeValue}>
                            {jokeUppercase(jokeInfo.value)}
                        </Typography>
                        <Box className={classes.cardFooter}>
                            <Typography variant="subtitle1">
                                Last update:&nbsp;
                                <Timer updated={jokeInfo.updated_at}/>
                                &nbsp;hours ago
                            </Typography>
                            {cardCategories()}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        )
    };

    return (
        <>
            {jokeInfo === undefined ? null : cardContent()}
        </>
    );
};


function mapStateToProps(state) {
    return {
        favourites: state.favouritesReducer.favourites,
    };
}

export default connect(mapStateToProps, {addToFavourites, deleteFromFavourites})(
    JokeCard
);

JokeCard.propTypes = {
    jokeInfo: PropTypes.object,
    variant: PropTypes.string,
    favourites: PropTypes.array,
    addToFavourites: PropTypes.func,
    deleteFromFavourites: PropTypes.func,
};