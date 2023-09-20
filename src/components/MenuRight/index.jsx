import React from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideMenuStatus } from "redux/featuresSlice/statusShowMenu";

const MenuRight = () => {
  const menuStatus = useSelector((state) => state.menuStatus.showMenu);

  const dispatch = useDispatch();

  const handleHideMenu = () => {
    dispatch(hideMenuStatus());
  };
  console.log(menuStatus);
  return (
    <div className={`${styles.wrapper} ${menuStatus && styles.show_menu}`}>
      <div className={styles.menu_wrapper}>
        <div onClick={handleHideMenu}>close</div>
        <p>line 1</p>
        <p>line 4</p>
        <p>line 3</p>
      </div>
    </div>
  );
};

export default MenuRight;
