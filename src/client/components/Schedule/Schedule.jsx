import React from 'react';
import Grid from "@material-ui/core/Grid";
import Event from './Event'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    schedule: {
        fontFamily: 'Fredoka One',
        backgroundColor: "#F3F0EA",
        padding: "0 80px"
    },
    header: {
        fontSize: "48px",
        color: "#18191F",
        paddingTop: "86px"
    },
    description: {
        fontWeight: 400,
        color: "#18191F",
        fontSize: "16px",
        marginTop: "89px",
        paddingBottom: "133px"
    },
    events : {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"

    }
}));

const Events = [
    {
        date: "31",
        month: "August",
        phase: 1,
        text: "Text"
    },
    {
        date: "31",
        month: "Sept",
        phase: 2,
        text: "Text"
    },
    {
        date: "31",
        month: "Oct",
        phase: 3,
        text: "Text"
    },
    {
        date: "31",
        month: "Oct",
        phase: 3,
        text: "Text"
    },
    {
        date: "31",
        month: "Oct",
        phase: 3,
        text: "Text"
    }
]

const Schedule = () => {

    const classes = useStyles();


    return (
        <React.Fragment>
            <div id="schedule" className={classes.schedule}>
                <div className={classes.header}>Schedule</div>
                <div className={classes.events}>
                    {Events.map((event)=>{
                        return(
                            <Event data={event} />
                        )
                    })}
                </div>
                <div className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum dolor si
                </div>
            </div>
        </React.Fragment>
  );
};

export default Schedule;