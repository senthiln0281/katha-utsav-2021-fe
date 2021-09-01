import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DropDown from '../../common/Select/DropDown';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import close from '../../../assets/images/close.png';
import kathautsav from '../../../assets/images/katha-logo.png';
import Card from '@material-ui/core/Card';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import InputField from "../../common/TextField/InputField";
import PaymentButton from '../../common/Button/PayButton';


const useStyles = makeStyles(theme => ({
    background: {
      backgroundColor: '#FEDB50',
      padding: 70,
      width: "100%",
      backgroundRepeat: "no-repeat",

    },
    StudentCount: {
      padding: 30,
    },
    Detail: {
      color: '#66645E',
      fontWeight: "400",
      fontSize: "1rem",
      left: '40px'
    },
    registrationCard: {
      width: "100%",
      height: "100%",
      borderRadius: "10",
      boxShadow: theme.shadows[2],
    },
    RegistrationForm: {
      color: '#66645E',
      fontWeight: "400",
      fontSize: "1rem"
    },

    Payment: {
      padding: 70,
      alignItems: "Center",
    },
    Reset: {
      lineHeight: '24px',
      fontWeight: 'bold',
      fontSize: '0.65rem',
      alignItems: "Center"
    },
    UploadFile: {
      width: 130,
      backgroundColor: "#FDF6D8",
      "&:hover": {
        backgroundColor: "#FDF6D8"
      },
    },
    SerialNo: {
      padding: '2rem 1rem'
    }
  })
);
const StepTwo = (props) => {

  const options = Array(20).fill().map((x, i) => i + 1);
  const classes = useStyles();

  const [states, setStates] = React.useState({
    stepTwo: {
      0 : {
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentClass: '',
        storyCategory: '',
        storyPath: ''
      },
    },
    dropDownValue : 1
  });

  const studentCount = (fieldName, e) => {
    console.log('>>>>>>>>dropdownValue', e.target.value)
    let values = {}
    for (let step = 0; step < e.target.value; step++) {
      values.step = step
      values[step] = {
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        studentClass: '',
        storyCategory: '',
        storyPath: ''
      }
    }

    setStates((states) => {
      return {
        ...states,
        stepTwo: values,
        dropDownValue: e.target.value
      }
    })
  }

  console.log('.................', states)

  const tableHeaders = [ "#", "NAME", "EMAIL ID", "PHONE NO", "CLASS", "STORY CATEGORY"];

  const stepTwoFormValidation = (event) => {
    console.log('event.target.id',event.target.id)

  }

  return (
    <Grid container direction="column" className={classes.background}>
      <Grid item container alignItems="center" direction="column">
        <Grid item>
          <img alt src={kathautsav} alt="title" width="168" height="90"/>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="subtitle2" className={classes.RegistrationForm}>Registration Form for
            Students</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" direction="column">
        <Card className={classes.registrationCard}>

          <Grid item container alignItems="center" direction="column">
            <Grid item>
              <Typography gutterBottom variant="subtitle2" className={classes.Detail}>Student Details</Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" direction="column">
            <Grid item className={classes.StudentCount}>
              <DropDown errorMessage='' isError={false} fieldName={"StudentCount"} options={options} toChange={true}
                        eventValidation={(fieldName, e) => studentCount(fieldName, e)} value={states.dropDownValue}/>
            </Grid>
          </Grid>
          <Grid item container align="right" direction="column">
            <Grid item>
              <Typography gutterBottom variant="subtitle2">Note : Supported Document types:
                word, pdf, jpg, jpeg,png</Typography>
            </Grid>
          </Grid>

          <div id='bulk-details'>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {
                      tableHeaders.map((data) => {
                        return (<TableCell align="left">{data}</TableCell>);
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {states.dropDownValue !== '' && Array(states.dropDownValue).fill().map((x, i) => {
                    return <TableRow key={i}>
                      <div className={classes.SerialNo}>{i}</div>
                      <TableCell align="right">
                        <InputField errorMessage='' isError={false} fieldName={"name"} value={states.stepTwo[i].studentName} eventValidation={stepTwoFormValidation}/>
                      </TableCell>
                      <TableCell align="right">
                        <InputField errorMessage='' isError={false} fieldName={"email"} value={states.stepTwo[i].studentEmail} eventValidation={stepTwoFormValidation}/>
                      </TableCell>
                      <TableCell align="right">
                        <InputField errorMessage='' isError={false} fieldName={"phoneNo"} value={states.stepTwo[i].studentPhone} eventValidation={stepTwoFormValidation}/>
                      </TableCell>
                      <TableCell align="right">
                        <DropDown errorMessage='' isError={false} fieldName={"Class"}
                                  options={["4 to 6", "7 to 9 ", "10 to 12"]}
                                  value={states.stepTwo[i].studentClass} eventValidation={stepTwoFormValidation} />
                      </TableCell>
                      <TableCell align="right">
                        <DropDown errorMessage='' isError={false} fieldName={"Story Category"}
                                  options={["Fiction", "Non-Fiction", "Poetry"]}
                                  value={states.stepTwo[i].storyCategory} eventValidation={stepTwoFormValidation}/>
                      </TableCell>
                      <TableCell align="right">
                        <Button className={classes.UploadFile}>Upload File</Button>
                      </TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Grid item>
          <PaymentButton name={"Pay"}/>
          </Grid>

        </Card>
      </Grid>
    </Grid>
  )
}
export default StepTwo;
