import React, {useState} from "react";
import styles from "@/styles/ui's/drop-down-menu.module.css";
import {IDropDownMenu} from "@/types/ui/drop-down-menu";


/**
 * Return drop down menu for choosing an option
 * @param {current} current is a current text, that will be displayed
 * when drow down menu is closed
 * @param {defaultValue} defaultValue value that would be displayed if {current}
 * is equal to null or undefined
 * @param {action} action is the function that will triggers after user
 * will choose value in list
 * @param {list} list that will be displayed in drop down menu
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const Menu = ({current, defaultValue, action, list, uniqueClassName}
  : IDropDownMenu<string>) : JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sendVariant = (text : string) => {
    action(text);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={
      `${styles.main} ${isOpen ? styles.open : ""} ${uniqueClassName}`}>
      <div className={`${styles.textWithArrow}
      ${current !== "" ? styles.textAndArrowWithVariant : ""}`}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}>
        <span>{current ? current : defaultValue}</span>
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
                {list.map((genre, _) => {
                  if (current !== genre) {
                    return (
                      <li key={_} className={styles.listI}
                        onClick={() => sendVariant(genre)}><span>{genre}</span></li>
                    );
                  }
                })}
              </ul>
            </div>
      }
    </div>
  );
};

export default Menu;
