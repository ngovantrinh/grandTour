import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const SelectInputField = ({
  placeholder = "Enter search",
  optionSelect,
  icon,
}) => {
  const [isShowListOption, setIsShowListOption] = useState(false);

  const [inputText, setInputText] = useState(placeholder);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShowListOption(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const handleSelectOption = (item) => {
    setInputText(item);
    setIsShowListOption(false);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className={styles.input_search_box}>
      <div
        className={styles.input_search}
        onClick={() => setIsShowListOption(!isShowListOption)}
      >
        <div className={styles.input_text}>{inputText}</div>
        <div className={styles.icon_search}>{icon}</div>
      </div>
      {isShowListOption ? (
        <div className={styles.option_search}>
          {optionSelect.map((item) => (
            <div
              onClick={() => handleSelectOption(item)}
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

export default SelectInputField;
