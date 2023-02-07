import Image from "next/image";
import classes from "../../styles/accordion.module.css";
import { qustions } from "../img/image";
const Accordion = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.accordion}></div>
      <div className={classes.boxImage}>
        <Image className={classes.image} src={qustions}/>
      </div>
    </div>
  );
};
export default Accordion;
