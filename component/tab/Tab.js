import Image from "next/image";
import { useState } from "react";
import classes from "../../styles/tab.module.css";

const Tab = ({ data }) => {
  const [active, setActive] = useState(data[0].Title);
  return (
    <div>
      {data.map((item) => (
        <button
          className={classes.button}
          active={active === item.Title ? "true" : "false"}
          onClick={() => setActive(item.Title)}
          key={item.id}
        >
          {item.Title}
        </button>
      ))}
      {data.map(
        (item) =>
          item.Title === active && (
            <div key={item.id} className={classes.wrapper}>
              <div className={classes.boxImage}>
                <Image
                  className={classes.image}
                  src={item.Src}
                 
                />
              </div>
              <div className={classes.content}>
                <p className={classes.paraghraph}>{item.Praghraph}</p>
                <ul className={classes.items}>
                  {item.List.map((item) => (
                    <li className={classes.item} key={item.id}>
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Tab;
