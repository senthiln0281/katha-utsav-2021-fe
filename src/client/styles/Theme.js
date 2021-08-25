import { createMuiTheme } from '@material-ui/core/styles';

const kathaRed = "#98248D";
const label = "#000";
const arcGrey = "#868686";


export default createMuiTheme({
    overrides: {
        MuiInputLabel: {
            root: {
                color: `${label}`,
                fontSize: "1rem",
            }
        },
        MuiInput: {
            root: {
                color: `${arcGrey}`,
                fontWeight: "300"
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${kathaRed}`,
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${kathaRed}`,
                }
            }
        }
    }
});