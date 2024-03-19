import React, {useState} from "react";
import styles from "@/styles/drop-down-menu.module.css";
import {DropDownMenu} from "@/types/drop-down-menu";

const DropDownMenu = ({text, list, func} : DropDownMenu) : JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [variant, setVariant] = useState<null | string>(null);

  const sendVariant = (text : string) => {
    if (variant != text) {
      setVariant(text);
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={
      `${styles.main} ${isOpen ? styles.open : ""}`}>
      <div className={`${styles.textWithArrow} ${variant ? styles.textAndArrowWithVariant : ""}`}
        onClick={() => {
          setIsOpen((prev) => !prev); console.log(variant);
        }}>
        <span>{variant ? variant : text}</span>
        <svg className={isOpen ? styles.downArrow : styles.upArrow}
          viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.3776e-07 8.0755C4.14474 8.0755 7.5 12.9628 7.5 19M15
         8.0755C10.8553 8.0755 7.5 12.9628 7.5 19M7.5 19L7.5 0" stroke="#343434"
          strokeMiterlimit="10" />
        </svg>
      </div>
      {isOpen &&
            <div className={styles.dropDownList}>
              <ul className={styles.list}>
                {list.map((obj, _) => {
                  if (variant !== obj) {
                    return (
                      <li key={_} className={styles.listI}
                        onClick={() => sendVariant(obj)}><span>{obj}</span></li>
                    );
                  }
                })}
              </ul>
            </div>
      }
    </div>
  );
};

export default DropDownMenu;
