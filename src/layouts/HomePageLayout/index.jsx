import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import logoWhite from "assets/images/logo@2x_white.png";
import logoBlack from "assets/images/logo@2x.png";
import imageAwards from "assets/images/footerImages/awards.png";

import { headerMenu, imagesFooter } from "constants/constants";
import Arrow from "assets/icon/Arrow";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart, AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephoneFill, BsFacebook } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { ImYoutube } from "react-icons/im";

const HomePageLayout = ({ children }) => {
  const [offSetY, setOffSetY] = useState(0);
  const preventOffset = useRef(offSetY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    preventOffset.current = offSetY;
  }, [offSetY]);
  const handleScroll = () => {
    setOffSetY(() => window.pageYOffset);
  };

  const classHeaderBox = () => {
    if (preventOffset.current < offSetY) {
      return styles.scroll_down;
    }
    return styles.scroll_up;
  };

  const whenOffSetYhigher = (classCoditionOne, classCoditionTwo) => {
    if (offSetY > 200) {
      return classCoditionOne;
    }
    return classCoditionTwo;
  };

  const onShowMenu = () => {
    console.log(offSetY);
  };

  return (
    <div className={styles.body_wrapper}>
      <div
        className={`${
          styles.header_wrapper
        } ${classHeaderBox()} ${whenOffSetYhigher(
          styles.hasbg_white,
          styles.hasbg_transparent
        )}`}
      >
        <div className="container">
          <div className={`${styles.header}`}>
            <div className={styles.header_logo}>
              <img
                src={whenOffSetYhigher(logoBlack, logoWhite)}
                alt="img_logo"
              />
            </div>
            <div className={styles.header_menu}>
              {headerMenu.map((item) => (
                <div className={styles.menu_item} key={item.title}>
                  <p className={styles.item_title}>
                    {item.title}
                    <span className={styles.arrow_icon}>
                      <Arrow
                        fontSize="9px"
                        color={whenOffSetYhigher("black", "white")}
                      />
                    </span>
                  </p>
                  {item.children.length && (
                    <div className={styles.hover_items}>
                      {item.children.map((child) => (
                        <div className={styles.hover_item} key={child.title}>
                          {child.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className={styles.logo_right}>
                <div className={styles.icon} onClick={onShowMenu}>
                  <GiHamburgerMenu
                    fontSize={"15px"}
                    color={whenOffSetYhigher("black", "white")}
                  />
                </div>
                <div className={styles.icon}>
                  <AiOutlineShoppingCart
                    fontSize={"15px"}
                    color={whenOffSetYhigher("black", "white")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className={styles.footer_wrapper}>
        <div className="container">
          <div className={styles.footer_content}>
            <div className={styles.item_box_content}>
              <h3 className={styles.title}>Our Awards</h3>
              <p className={styles.inner_text}>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </p>
              <div className={styles.list_img}>
                <img src={imageAwards} alt="img_award" />
              </div>
            </div>
            <div className={styles.item_box_content}>
              <h3 className={styles.title}>Contact Info</h3>
              <div className={styles.inner_text}>
                <BsTelephoneFill fontSize={"15px"} color={"#cccccc"} />
                1-567-124-44227
              </div>
              <div className={styles.inner_text}>
                <IoLocationOutline fontSize={"15px"} color={"#cccccc"} />
                184 Main Street East Perl Habour 8007
              </div>
              <div className={styles.inner_text}>
                <LuCalendarClock fontSize={"15px"} color={"#cccccc"} />
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </div>
              <div className={styles.list_icon_app}>
                <div className={styles.icon_box}>
                  <BsFacebook
                    className={styles.icon_app}
                    fontSize={"35px"}
                    color="#2D5F9A"
                  />
                </div>
                <div className={styles.icon_box}>
                  <AiFillTwitterCircle
                    className={styles.icon_app}
                    fontSize={"35px"}
                    color="#00C3F3"
                  />
                </div>
                <div className={`${styles.icon_box} ${styles.youtobe}`}>
                  <ImYoutube
                    className={styles.icon_app}
                    fontSize={"35px"}
                    color="#cc181e"
                  />
                </div>
              </div>
            </div>
            <div className={styles.item_box_content}>
              <h3 className={styles.title}>Recent Trips</h3>
              <div className={styles.list_images}>
                {imagesFooter.map((item) => (
                  <div key={item.id} className={styles.image}>
                    <img src={item.image} alt="image_footer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
