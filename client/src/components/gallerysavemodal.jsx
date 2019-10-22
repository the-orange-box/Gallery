import React from 'react';
import icons from './icons.jsx';
import styles from '../css/gallerysavemodal.module.css';
import styles2 from '../css/gallerysharemodal.module.css';

const SaveModal = (props) => {
  return (
    <div className={styles2["share-modal-background"]} onClick={props.handleClick}>
      <div className={styles["save-modal-container"]} onClick={(event)=>{event.stopPropagation();}}>
        <svg className={styles['share-modal-x-svg']} onClick={props.handleClick} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false"><path d="m23.25 24c-.19 0-.38-.07-.53-.22  l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
        <h3>Save to list</h3>
        <button className={`${styles["gallery-button"]} ${styles["facebook-button"]}`}>{icons.facebookicon}Continue with Facebook</button>
        <button className={`${styles["gallery-button"]} ${styles['google-button']}`}>{icons.googleicon}Continue with Google</button>
        <div className={styles["save-modal-or"]}>or</div>
        <button className={`${styles["gallery-button"]} ${styles["email-button"]}`}>Sign up with Email</button>
        <div className={styles["save-modal-login"]}>Already have an Airbnb account? <a>Log in</a></div>
        <div>Other Stuff</div>
      </div>
    </div>
  );
}

export default SaveModal;