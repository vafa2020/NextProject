import classes from "../../styles/Title.module.css";
const Title = ({ title }) => {
  return (
    <div className={classes.container}>
      <b className={classes.border}>
        <h1 className={classes.title}>{title}</h1>
      </b>
    </div>
  );
};

export default Title;
