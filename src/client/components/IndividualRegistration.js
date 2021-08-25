import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import crossMark from "../assets/crossMark.png"
import kathautsav from "../assets/kathautsav.png"
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputField from './common/TextField/InputField';
import DropDown from './common/Select/DropDown';
import PaymentButton from './common/Button/PayButton';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: '#FEDB50',
        height: "100%",
        padding: 0,
        width: "100%",
        backgroundRepeat: "no-repeat",

    },
    RegistrationForm: {
        color: "#66645E",
        fontWeight: "400",
        fontSize: "1rem"
    },
    registrationCard: {
        padding: 10,
        width: "40%",
        height: "100%",
        borderRadius: "15",
        boxShadow: theme.shadows[2],
    },
    registrationDivBackground: {
        backgroundColor: '#FEDB50',
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    UploadFile: {
        width: 400,
        height: 200,
        backgroundColor: "#FDF6D8",
        "&:hover": {
            backgroundColor: "#FDF6D8"
        },
    },
    Reset: {
        lineHeight: '24px',
        fontWeight: 'bold',
        fontSize: "0.65rem",

    }
}));

const IndividualRegistration = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [school, setSchool] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [storyCategory, setStoryCategory] = useState('');
    const [classStandard, setClassStandard] = useState('');

    const Validate = () => {

        props.validateDetails(name,emailId,phoneNumber,school,city,classStandard,storyCategory)
    }

    const onReset = () => {
        setName('');
        setEmailId('');
        setSchool('');
        setPhoneNumber('');
        setCity('');
        setStoryCategory('');
        setClassStandard('');
    }

    return (
        <Grid container direction="column" className={classes.background}>
            {/*---Cross Mark---*/}
            <Grid item container justifyContent="flex-end">
                <Grid item component={Button} >
                    <img alt src={crossMark} alt="crossmark" width="12" height="12" />
                </Grid>
            </Grid>

            {/*---Title and subtitle---*/}
            <Grid item container alignItems="center" direction="column">
                <Grid item>
                    <img alt src={kathautsav} alt="title" width="168" height="90" />
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle2" className={classes.RegistrationForm}>Registration Form for Students</Typography>
                </Grid>
            </Grid>

            <Grid item container alignItems="center" direction="column">
                <Card className={classes.registrationCard}>
                    <CardContent>
                        <Grid spacing={1} container item direction="column" style={{ textAlign: "center" }}>
                            <Grid item>
                                <Typography gutterBottom variant="body1" style={{ fontSize: "1rem" }} className={classes.RegistrationForm}>Student Details</Typography>
                            </Grid>

                            <Grid item>
                                <InputField errorMessage='' isError={false} fieldName={"Name"} onChangeFunc={setName} value={name} />
                            </Grid>
                            <Grid item>
                                <InputField errorMessage='' isError={false} fieldName={"Email ID"} onChangeFunc={setEmailId} value={emailId} />
                            </Grid>
                            <Grid item>
                                <InputField errorMessage='' isError={false} fieldName={"Phone Number"} onChangeFunc={setPhoneNumber} value={phoneNumber} />
                            </Grid>

                            <Grid item>
                                <InputField errorMessage='' isError={false} fieldName={"School"} onChangeFunc={setSchool} value={school} />
                            </Grid>

                            <Grid item>
                                <InputField errorMessage='' isError={false} fieldName={"City"} onChangeFunc={setCity} value={city} />
                            </Grid>

                            <Grid item>
                                <DropDown errorMessage='' isError={false} fieldName={"Class"} options={["4 to 6", "7 to 9 ", "10 to 12"]} onChangeFunc={setClassStandard} value={classStandard} />
                            </Grid>

                            <Grid item>
                                <DropDown errorMessage='' isError={false} fieldName={"Story Category"} options={["Fiction", "Non-Fiction", "Poetry"]} onChangeFunc={setStoryCategory} value={storyCategory} />
                            </Grid>

                            <Grid item>
                                <Button className={classes.UploadFile}>Upload File</Button>
                            </Grid>

                            <Grid item>
                                <PaymentButton onButtonClick = {Validate} />
                            </Grid>

                            <Grid item component={Button} onClick={onReset}>
                                <Typography gutterBottom variant="body2" className={classes.Reset}>Reset</Typography>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
};

export default IndividualRegistration;