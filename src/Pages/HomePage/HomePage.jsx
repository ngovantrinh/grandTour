import React, { useState } from "react";
import styles from "./index.module.scss";
import InputSearch from "components/Inputs/InputSearch";
import SelectInputField from "components/Inputs/SelectInputField";
import Calendar from "assets/icon/Calendar";
import {
  advancedSearch,
  articles,
  bestValueTrips,
  normalSearch,
  popular,
  reasons,
} from "constants/constants";
import UpDownArrow from "assets/icon/UpDownArrow";
import Arrow from "assets/icon/Arrow";
import PlaceImage from "components/ImagesBox/PlaceImage";
import FirstLayout from "./layouts/FirstLayout/FirstLayout";
import ImageTopContentBottom from "components/ImagesBox/ImageTopContentBottom";

const HomePage = () => {
  const [isAdvancedSearchHover, setIsAdvancedSearchHover] = useState(false);

  const inputHandler = (aa) => {
    console.log(aa);
  };

  const onShowAdvancedSearch = () => {
    setIsAdvancedSearchHover(!isAdvancedSearchHover);
  };

  const showAdvancedSearch = () => {
    if (isAdvancedSearchHover) {
      return (
        <div className={styles.tour_search_wrapper}>
          {advancedSearch.map((item) => (
            <div key={item.placeholder} className={styles.input_item}>
              <SelectInputField
                placeholder={item.placeholder}
                optionSelect={item.data}
                icon={<Arrow fontSize="15px" color={"#555555"} />}
              />
            </div>
          ))}
          <div className={styles.input_item}>
            <InputSearch
              inputHandler={inputHandler}
              placeholder="Enter text search"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.banner}>
        <div className={styles.video_background}>
          <div className={styles.overlay_video}>
            <div className="container">
              <div className={styles.banner_content}>
                <h3 className={styles.banner_title}>
                  Where do you want to go?
                </h3>
                <p className={styles.banner_note}>
                  Trips, experiences, and places. All in one service.
                </p>
                <form className={styles.form_search} action="" method="get">
                  <div className={styles.tour_search_wrapper}>
                    <div className={styles.input_item}>
                      <InputSearch
                        inputHandler={inputHandler}
                        placeholder="Enter text search"
                      />
                    </div>
                    {normalSearch.map((item) => (
                      <div key={item.placeholder} className={styles.input_item}>
                        <SelectInputField
                          placeholder={item.placeholder}
                          optionSelect={item.data}
                          icon={
                            (item.type === "month" && (
                              <Calendar fontSize={"15px"} color={"#555555"} />
                            )) ||
                            (item.type === "arrange" && (
                              <UpDownArrow
                                fontSize={"15px"}
                                color={"#555555"}
                              />
                            ))
                          }
                        />
                      </div>
                    ))}
                    <div className={styles.input_item}>
                      <button
                        onClick={(e) => e.preventDefault()}
                        className={styles.button_search}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  {showAdvancedSearch()}
                </form>
                <div
                  className={styles.advanced_search_title}
                  onClick={onShowAdvancedSearch}
                >
                  <span className={styles.arrow_icon}>
                    <Arrow fontSize="12px" color={"white"} />
                  </span>
                  <span>Advanced Search</span>
                </div>
              </div>
            </div>
          </div>
          <iframe
            className={styles.video_bg}
            id="VideoWorker-0"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Spectacular Norway - from the air"
            src="https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&rel=0&mute=1&autoplay=1&playsinline=1&iv_load_policy=3&modestbranding=1&controls=0&showinfo=0&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fthemes.themegoods.com&widgetid=1"
          ></iframe>
        </div>
      </div>
      <div className={`${styles.content_box} ${styles.popular}`}>
        <FirstLayout
          title={"Popular Destinations"}
          subTitle="World's best tourist destinations"
        >
          <div className={styles.list_items}>
            {popular.map((item) => (
              <div key={item.title} className={styles.item_list}>
                <PlaceImage
                  urlImage={item.urlImage}
                  title={item.title}
                  type="img"
                />
              </div>
            ))}
          </div>
        </FirstLayout>
      </div>

      <div className={`${styles.content_box} ${styles.trips}`}>
        <FirstLayout
          title={"Best Value Trips"}
          subTitle="Best offers trips from us"
        >
          <div className={styles.list_items}>
            {bestValueTrips.map((item) => (
              <div key={item.title} className={styles.item_list}>
                <PlaceImage
                  urlImage={item.urlImage}
                  title={item.title}
                  type="price"
                  time={item.time}
                  sale={item.sale}
                  salePrice={item.sale_price}
                  address={item.address}
                  reviewStar={item.review_star}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </FirstLayout>
      </div>
      <div className={`${styles.content_box} ${styles.reasons}`}>
        <FirstLayout
          title={"Why Choose Us"}
          subTitle="Here are reasons you should plan trip with us"
        >
          <div className={styles.list_items}>
            {reasons.map((item) => (
              <div key={item.title} className="item-list">
                <ImageTopContentBottom
                  imgUrl={item.imgUrl}
                  title={item.title}
                  content={item.content}
                />
              </div>
            ))}
          </div>
        </FirstLayout>
      </div>
      <div className={styles.bridge_image}></div>
      <div
        className={`${styles.content_box}  ${styles.trips} ${styles.articles}`}
      >
        <FirstLayout
          title={"Articles & Tips"}
          subTitle="Explore some of the best tips from around the world"
        >
          <div>
            <div className={styles.list_items}>
              {articles.map((item) => (
                <div key={item.title} className={styles.item_list}>
                  <PlaceImage
                    urlImage={item.urlImage}
                    title={item.title}
                    type="articles"
                    content={item.content}
                    date={item.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </FirstLayout>
      </div>
    </div>
  );
};

export default HomePage;
