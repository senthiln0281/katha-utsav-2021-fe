import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import {
    makeStyles, useTheme, createStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 280
    },
    cssLabel: {
        color: "#6D6C6C",
        "&.Mui-focused": {
            color: "#98248D"
        }
    },
    cssOutlinedInput: {
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
            borderColor: "#6D6C6C" //default
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
            borderColor: "#6D6C6C" //hovered #DCDCDC
        },
        "&$cssFocused $notchedOutline": {
            borderColor: "#98248D" //focused
        }
    },
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {}
}));

const InputField = (props) => {
    const classes = useStyles();
    const {fieldName,onChangeFunc,value,isError,errorMessage} = props;

    return (
        <TextField variant="outlined" label={fieldName}  fullWidth
            value={value}
            error={isError}
            helperText={isError?errorMessage: ''}
            onChange={event =>onChangeFunc(event.target.value)}
            required InputLabelProps={{
                classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                }
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                }
            }} />

    );
}
export default InputField;