import React from "react";
import styles from "./NidaStyles.module.css";
import profPic from "../images/profilepicture.jpg";
import Button from "react-bootstrap/Button";
import NavigationBar from "../Nav/Nav";
import shapePic from "../images/shape-bg.png";
//import {Home} from '../Nav/Nav'

//import Jumbotron from 'react-bootstrap/Jumbotron';

function Nida() {

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
          <Button className={styles.resumeButton}>Resume</Button>
          <Button className={styles.contactMeButton} variant="outline-light">
            Contact Me
          </Button>
        </div>
      </div>
      <img className={styles.shapeImg} src={shapePic} alt="" />
    </div>
  );
}

export default Nida;
