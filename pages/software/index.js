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
import Link from "next/link";

const SoftWare = () => {
  const [data] = useState([
    {
      title: "نرم افزار ارتباط از راه دور",
      source: AnyDesk,
      url: "https://amisa.co/wp-content/uploads/2021/07/AnyDesk.zip",
    },
    {
      title: "راهنمای نرم افزار آمیسا",
      source: Pdf,
      url: "https://amisa.co/wp-content/uploads/2021/07/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C-%D9%86%D8%B1%D9%85-%D8%A7%D9%81%D8%B2%D8%A7%D8%B1-%D8%AC%D8%A7%D9%85%D8%B9-%D8%A2%D9%85%DB%8C%D8%B3%D8%A7-Automation-Budgeting-Treasury-Systems-.pdf",
    },
    {
      title: "نسخه آمیسا(LAST)",
      source: Amisa,
      url: "https://amisa.co/wp-content/uploads/2021/LAST/Acc1401-06-24.RAR",
    },
    {
      title: "نسخه آمیسا(LTS)",
      source: AmisaGreen,
      url: "https://amisa.co/wp-content/uploads/2021/LTS/Acc1400-03-30.RAR",
    },
    {
      title: "کریستال ریپورت 64 بیت",
      source: Cristal,
      url: "https://amisa.co/wp-content/uploads/2021/download/CRRuntime_64bit_13_0_22.msi",
    },
    {
      title: "کریستال ریپورت 32 بیت",
      source: Cristal,
      url: "https://amisa.co/wp-content/uploads/2021/download/CRRuntime_32bit_13_0_22.msi",
    },
    {
      title: "ویژوال 32 بیتی",
      source: VisualStudio,
      url: "https://amisa.co/wp-content/uploads/2021/download/vc_redist.x64.exe",
    },
    {
      title: "ویژوال 64 بیتی",
      source: VisualStudio,
      url: "https://amisa.co/wp-content/uploads/2021/download/vc_redist.x64.exe",
    },
    {
      title: "نرم افزار فشرده ساز",
      source: WinRar,
      url: "https://amisa.co/wp-content/uploads/2021/07/WinRAR.v5.40.x64_p30download.com_.zip",
    },
    {
      title: "دات نت ورژن4/5",
      source: NetCore,
      url: "https://amisa.co/wp-content/uploads/2021/download/NDP452-KB2901907.exe",
    },
    {
      title: "دات نت فریم ورک 4",
      source: NetFramWork,
      url: "https://amisa.co/wp-content/uploads/2021/download/dotNetFx40_Full_setup.exe",
    },
    {
      title: "درایور قفل",
      source: SafeNet,
      url: "https://amisa.co/wp-content/uploads/2021/07/Sentinel_Protection_Installer_7.6.9.zip",
    },
    {
      title: "نود جی اس",
      source: Node,
      url: "https://amisa.co/wp-content/uploads/2021/download/node-v14.18.0-x64.msi",
    },
    {
      title: "دات نت هاستینگ",
      source: NetHosting,
      url: "https://amisa.co/wp-content/uploads/2021/07/dotnet-hosting-3.1.2-win.exe",
    },
    {
      title: "درایور دیسکت بیمه",
      source: SendList,
      url: "https://amisa.co//wp-content/uploads/2021/download/vfpoledb.exe",
    },
    {
      title: "SQL Server Native Client",
      source: NativeClient,
      url: "https://amisa.co//wp-content/uploads/2021/download/SQL-Native-Client.zip",
    },
  ]);
  return (
    <Layout>
      <Title title="نرم افزارهای پیش نیاز" />
      <div className={classes.container}>
        {data.map((item, index) => (
          <Link href={item.url}>
            <div key={index} className={classes.imageBox}>
              <Image src={item.source} height={"50px"} />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default SoftWare;
