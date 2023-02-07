import Image from "next/image";
import { useState } from "react";
import classes from "../../styles/accordion.module.css";
import { qustions } from "../img/image";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const Accordion = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div>
        {data.map((item) => (
          <div className={classes.accordion}>
            <div className={classes.boxTitle}
              onClick={() => {
                item.status = !item.status;
                setIsActive(!isActive);
              }}
            >
              <span className={classes.boxIcon}>{isActive & item.status ? <SlArrowUp className={classes.icon} /> : <SlArrowDown />}</span>
              <h2>{item.title}</h2>
            </div>
            {isActive & item.status ? (
              <div className={classes.content}>{item.content}</div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className={classes.boxImage}>
        <Image className={classes.image} src={qustions} />
      </div>
    </div>
  );
};
export default Accordion;
