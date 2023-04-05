import React from 'react';
import "./hero.css";

function Hero (props){
  return (
    <>
    <div className={props.cName}>
      {/* make image course dyamnic so that hero page is different for each page */}
      <img alt="HeroImg" src={props.heroImg}/>
      <div className='hero-text'>
        {/* make text dyamnic too */}
        <h1>{props.title}</h1>
        <p>{props.subHeading}</p>
        <input type="text" className={props.searchBtnClass} placeholder={props.searchBarText}/>
        <button className={props.searchBtnClass}>{props.searchBtnText}</button>
        <br/><br/>
        <a href={props.url} className={props.btnClass}> {props.buttonText} </a>
      </div>
    </div>    
    </>

  );
}

export default Hero;
