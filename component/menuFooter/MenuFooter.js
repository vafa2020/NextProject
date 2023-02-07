import Image from "next/image";
import classes from "../../styles/menuFooter.module.css";
const MenuFooter = ({ data }) => {
  return (
    <div className={classes.menu}>
      <h2 className={classes.title}>{data.title}</h2>
      {data.title === "مجوزها" ? (
        <ul className={classes.itemsImages}>
          {data.items.map((item, index) => (
            <Image className={classes.image} key={index} src={item} />
          ))}
        </ul>
      ) : (
        <ul className={classes.items}>
          {data.items.map((item, index) => (
            <li className={classes.item} key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuFooter;
