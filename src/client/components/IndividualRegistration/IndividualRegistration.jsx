import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from '../../assets/images/katha-logo.png';
import close from '../../assets/images/close.png';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputField from '../common/TextField/InputField';
import DropDown from '../common/Select/DropDown';
import PaymentButton from '../common/Button/PayButton';
import FileUploader from '../common/FileUploader';
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
        textTransform: "none",
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
        textTransform: "none",
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

const Transition = React.forwardRef((props, ref) => <Slide ref={ref} direction="up" {...props} />);

const IndividualRegistration = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [nameMessage, setNameMessage] = useState(props.nameMessage);

    const [emailId, setEmailId] = useState('');
    const [emailIdMessage, setEmailIdMessage] = useState(props.emailIdMessage);

    const [school, setSchool] = useState('');
    const [SchoolMessage, setSchoolMessage] = useState(props.SchoolMessage);


    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberMessage, setPhoneNumberMessage] = useState(props.phoneNumberMessage);

    const [city, setCity] = useState('');
    const [CityMessage, setCityMessage] = useState(props.CityMessage);

    const [storyCategory, setStoryCategory] = useState('');
    const [StoryCategoryMessage, setStoryCategoryMessage] = useState(props.StoryCategoryMessage);

    const [classStandard, setClassStandard] = useState('');
    const [ClassMessage, setClassMessage] = useState(props.ClassMessage);

    const [fileData, setFileData] = useState({});
    const [fileDataMessage, setfileDataMessage] = useState(props.nameMessage);

    const [fileName, setFileName] = useState('Upload File');




    const onFileUpload = async (selectedFile, name, event) => {
        if (name) {
            const splitPath = name.split("\\");
            setFileName(`File Uploaded: ${splitPath[splitPath.length - 1]}`);
            setFileData(selectedFile);
            IndividualRegistrationValidation({ target: { id: 'file' } });
        }
    }

    const Validate = () => {
        let errorObject = { emailError: "", nameError: "", phoneNumberError: "", SchoolError: "", CityError: "", ClassError: "", StoryCategoryError: "", fileError: "", isError: false }
        let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId);
        let phoneNumberValid = /^\d+$/.test(phoneNumber);

        if (_.isNull(emailId) || _.isEmpty(emailId) || !emailValid) {
            setEmailIdMessage("Please enter a valid email")
            errorObject.isError = true;
        }
        if (_.isEmpty(name) || _.isNull(name)) {
            setNameMessage("Please enter a valid name");
            errorObject.isError = true;
        }
        if (_.isEmpty(School) || _.isNull(School)) {
            setSchoolMessage("Please enter a valid school");
            errorObject.isError = true;
        }
        if (_.isNull(phoneNumber) || _.isEmpty(phoneNumber) || !phoneNumberValid) {
            setPhoneNumberMessage("Please enter a valid phoneNumber");
            errorObject.isError = true;
        }
        if (_.isEmpty(storyCategory) || !_.includes(["Fiction", "Non-Fiction", "Poetry"], storyCategory)) {
            setStoryCategoryMessage("Please select a valid StoryCategory");
            errorObject.isError = true;
        }
        if (_.isEmpty(classStandard) || !_.includes(["4 to 6", "7 to 9", "10 to 12"], classStandard)) {
            setClassMessage("Please enter a valid Class");
            errorObject.isError = true;
        }
        if (_.isEmpty(fileData.name) || fileData.size > 10000000) {
            setfileDataMessage("Please Upload file less than 10mb");
            errorObject.isError = true;
        }
        if (_.isEmpty(city) || _.isNull(city)) {
            setCityMessage("Please enter a valid Class");
            errorObject.isError = true;
        }

        if (!errorObject.isError) {
            props.validateDetails(name, emailId, phoneNumber, school, city, classStandard, storyCategory, fileData)
        }
    }

    const closePopUp = () => {
        props.showPopUp(false);
    }

    const onDropDown = (id,event) => {
        IndividualRegistrationValidation({ target: { id: `${id}`, value: `${event.target.value}`, } });
    }

    const onReset = () => {
        setName('');
        setNameMessage('');
        setEmailId('');
        setEmailIdMessage('');
        setSchool('');
        setSchoolMessage('');
        setPhoneNumber('');
        setPhoneNumberMessage('');
        setCity('');
        setCityMessage('');
        setStoryCategory('');
        setStoryCategoryMessage('');
        setClassStandard('');
        setClassMessage('');
        setFileData({});
        setFileName('Upload File');
        setfileDataMessage('');
    }

    const IndividualRegistrationValidation = (event) => {

        switch (event.target.id) {
            case 'Email ID':
                let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (_.isNull(event.target.value) || _.isEmpty(event.target.value) || !emailValid) {
                    setEmailIdMessage("Please enter a valid email")
                    setEmailId(event.target.value);
                }
                else {
                    setEmailId(event.target.value);
                    setEmailIdMessage("")
                }
                break;
            case 'Name':
                if (_.isEmpty(event.target.value) || _.isNull(event.target.value)) {
                    setNameMessage("Please enter a valid name");
                    setName(event.target.value);
                }
                else {
                    setName(event.target.value);
                    setNameMessage("");
                }
                break;
            case 'School':
                if (_.isEmpty(event.target.value) || _.isNull(event.target.value)) {
                    setSchoolMessage("Please enter a valid school");
                    setSchool(event.target.value);
                }
                else {
                    setSchool(event.target.value);
                    setSchoolMessage("");
                }
                break;
            case 'Phone Number':
                let phoneNumberValid = /^\d+$/.test(event.target.value);
                if (_.isNull(event.target.value) || _.isEmpty(event.target.value) || !phoneNumberValid) {
                    setPhoneNumberMessage("Please enter a valid phoneNumber");
                    setPhoneNumber(event.target.value);
                }
                else {
                    setPhoneNumber(event.target.value);
                    setPhoneNumberMessage("");
                }
                break;
            case 'Story Category':

                if (_.isEmpty(event.target.value) || !_.includes(["Fiction", "Non-Fiction", "Poetry"], event.target.value)) {
                    setStoryCategoryMessage("Please enter a valid StoryCategory");
                    setStoryCategory(event.target.value);
                }
                else {
                    setStoryCategory(event.target.value);
                    setStoryCategoryMessage("");
                }
                break;
            case 'Class':
                if (_.isEmpty(event.target.value) || !_.includes(["4 to 6", "7 to 9", "10 to 12"], event.target.value)) {
                    setClassMessage("Please enter a valid Class");
                    setClassStandard(event.target.value);
                }
                else {
                    setClassStandard(event.target.value);
                    setClassMessage("");
                }
                break;
            case 'file':
                if (_.isEmpty(fileName) || fileData.size > 10000000) {
                    setfileDataMessage("Please Upload file less than 10mb");
                }
                else {
                    setfileDataMessage("");
                }
                break;
            case 'City':
                if (_.isEmpty(event.target.value) || _.isNull(event.target.value)) {
                    setCityMessage("Please Provide a valid city");
                    setCity(event.target.value);
                }
                else {
                    setCity(event.target.value);
                    setCityMessage("");
                }
                break;
            default:
                break;
        }
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
                        <img alt src={close} alt="crossmark" width="20" height="20" />
                    </Grid>
                </Grid>

                {/*---Title and subtitle---*/}
                <Grid item container alignItems="center" direction="column">
                    <Grid item>
                        <img alt src={Logo} alt="title" width="168" height="90" />
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
                                    <InputField errorMessage={nameMessage} isError={nameMessage.length > 0} fieldName={"Name"} onChangeFunc={setName} eventValidation={IndividualRegistrationValidation} value={name} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={emailIdMessage} isError={emailIdMessage.length > 0} fieldName={"Email ID"} onChangeFunc={setEmailId} eventValidation={IndividualRegistrationValidation} value={emailId} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={phoneNumberMessage} isError={phoneNumberMessage.length > 0} fieldName={"Phone Number"} onChangeFunc={setPhoneNumber} eventValidation={IndividualRegistrationValidation} value={phoneNumber} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={SchoolMessage} isError={SchoolMessage.length > 0} fieldName={"School"} onChangeFunc={setSchool} eventValidation={IndividualRegistrationValidation} value={school} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <InputField errorMessage={CityMessage} isError={CityMessage.length > 0} fieldName={"City"} onChangeFunc={setCity} eventValidation={IndividualRegistrationValidation} value={city} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <DropDown errorMessage={ClassMessage} isError={ClassMessage.length > 0} fieldName={"Class"} options={["4 to 6", "7 to 9", "10 to 12"]} onChangeFunc={setClassStandard} eventValidation={onDropDown} value={classStandard} />
                                </Grid>


                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <DropDown errorMessage={StoryCategoryMessage} isError={StoryCategoryMessage.length > 0} fieldName={"Story Category"} options={["Fiction", "Non-Fiction", "Poetry"]} onChangeFunc={setStoryCategory} eventValidation={onDropDown} value={storyCategory} />
                                </Grid>

                                <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                    <FileUploader onFileUpload={onFileUpload} style={classes.UploadFile} buttonName={fileName} />
                                    <Typography align="left" gutterBottom variant="body1" style={{ fontSize: "0.75rem" }} className={classes.errorMessage}>{fileDataMessage}</Typography>
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