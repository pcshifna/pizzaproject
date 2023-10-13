// import React from "react";
import styles from "./Manufaure.module.css";
const ManufactureCard = (props) => {
  return (
    <div className={styles.maufatureItem}>
      <div className={styles.maufactureItemImage}>
        <img src={props?.data?.manufactureImage} />
      </div>
      <div className={styles.manufactureLogo}>
        <img src={props?.data?.manufactureLogo} />
      </div>
      <p>{props?.data?.manufactureCategory}</p>
    </div>
  );
};

export default ManufactureCard;
