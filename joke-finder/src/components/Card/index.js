import React from "react";

import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import {Box} from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Launch from '@material-ui/icons/Launch';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import {makeStyles} from '@material-ui/core/styles';

import {connect} from "react-redux";
import {addToFavourites, deleteFromFavourites} from "../../store/actions/Favourites";


const useStyles = makeStyles((theme) => ({
        root: {
            padding: theme.spacing(1),
            margin: theme.spacing(2, 0),
            [theme.breakpoints.up("sm")]: {
                margin: theme.spacing(2, 0),
            },
            display: "flex",
            flexDirection: "column",
        },
        content: {
            display: "flex",
            padding: theme.spacing(0, 1, 1),
        },
        text: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        heartBtn: {
            alignSelf: "flex-end",

            // padding: theme.spacing( 2, 2, 1),
            // textAlign: "right",
        },
        heartIcon: {
            color: theme.palette.primary.favourite
        },

        chatBtn: {
            color: theme.palette.primary.main,
            marginRight: theme.spacing(2),
            '&$disabled': {
                backgroundColor: theme.palette.primary.light
            },
        },
        chatDarkBtn: {
            color: theme.palette.primary.main,
            marginRight: theme.spacing(2),
            '&$disabled': {
                backgroundColor: "#FFFFFF"
            },
        },
        disabled: {},



        categoryBox: {
            display: "inline-block",
            padding: theme.spacing(0.6, 2),
            marginTop: "10px",
            borderRadius: "6px",
            backgroundColor: "#FFFFFF",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
        },

        greyBackgroundColor: {
            backgroundColor: theme.palette.primary.light
        },

        // whiteBackgroundColor: {
        //     backgroundColor: "teal",
        //     // backgroundColor: "#FFFFFF",
        // },
        fav: {
            backgroundColor: theme.palette.primary.favourite
        },
        idLink: {
            fontSize: "10px"
            // "&:after": {
            //     content: "url('/images/external.png')",
            //     paddingLeft: "5px"
            // }
        }
    }))
;

const JokeCard = ({jokeInfo, variant, favourites, addToFavourites, deleteFromFavourites}) => {
    const classes = useStyles();

    const calcHours = date => {
        let hours = Date.now() - Date.parse(date);
        return Math.round(hours / 3600000);
    };

    const cardCategories = () => {
        if (jokeInfo.categories) {
            return (
                jokeInfo.categories.map((category, index) => {
                    return <Typography
                        key={index + category}
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
    const messIcon = ()=>{
       if(variant === "outlined"){
           return classes.chatBtn
       } else {
           return classes.chatBtnDark
       }
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
                                // className={`${variant === "outlined" ? classes.greyBackgroundColor : classes.whiteBackgroundColor}`}
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
                            {/*className={classes.idLink}*/}
                            ID:
                            <Link href="#" >
                                {jokeInfo.id}
                                <Launch className={classes.idLink}/>
                            </Link>
                        </Typography>
                        <Typography variant={variant === "outlined" ? "body1" : "body2"}>
                            {jokeInfo.value}
                        </Typography>
                        <Typography variant="subtitle1">
                            Last update: {calcHours(jokeInfo.updated_at)} hours ago
                        </Typography>
                        {cardCategories()}
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