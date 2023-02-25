import Image from "next/image";
import { useState } from "react";
import Title from "../../component/title/Title";
import Layout from "../../layout";
import AnyDesk from "../../public/image/software/anydesk.png";
import AmisaGreen from "../../public/image/software/amisa-logo-green.png";
import Amisa from "../../public/image/software/amisa-logo.png";
import Cristal from "../../public/image/software/cristal.png";
import NativeClient from "../../public/image/software/nativeClient.png";
import NetCore from "../../public/image/software//NET_Core_Logo.png";
import NetFramWork from "../../public/image/software/NET-framework-4.5.png";
import NetHosting from "../../public/image/software/nethosting.png";
import Node from "../../public/image/software/nodejs.png";
import Pdf from "../../public/image/software/pdf.png";
import SafeNet from "../../public/image/software/safenet.png";
import SendList from "../../public/image/software/sendList.png";
import VisualStudio from "../../public/image/software/Visual_Studio.png";
import WinRar from "../../public/image/software/WinRAR.png";

import classes from "../../styles/software.module.css";

const SoftWare = () => {
  const [data] = useState([
    { title: "نرم افزار ارتباط از راه دور", source: AnyDesk },
    { title: "راهنمای نرم افزار آمیسا", source: Pdf },
    { title: "نسخه آمیسا(LAST)", source: Amisa },
    { title: "نسخه آمیسا(LTS)", source: AmisaGreen },
    { title: "کریستال ریپورت 64 بیت", source: Cristal },
    { title: "کریستال ریپورت 32 بیت", source: Cristal },
    { title: "ویژوال 32 بیتی", source: VisualStudio },
    { title: "ویژوال 64 بیتی", source: VisualStudio },
    { title: "نرم افزار فشرده ساز", source: WinRar },
    { title: "دات نت ورژن4/5", source: NetCore },
    { title: "دات نت فریم ورک 4", source: NetFramWork },
    { title: "درایور قفل", source: SafeNet },
    { title: "نود جی اس", source: Node },
    { title: "دات نت هاستینگ", source: NetHosting },
    { title: "درایور دیسکت بیمه", source: SendList },
    { title: "SQL Server Native Client", source: NativeClient },
  ]);
  return (
    <Layout>
      <Title title="نرم افزارهای پیش نیاز" />
      <div className={classes.container}>
        {data.map((item, index) => (
          <div key={index} className={classes.imageBox}>
            <Image src={item.source} height={"50px"} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default SoftWare;
