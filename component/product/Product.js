import classes from "../../styles/product.module.css";
import Image from "next/image";

const Product = ({ title, src, paragraph, alt }) => {
  return (
    <div className={classes.partBox}>
      <span className={classes.gifBox}>
        <Image src={src} className={classes.image} alt="logo product"/>
      </span>
      <div className={classes.boxPart}>
        <h2 className={classes.titlePart}>{title}</h2>
        <p className={classes.paraghraphPart}>{paragraph}</p>
        <button className={classes.buttonPart}>بیشتر بدانید</button>
      </div>
    </div>
  );
};

export default Product;
