import React from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideMenuStatus } from "redux/featuresSlice/statusShowMenu";
import { headerMenu } from "constants/constants";
import { AiOutlineClose } from "react-icons/ai";

const MenuRight = () => {
  const menuStatus = useSelector((state) => state.menuStatus.showMenu);

  const dispatch = useDispatch();

  const handleHideMenu = () => {
    dispatch(hideMenuStatus());
  };
  return (
    <div className={`${styles.wrapper} ${menuStatus && styles.show_menu}`}>
      <div className={styles.menu_wrapper}>
        <h3 className={styles.hide_menu} onClick={handleHideMenu}>
          <AiOutlineClose fontSize={'20px'} color="white" fontWeight={700}/>
        </h3>
        {headerMenu.map((item) => (
          <div key={item.title} className={styles.menu_box}>
            <p className={styles.item_menu}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuRight;
