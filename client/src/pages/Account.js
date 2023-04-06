import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from '../components/Navbar/Navbar2';
import Hero from '../components/Hero/Hero';
import ProfileHeroImg from '../assets/profileHeroImg1.jpg';
import{Link} from'react-router-dom';
import Profile from '../components/UserProfile/Profile';
import Footer from '../components/Footer/Footer';
import UserIcon from '/Users/vivian/Desktop/real-support-academy/client/src/assets/userIcon.png';

// import MetaData from ''


const Account = () => {
  const [backendData, setBackendData] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    axios.post('http://localhost:3333/user/account', {
      id: userId
    })
    .then(
      response => {
        setFirstName(response.data.user[0].first_name);
        setLastName(response.data.user[0].last_name);
        setEmail(response.data.user[0].email);
        setUsername(response.data.user[0].username);
        setYear(response.data.user[0].created_at.slice(0, 10));
      }
    )
    .catch((err) => {
      console.log(err.response.data);
      setBackendData(err.response.data);
    })
  }, []);
  return (
    <>
    <Navbar2/>
    <Hero
      cName="hero-mid1"
      heroImg={ProfileHeroImg}
      title="Profile"
      // subHeading = "hide"
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    />
    <Profile
    username = {username}
    profileImg = {UserIcon}
    fullname= {firstName + " " + lastName}
    email= {email}
    memberSince = {year}
    />
    <Footer/>
    </>

  );
}

export default Account;
