import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthProvider';
import NavbarLoggedin from '../components/NavbarLoggedin/NavbarLoggedin';
import Hero from '../components/Hero/Hero';
import ProfileHeroImg from '../assets/profileHeroImg1.jpg';
import Profile from '../components/UserProfile/Profile';
import Footer from '../components/Footer/Footer';



const Account = () => {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const userId = user.id;
    const token = localStorage.getItem('token');
    axios.get(`https://${process.env.REACT_APP_SERVER_URL}/api/user/account/` + userId, {
      headers: { authorization: "Bearer " + token }
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
      navigate('/');
    })
  }, [navigate, user.id]);
  
  return (
    <>
    <NavbarLoggedin/>
    <Hero
      cName="hero-mid1"
      heroImg={ProfileHeroImg}
      title="Profile"
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    />
    <Profile
    username = {username}
    profileImg = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
    fullname= {firstName + " " + lastName}
    email= {email}
    memberSince = {year}
    />
    <Footer/>
    </>

  );
}

export default Account;
