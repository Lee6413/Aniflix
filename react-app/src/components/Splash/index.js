
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
          <div id={styles.picInMid} />
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
      {/* <div id={styles.secondHalf}>
        <div id={styles.headerText}>
          Aniflix has your favorite stories
        </div>
        <div id={styles.subText}>
          A collection of new and classic anime for anyone to enjoy.
        </div>
        <div id={styles.showContainer}>
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img2.hulu.com/user/v3/artwork/aeb20011-e054-483b-8422-39ad643fc224?base_image_bucket_name=image_manager&base_image=2f4c341a-37e1-4ce1-86ff-4d4f16922a24&operations=%5B%7B%22resize%22:%22600x600%7Cmax%22%7D,%7B%22format%22:%22webp%22%7D%5D)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=9c7dd5d7-6578-41d9-abd4-57d410e62ea1&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=c6182167-be22-4128-aa41-c52261c53837&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=8940a6b8-788b-4683-af9e-b65a3c7fa279&region=US&format=jpeg&size=952x536)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&operations=%5B%7B%22resize%22:%22600x600%7Cmax%22%7D,%7B%22format%22:%22webp%22%7D%5D)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/c706769b-d7ae-429d-9094-24876d9400a5?base_image_bucket_name=image_manager&base_image=5415dcc3-66e1-4fae-9327-36f6ff88818b&operations=%5B%7B%22resize%22:%22600x600%7Cmax%22%7D,%7B%22format%22:%22webp%22%7D%5D)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=2d0d3308-9323-4716-b7d8-03f171c844af&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img1.hulu.com/user/v3/artwork/0d585c89-3c3f-488e-9d2b-37b6ce78bff9?base_image_bucket_name=image_manager&base_image=0b842b63-9c69-4a76-bc4b-890c2807c98d&operations=%5B%7B%22resize%22:%22600x600%7Cmax%22%7D,%7B%22format%22:%22webp%22%7D%5D)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=44651417-ab88-4504-a37b-b55e953271d4&size=1200x630&format=jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div id={styles.showImage} style={{ backgroundImage: `url(https://img4.hulu.com/user/v3/artwork/bd0a102d-3697-4274-900e-be9e4a3dc6d4?base_image_bucket_name=image_manager&base_image=7f216762-5594-4778-9fbb-129a47cdd209&operations=%5B%7B%22resize%22:%22600x600%7Cmax%22%7D,%7B%22format%22:%22webp%22%7D%5D)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        </div>
      </div> */}
    </>
  );
}
