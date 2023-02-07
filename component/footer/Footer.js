import { callInformation, helpfulLink, newText, permissions } from "../../data/DataMenuFooter";
import classes from "../../styles/footer.module.css";
import MenuFooter from "../menuFooter/MenuFooter";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <MenuFooter data={callInformation} />
      <MenuFooter data={newText} />
      <MenuFooter data={helpfulLink} />
      <MenuFooter data={permissions} />
    </div>
  );
};
export default Footer;
