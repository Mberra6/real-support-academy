import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./profile.css"
import Certificate from '../../assets/certificate.png';
// import ProfileIcon from './assets/profileIcon.png';

const Profile = (props) => {
  let navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="box1">
        <div className="userIconArea">
          <h1>{props.username}</h1>
          <img className="profileIcon" alt='user-icon' src={props.profileImg}></img>
          <br/>
          <button className='profileBtn' onClick={() => navigate('/user/account/update')}>Edit Profile</button>          
        </div>
        <div className="userTextArea">
          <h3>Full Name</h3>
            <p>{props.fullname}</p>
          <h3>Email Address</h3>
            <p>{props.email} </p>
          <h3>Member Since</h3>
            <p>{props.memberSince}</p>
          <button className='profileBtn' onClick={() => navigate('/user/account/changepassword')}>Change Password</button>          
        </div>
      </div> 
      <div className="box2">
        <h2>Certificates</h2>
        <img alt='certificate' src={Certificate}></img>
        <img alt='certificate' src={Certificate}></img>
          <div className="box3">
            <div className='quizzes'>
              <h3>Quiz Scores</h3>
              <p>Quiz 1: 80%</p>
              <p>Quiz 2: 80%</p>
              <p>...</p>
              <button className='profileBtn'>View all quiz scores</button> 
            </div>
            <div className='exams'>
              <h3>Exam Scores</h3>
              <p>Exam 1: 80%</p>
              <p>Exam 2: 80%</p>
              <p>...</p>
              <button className='profileBtn'>View all exam scores</button> 
            </div>          
          </div>        

        
      </div>
    </div>
  );
}

export default Profile;
