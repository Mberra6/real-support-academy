import React from 'react';
import "./profile.css"
// import ProfileIcon from './assets/profileIcon.png';

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="personalInfoSection">
        <h1>{props.username}</h1>
        {/* <img className="profileImg" alt='user-icon' src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"></img> */}
        <img className="profileIcon" alt='user-icon' src={props.profileImg}></img>
        <br/>
        <button className='profileBtn'>Edit Profile</button>
        <h3>Full Name</h3>
          <p>{props.fullname}</p>
        <h3>Email Address</h3>
          <p>{props.email} </p>
        <h3>Member Since</h3>
          <p>{props.memberSince}</p>
        <button className='profileBtn'>Change Password</button>
      </div> 
      <div className="certificateSection">
        <h2>Certificates</h2>
        <h2>Quiz Scores</h2>
        <h2>Exam Scores</h2>
      </div>
    </div>
  );
}

export default Profile;
