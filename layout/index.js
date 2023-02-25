import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import classes from "../styles/layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
