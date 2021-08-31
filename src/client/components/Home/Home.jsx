import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Timeline from '../Timeline/Timeline';
import AboutKatha from '../AboutKatha/AboutKatha';
import KathaHistory from '../KathaHistory/KathaHistory';
import Mentors from '../Mentors/Mentors';
import Process from '../Process/Process';
import Timer from '../Timer/Timer';
import {displayPayment} from "../../Utils/helpers/initiateRegistration";

const Home = (props) => {

  const sampleFormData = {
    "userName": "register name",
    "userEmail": "user@gmail.com",
    "userPhone": "911234567890",
    "userSchool": "school name",
    "userCity": "user city",
    "studentsList": [
      {
        "studentName": "Student Name 1",
        "studentEmail": "student@gmail.com",
        "studentPhone": "911234567890",
        "studentClass": "student class",
        "storyCategory": "sample category",
        "storyPath": "samples3path"
      },
      {
        "studentName": "Student Name 2",
        "studentEmail": "student@gmail.com",
        "studentPhone": "911234567890",
        "studentClass": "student class",
        "storyCategory": "sample category",
        "storyPath": "samples3path"
      },
      {
        "studentName": "Student Name 3",
        "studentEmail": "student@gmail.com",
        "studentPhone": "911234567890",
        "studentClass": "student class",
        "storyCategory": "sample category",
        "storyPath": "samples3path"
      },
      {
        "studentName": "Student Name 3",
        "studentEmail": "student@gmail.com",
        "studentPhone": "911234567890",
        "studentClass": "student class",
        "storyCategory": "sample category",
        "storyPath": "samples3path"
      }
    ]
  }

  const paymentStateHandler = (paymentState, statusMessage) => {
    console.log(paymentState);
    console.log(statusMessage);
  };

  const handleClick = async() => {
    await displayPayment(sampleFormData, paymentStateHandler);
  };

    return (
        <React.Fragment>
            <HeaderComponent {...props}/>
          <button onClick={handleClick}>Payment Demo</button>
            <Timer />
            <Timeline />
            <Process />
            <AboutKatha />
            <KathaHistory />
            <Mentors />
        </React.Fragment>
    );
};

export default Home;