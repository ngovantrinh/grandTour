import React from "react";
import styles from "./index.module.scss";

const FirstLayout = ({ title, subTitle, children }) => {
  return (
    <div className="container">
      <div className={styles.title}>{title}</div>
      <div className={styles.sub_title}>{subTitle}</div>
      {children}
    </div>
  );
};

export default FirstLayout;
