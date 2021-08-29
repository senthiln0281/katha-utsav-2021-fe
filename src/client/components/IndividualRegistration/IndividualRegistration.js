import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import crossMark from "../../assets/crossMark.png"
import kathautsav from "../../assets/kathautsav.png"
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputField from '../common/TextField/InputField';
import DropDown from '../common/Select/DropDown';
import PaymentButton from '../common/Button/PayButton';
import FileUploader from '../common/FileUploader'
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: '#FEDB50',
        height: "500vh",
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

        [theme.breakpoints.down("xs")]: {
            width: "85%"
        },
    },
    registrationDivBackground: {
        backgroundColor: '#FEDB50',
        height: "25vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    UploadFile: {
        width: 360,
        height: 200,
        backgroundColor: "#FDF6D8",
        "&:hover": {
            backgroundColor: "#FDF6D8"
        },
        [theme.breakpoints.down("sm")]: {
            width: 320
        },
        [theme.breakpoints.down("xs")]: {
            width: 260
        },

    },
    Reset: {
        lineHeight: '24px',
        fontWeight: 'bold',
        fontSize: "0.65rem",
        [theme.breakpoints.down("sm")]: {
            width: 320
        },
        [theme.breakpoints.down("xs")]: {
            width: 260
        },
    },
    supportedDocument: {
        fontWeight: 400,
        color: "#000000",
        lineHeight: "1.25rem",
    },
    errorMessage: {
        color: "#f44336",
        fontWeight: 400,
        lineHeight: "1rem",
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
    const [fileData, setFileData] = useState({});
    const [fileName, setFileName] = useState('Upload File');

    const Transition = React.forwardRef((props, ref) => <Slide ref={ref} direction="up" {...props} />);



    const onFileUpload = async (selectedFile, name) => {
        if (name) {
            const splitPath = name.split("\\");
            setFileName(`File Uploaded: ${splitPath[splitPath.length - 1]}`);
            setFileData(fileData);
        }
    }

    const Validate = () => {
        props.validateDetails(name, emailId, phoneNumber, school, city, classStandard, storyCategory, fileData)
    }

    const closePopUp =()=>{
        props.showPopUp(false);
    }

    const onReset = () => {
        setName('');
        setEmailId('');
        setSchool('');
        setPhoneNumber('');
        setCity('');
        setStoryCategory('');
        setClassStandard('');
        setFileData({});
    }
    const theme = useTheme();


    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Dialog fullScreen TransitionComponent={Transition} open={props.showPopUp} onClose={closePopUp}>

            <Grid container direction="column" className={classes.background}>
                {/*---Cross Mark---*/}
                <Grid item container justifyContent="flex-end">
                    <Grid item component={Button} onClick={closePopUp} >
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

                {/**Registration Form*/}
                {true && <Grid item container alignItems={matchesXS ? "center" : "center"} direction="column" >
                    <Card className={classes.registrationCard}>
                        <CardContent>
                            <Grid spacing={1} container alignItems="center" direction="column" style={{ textAlign: "center", width: matchesXS ? 240 : matchesSM ? 350 : "inherit" }}>
                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <Typography gutterBottom variant="body1" style={{ fontSize: "1rem" }} className={classes.RegistrationForm}>Student Details</Typography>
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={props.nameMessage} isError={props.nameMessage.length > 0} fieldName={"Name"} onChangeFunc={setName} value={name} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={props.emailIdMessage} isError={props.emailIdMessage.length > 0} fieldName={"Email ID"} onChangeFunc={setEmailId} value={emailId} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={props.phoneNumberMessage} isError={props.phoneNumberMessage.length > 0} fieldName={"Phone Number"} onChangeFunc={setPhoneNumber} value={phoneNumber} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={props.SchoolMessage} isError={props.SchoolMessage.length > 0} fieldName={"School"} onChangeFunc={setSchool} value={school} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={props.CityMessage} isError={props.CityMessage.length > 0} fieldName={"City"} onChangeFunc={setCity} value={city} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <DropDown errorMessage={props.ClassMessage} isError={props.ClassMessage.length > 0} fieldName={"Class"} options={["4 to 6", "7 to 9 ", "10 to 12"]} onChangeFunc={setClassStandard} value={classStandard} />
                                </Grid>


                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <DropDown errorMessage={props.StoryCategoryMessage} isError={props.StoryCategoryMessage.length > 0} fieldName={"Story Category"} options={["Fiction", "Non-Fiction", "Poetry"]} onChangeFunc={setStoryCategory} value={storyCategory} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <FileUploader onFileUpload={onFileUpload} style={classes.UploadFile} buttonName={fileName} />
                                    <Typography align="left" gutterBottom variant="body1" style={{ fontSize: "0.75rem" }} className={classes.errorMessage}>{props.fileDataMessage}</Typography>
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <Typography align="left" gutterBottom variant="body1" style={{ fontSize: "0.75rem" }} className={classes.supportedDocument}>Supported Document types: docx,doc, pdf, jpg, jpeg,png</Typography>
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 350 : "inherit" }}>
                                    <PaymentButton onButtonClick={Validate} name={"Pay"} />
                                </Grid>

                                <Grid item component={Button} onClick={onReset} style={{ width: matchesXS ? 220 : "inherit" }}>
                                    <Typography gutterBottom style={{ "textAlign": "center" }} variant="body2" className={classes.Reset}>Reset</Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.registrationDivBackground} />
                </Grid>}
            </Grid>
        </Dialog>


    );
};

export default IndividualRegistration;