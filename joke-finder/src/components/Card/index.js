import React, {useEffect} from "react";

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const JokeCard = ({jokeInfo}) => {
    const classes = useStyles();

    function calcHours(date) {
        let hours = Date.now() - Date.parse(date);
        return Math.round(hours / 3600000);
    }


    const cardContent = () => {
        return (
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <IconButton aria-label="Favorite Icon">
                           <FavoriteBorderIcon/>
                        </IconButton>
                        <IconButton aria-label="Message Icon">
                            <ChatOutlinedIcon/>
                        </IconButton>
                        <Typography component="h5" variant="h5">
                            ID:{jokeInfo.id}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                        {jokeInfo.value}
                    </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Last update: {calcHours(jokeInfo.updated_at)} hours ago
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            celebrity
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    }


    return (
        <div>
            {cardContent()}
            {/*<a>ID:{jokeInfo.id} </a>*/}
            {/*<p>{jokeInfo.value}</p>*/}
            {/*/!*{jokeInfo.categories.map((category)=> <p>{category}</p>*!/*/}
            {/*/!*)}*!/*/}
            {/*<p>{jokeInfo.updated_at}</p>*/}
            {/*<p>Last update: {calcHours(jokeInfo.updated_at)} hours ago</p>*/}

        </div>
    );
};

export default JokeCard;