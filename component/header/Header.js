import classes from "../../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../img/image";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
      <nav className={classes.nav}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <Link className={classes.link} href="/">
              خانه
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="softWare">
              نرم افزار های پیش نیاز
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="product">
              محصولات
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="job">
              فرصت های شغلی
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="education">
              آموزش ها
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="news">
              اخبار
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="about">
              درباره ما
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} href="shop">
              فروشگاه
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.demoBox}>
        <Link className={classes.demoLink}href="demo">فرم درخواست دمو</Link>
      </div>
    </div>
  );
};

export default Header;
