import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Launch from '@material-ui/icons/Launch';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import {connect} from "react-redux";
import {addToFavourites, deleteFromFavourites} from "../../store/actions/Favourites";


const useStyles = makeStyles((theme) => ({
        root: {},
        heartIcon: {
            color: theme.palette.primary.favourite
        },
        fav: {
            backgroundColor: theme.palette.primary.favourite
        },
        idLink: {
            // "&:after": {
            //     content: "url('/images/external.png')",
            //     paddingLeft: "5px"
            // }
        }
    }))
;


const JokeCard = ({jokeInfo, favourites, addToFavourites, deleteFromFavourites}) => {
    const classes = useStyles();

    const calcHours = date => {
        let hours = Date.now() - Date.parse(date);
        return Math.round(hours / 3600000);
    };

    const cardCategories = () => {
        if (jokeInfo.categories) {
            return (
                jokeInfo.categories.map((category, index) => {
                    return <p key={index + category}>{category}</p>;
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

    const cardContent = () => {
        return (
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <IconButton aria-label="Favorite Icon" onClick={() => toggleCardToFav(jokeInfo)}>
                            {isInFav(jokeInfo) === undefined ? <FavoriteBorderIcon className={classes.heartIcon}/> :
                                <FavoriteIcon className={classes.heartIcon}/>}
                        </IconButton>
                        <IconButton aria-label="Message Icon">
                            <ChatOutlinedIcon/>
                        </IconButton>
                        <Typography component="h5" variant="h5" className={classes.idLink}>
                            ID:{jokeInfo.id}
                            <Launch/>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {jokeInfo.value}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Last update: {calcHours(jokeInfo.updated_at)} hours ago
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {cardCategories()}
                        </Typography>
                    </CardContent>
                </div>
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