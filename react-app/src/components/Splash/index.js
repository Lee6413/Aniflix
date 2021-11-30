
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import aniflixVideo from '../Video/Aniflix-from-funimation.mp4'
import styles from './Splash.module.css'

export default function Splash() {
  const sessionUser = useSelector(state => state.session.user)

  if (sessionUser) {
    return <Redirect to='/whos-watching' />;
  }

  return (
    <>
      <div id={styles.invisibleNav}>
        <div id={styles.picInMid} />
        <NavLink id={styles.logInButton} to='/login'>
          <span id={styles.logInText}>Sign In</span>
        </NavLink>
      </div>
      <div id={styles.firstHalf}>
        <div id={styles.splashMainPic}>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "relative",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%",
              zIndex: "-10",
            }}
          >
            <source src={aniflixVideo} type="video/mp4" />
          </video>
          <div id={styles.signUpInMid}>
            <h1 id={styles.centerText}>
              Stream Ad-Free Anime with
              <br />
              Premium Plus for free for a limited time
            </h1>
            <NavLink id={styles.signButton} to='/sign-up'>
              <span id={styles.signUpText}>Sign up for Aniflix</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
