import React from "react";
import styles from "./NidaStyles.module.css";
import profPic from "../images/profilepicture.jpg";
import Button from "react-bootstrap/Button";
import NavigationBar from "../Nav/Nav";
import shapePic from "../images/shape-bg.png";
import CV from '../CommonStack/Nida Nadeem Resume.pdf'
import { animateScroll as scroll } from "react-scroll";
//import {Home} from '../Nav/Nav'

//import Jumbotron from 'react-bootstrap/Jumbotron';

function Nida() {
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('Contact');
    if (contactElement) {
      scroll.scrollTo(contactElement.offsetTop, {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust for fixed headers if needed
      });
    }
  };

  return (
    <div id="Home" className={styles.jumbotron}>
      <NavigationBar/>
      <div className={styles.content}>
        <div className={styles.imgBlock}>
          <img className={styles.imgStyle} src={profPic} alt="" />
        </div>
        <div className={styles.descriptionBlock}>
          <span className={styles.myName}>
            Hello, I am {""}
            <span className={styles.highlightedName}>Nida</span>
          </span>
          <p className={styles.description}>
            I am a Full Stack Web Developer with a knack of solving problems.
          </p>
          <Button className={styles.resumeButton} href={CV} download={CV} >Resume</Button>
          <Button className={styles.contactMeButton}  onClick={scrollToContact}  variant="outline-light">
            Contact Me
          </Button>
        </div>
      </div>
      <img className={styles.shapeImg} src={shapePic} alt="" />
    </div>
  );
}

export default Nida;
