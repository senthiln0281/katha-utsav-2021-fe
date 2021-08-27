import React from 'react';
import Question from '../../assets/images/question-icon.png';

const Information = ({image, header, content}) => {
    return (
        <div className='information'>
            <img src={image} alt="" />
            <div className='information__content'>
                <h5>{header}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

const AboutKatha = () => {
  return (
      <React.Fragment>
          <div className='about-us'>
              <h3>About Katha Utsav 21</h3>
              <div className='about-us__container'>
                  <Information image={Question} header='Where is Katha Utsav taking place?' content='Katha Utsav 2021 completely online. This time Utsav is using a virtual environment, which allows attendees to view keynote sessions and participate in small-group workshops.' />
                  <Information image={Question} header='What do you do to ensure a safe environment?' content='To create a safe virtual environment, all registrants must agree to the Virtual Event Community Guidelines to participate. Only Katha Utsav community members are allowed in the small group video breakout rooms and these sessions are recorded. A trained facilitator will also help to lead a productive dialogue in each of these sessions.' />
              </div>
              <div className='about-us__container'>
                  <Information image={Question} header='Who can attend KATHA UTSAV 2021?' content='Any student from grade 4 to grade 12 can register. Please be respectful of this space and review the audience guidelines and process before registering for Utsav’21.' />
                  <Information image={Question} header='Are there recordings available after the events?' content='Recording will be available in student login account for maximum 48 hours.' />
              </div>
          </div>
      </React.Fragment>
  );
};

export default AboutKatha;