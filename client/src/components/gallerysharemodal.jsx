import React from 'react';
import styles from '../css/gallerysharemodal.module.css';
import icons from './icons.jsx';

const ShareModal = (props) => {
  return (
    <div className={styles["share-modal-background"]} onClick={props.handleClick}>
      <div className={styles["share-modal-container"]} onClick={(event)=>{event.preventDefault(); event.stopPropagation(); event.nativeEvent.stopImmediatePropagation();}}>
        <svg className={styles['share-modal-x-svg']} onClick={props.handleClick} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false"><path d="m23.25 24c-.19 0-.38-.07-.53-.22  l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
        <h2>Share</h2>
        <div className={styles["share-modal-row"]}>{icons.facebookicon}Facebook</div>
        <div className={styles["share-modal-row"]}>{icons.twittericon}Twitter</div>
        <div className={styles["share-modal-row"]}>{icons.messengericon}Messenger</div>
        <div className={styles["share-modal-row"]}>{icons.emailicon}Email</div>
        <div className={styles["share-modal-row"]}>{icons.copyicon}Copy Link</div>
        <div className={styles["share-modal-row"]}>{icons.embedicon}Embed</div>
      </div>
    </div>
  );
}

export default ShareModal;