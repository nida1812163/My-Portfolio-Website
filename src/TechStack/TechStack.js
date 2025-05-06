import React from "react";
import styles from "./TechStackStyles.module.css";
import Stack from "react-bootstrap/Stack"
import shapePic from "../images/shape-bg.png";
import SQLSVG from '../CommonStack/mysqlSvg'
import MongoDb from "../CommonStack/MongoDb";
import MariaDb from '../CommonStack/MariaDb'
import NodeJS from '../CommonStack/NodeJS'
import Bootstrap from "../CommonStack/Bootstrap";
import JS from '../CommonStack/Javascript'
import Express from '../CommonStack/Express'
import Wordpress from "../CommonStack/Wordpress";
import ReactJS from "../CommonStack/ReactJS";

function TechStack() {

  return (
    <>
      <h2 id="Tech" className={styles.techFont}>
        <span className={styles.techHeading}>|-</span> My Tech Stack {""}
        <span className={styles.techHeading}>-|</span>
      </h2>
      <div className={styles.techInfo}>
        <img className={styles.techShapeimg} src={shapePic} alt="" />
          <div className={styles.techImg}>
            <div className={styles.slideContent}> 
              <Stack className={styles.stackElements} direction="horizontal" gap={3}>
                <div className={styles.boxBordersSQL}>
                  <SQLSVG fillColor="#00546B"/>
                </div>
                <div className={styles.boxBordersMongoDB}>
                  <MongoDb/>
                </div>
                <div className={styles.boxBordersMariaDB}>
                  <MariaDb/>
                </div>
              </Stack>
              <br/>
              <Stack className={styles.stackElements} direction="horizontal" gap={3}>
              <div className={styles.boxBordersNodeJS}>
                  <NodeJS/>
                </div>
                <div className={styles.boxBordersBootstrap}>
                  <Bootstrap/>
                </div>
                <div>
                  <JS/>
                </div>
              </Stack>
              <br/>
              <Stack className={styles.stackElements} direction="horizontal" gap={3}>
              <div className={styles.boxBordersExpress}>
                  <Express/>
                </div>
                <div className={styles.boxBordersWordpress}>
                  <Wordpress/>
                </div>
                <div className={styles.boxBordersReactJS}>
                  <ReactJS/>
                </div>
              </Stack>
            </div>
          </div>
      </div>
    </>
  );
}

export default TechStack;
