import React from "react";
import styles from "./index.module.scss";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const PlaceImage = ({
  urlImage,
  title,
  type,
  price,
  time,
  salePrice,
  sale,
  address,
  reviewStar,
  date,
  content,
}) => {
  const backgroundImage = () => {
    if (type === "img") {
      return `url(${urlImage})`;
    }
    return "";
  };

  return (
    <div
      className={`${styles.item_wrapper} ${
        (type === "price" || type === "articles") && styles.price_style
      }`}
    >
      <div
        className={styles.tour_image}
        style={{ backgroundImage: backgroundImage() }}
      >
        {(type === "price" || type === "articles") && (
          <img src={urlImage} alt="" />
        )}
        {type === "img" && <p>{title}</p>}
        {type === "price" && !sale && (
          <div className={styles.price}>${price}</div>
        )}
        {type === "price" && sale && (
          <div className={styles.price_sale}>
            <span className={styles.price_decoration}>${price}</span> $
            {salePrice}
          </div>
        )}
      </div>
      {type === "price" && (
        <div className={styles.portfolio_info_wrapper}>
          <h4 className={styles.info_title}>{title}</h4>
          <p className={styles.address}>{address}</p>
          <div className={styles.tour_attribute_wrapper}>
            <div className={styles.tour_attribute_rating}>
              <div className={styles.star_box}>
                {[...Array(5)].map((star, index) => {
                  return index < reviewStar ? (
                    <AiTwotoneStar
                      key={index}
                      className="star"
                      size={15}
                      color={"#1EC6B6"}
                    />
                  ) : (
                    <AiOutlineStar key={index} size={15} color={"#d2d2d2"} />
                  );
                })}
              </div>
              <div className={styles.text}>{reviewStar} reviews</div>
            </div>
            <div className={styles.tour_attribute_days}>
              <BiTime size={15} color="#222222" />
              <p>{time}</p>
            </div>
          </div>
        </div>
      )}
      {type === "articles" && (
        <div className={`${styles.portfolio_info_wrapper} ${styles.articles_info}`}>
          <p className={styles.date}>{date}</p>
          <h4 className={styles.info_title}>{title}</h4>
          <p className={styles.content_articles}>{content}</p>
          <p className={styles.read_more}>
            Read more
            <span>
              <IoIosArrowForward size={15} color="#222222" />
            </span>
          </p>
        </div>
      )}
      {type === "price" && sale ? (
        <div className={styles.sale_title}>Sale</div>
      ) : null}
    </div>
  );
};

export default PlaceImage;
