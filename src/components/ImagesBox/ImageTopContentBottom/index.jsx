import React from "react";
import styles from './index.module.scss'

const ImageTopContentBottom = ({ imgUrl, title, content }) => {
  return (
    <div className={styles.wrapper_item}>
      <div className={styles.image}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.content_title}>{title}</h3>
        <p className={styles.content_inner}>{content}</p>
      </div>
    </div>
  );
};

export default ImageTopContentBottom;
