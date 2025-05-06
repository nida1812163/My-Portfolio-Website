import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./AboutStyles.module.css";
//import { AboutAsProp } from '../Nav/Nav'

function About() {
  // Ref for the card element
  const boatCardRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP animation on component mount
  useEffect(() => {
    const card = boatCardRef.current;
    if (!card) return;
    if (windowWidth > 400) {
      // Boat-like floating animation
      const animation = gsap.to(card, {
        y: -5, // Move up/down
        rotation: 2, // Tilt side-to-side
        duration: 2, // Animation duration (seconds)
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse animation back and forth
        ease: "sine.inOut", // Smooth easing (like waves)
      });

      // Cleanup function
      return () => {
        animation.kill();
        gsap.set(card, { clearProps: "all" });
      };
    } else {
      // Cleanup animation on component unmount
      gsap.killTweensOf(card); // Stop animations when component unmounts
      gsap.set([card], {
        clearProps: "all",
      });
    }
  }, [windowWidth]);

  return (
    <>
      <h2 id="About" className={styles.aboutFont}>
        <span className={styles.aboutHeading}>|-</span> About Me {""}
        <span className={styles.aboutHeading}>-|</span>
      </h2>
      <div className={styles.waterBackground}>
        <div className={styles.boatCard} ref={boatCardRef}>
          <div className={styles.cardBody}>
            <p className={styles.aboutMe}>
              I have knowledge and experience as a MERN Stack Developer as well
              as Wordpress Development. I am passionate about growing as a
              developer so I would be quick to adapt upcoming techonologies and
              environments. <br />I also have experience with data management as
              i have been a part of a data analyst team of a reknowned company.
            </p>
          </div>
          <div className={styles.wave}></div>
        </div>
      </div>
    </>
  );
}

export default About;
