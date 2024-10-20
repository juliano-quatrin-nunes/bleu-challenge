import Button from "@/components/Button/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.spaceBetweenRow}>
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </div>
  );
};

export default Footer;
