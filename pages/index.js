import classes from "../styles/home.module.css";
import Image from "next/image";
import { Gif } from "../component/img/image";
import Product from "../component/product/Product";
import dataProduct from "../data/DataProduct";
import Title from "../component/title/Title";
import DataTab from "../data/DataTab";
import Tab from "../component/tab/Tab";
import Accordion from "../component/accordion/Accordion";
import dataAccordion from "../data/DataAccordion";
import Layout from "../layout";

const HomePage = () => {
  return (
    <Layout>
      <div className={classes.HomePage}>
        <div className={classes.sectionOne}>
          <Image
            src={Gif}
            className={classes.gif}
            alt="Picture of the author"
          />
        </div>
        <div className={classes.sectionTwo}>
          <Title title="محصولات نرم افزاری" />
          <div className={classes.wrapperProduct}>
            {dataProduct.map((product) => (
              <Product
                key={product.id}
                title={product.Title}
                src={product.Src}
                paragraph={product.Paragraph}
              />
            ))}
          </div>
          <Title title="خدمات امین سیستم آرمان" />
          <Tab data={DataTab} />
          <Title title="سوالات متداول" />
          <Accordion data={dataAccordion} />
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;
