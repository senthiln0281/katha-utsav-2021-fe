import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    event: {
        fontFamily: 'Fredoka One',
        backgroundColor: "#F3F0EA",
        marginTop: "68px",
        padding: "0 40px"
    },
    date: {
        display: "flex",
        flexDirection: "row",
        color: "#FECB05",
        alignItems: "baseline"
    },
    number: {
        marginRight: "24px",
        fontSize: "72px"

    },
    month :{
        fontSize: "36px"

    },
    phase: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: "18px"
    },
    description :{
        textAlign: "center",
        fontWeight: "400",
        fontSize: "16px"
    }
}));

const Event = ({data}) => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <div className={classes.event}>
                <div className={classes.date}>
                    <div className={classes.number}>
                        {data.date}
                    </div>
                    <div  className={classes.month}>
                        {data.month}
                    </div>                    
                </div>
                <div className={classes.phase}>Phase #{data.phase}</div>

                <div className={classes.description}>{data.text}</div>
            </div>
        </React.Fragment>
  );
};

export default Event;