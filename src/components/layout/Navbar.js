import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from "../../img/casamento_logo2.png"; //colocar imagem V&N aqui

function Navbar () {
return (
    <nav className={styles.navbar}>
    <Container>
        <Link to="/">
          <img src={logo} alt="nEv" />
        </Link>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/menu">Menu</Link>
            </li>
            <li className={styles.item}>
                <Link to="/pix">Pix</Link>
            </li>
        </ul>
    </Container>
  </nav>
)
}

export default Navbar