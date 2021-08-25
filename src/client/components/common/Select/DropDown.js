import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import _ from 'lodash';

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            color: "#000"
        },
        "& .MuiInputLabel-root": {
            color: "#6D6C6C"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6D6C6C"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#98248D"
        },
        "&:hover .MuiInputLabel-root": {
            color: "#98248D"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#98248D"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "purple"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "purple"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        }
    }
});

const DropDown = (props) => {
    const classes = useStyles();
    const { options, fieldName,onChangeFunc,value, isError,errorMessage } = props;
    return (
            <TextField
                fullWidth
                className={classes.root}
                error={false}
                helperText={isError? errorMessage: ''}
                value={value}
                 onChange={e => onChangeFunc(e.target.value)}
                variant="outlined"
                label={fieldName}
                select
            >
                {_.map(options, (option) => <MenuItem key={option} value={option}>{option}</MenuItem>
                )}
            </TextField>
    );
}

export default DropDown;