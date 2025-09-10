
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>AlgoVisual</h2>
      <div className={styles.links}>
        <Link to="/bubble">Bubble</Link>
        <Link to="/quick">Quick</Link>
        <Link to="/merge">Merge</Link>
        <Link to="/insertion">Insertion</Link>
        <Link to="/selection">Selection</Link>
      </div>
    </nav>
  );
};

export default Navbar;
