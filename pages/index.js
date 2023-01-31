import Header from "../component/header/Header";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import { Gif, hesabdarymali } from "../component/img/image";

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <Header />
      <div className={classes.sectionOne}>
        <Image src={Gif} className={classes.gif} alt="logo" />
      </div>
      <div className={classes.sectionTwo}>
        <h1 className={classes.sectionTwoTitle}>محصولات نرم افزاری</h1>
        <div className={classes.partBox}>
          <span className={classes.gifBox}>
            <Image src={hesabdarymali} className={classes.hesabdarymali} alt="logo" />
          </span>
          <div className={classes.boxPart}>
            <h2 className={classes.titlePart}>حسابداری و مالی</h2>
            <p className={classes.paraghrafPart}>
              امکان مشاهده کارتابل اتوماسیون اداری از درون سیستم مالی، صدور سند
              خلاصه ماهیانه علامت گذاری در دفاتر حساب برای گرفتن مغایرت امکان
              تعریف و ذخیره سازی گزارش های پارامتریک از عملکرد حسابها، تفصیلی
              های شناور، مراکز هزینه و پروژه ها
            </p>
            <button className={classes.buttonPart}>بیشتر بدانید</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
