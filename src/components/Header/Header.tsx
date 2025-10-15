import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={styles.h1}>Header</h1>
      <Breadcrumbs />
    </>
  );
};

export default Header;
