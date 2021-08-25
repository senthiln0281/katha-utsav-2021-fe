import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    PaymentButton:{
        backgroundColor:"#98248D",
        color: "#ffffff",
        width: 400,
        height: 40,
        "&:hover":{
            backgroundColor:"#9D4395"
        },
    }
}));

const PaymentButton = (props) => {
    const classes = useStyles();
    const {onButtonClick} = props;

    return (
        <Button className={classes.PaymentButton} onClick= {onButtonClick}>Pay</Button>
    );
};

export default PaymentButton