import React, { useState } from "react";
import styles from "./index.module.scss";
import Arrow from "assets/icon/Arrow";

let data = ["item 1", "item 2", "item 3", "item 4"];

const InputSearch = ({ inputHandler, placeholder = "Enter search" }) => {
  const [isShowListOption, setIsShowListOption] = useState(false);

  const handleChange = (e) => {
    inputHandler(e.target.value);
    if (e.target.value.length) {
      setIsShowListOption(true);
    } else setIsShowListOption(false);
  };
  return (
    <div className={styles.input_search_box}>
      <div className={styles.input_search}>
        <input
          type="text"
          name="inputSearch"
          onChange={handleChange}
          placeholder={placeholder}
        />
        <div className={styles.icon_search}>
          <Arrow fontSize={"15px"} />
        </div>
      </div>
      {isShowListOption ? (
        <div className={styles.option_search}>
          {data.map((item) => (
            <div
              onClick={() => setIsShowListOption(false)}
              className={styles.option_item}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default InputSearch;
